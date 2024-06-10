import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useAuth } from "../../../../ContextApi/AuthContext";
import { db, storage } from "../../../../Firebase/firebase";

export default function PhotoEditSection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const { userid } = useAuth(); // Get the current user

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveClick = async () => {
    if (photoFile && userid) {
      const storageRef = ref(
        storage,
        `profilePhotos/${userid}/${photoFile.name}`
      );

      try {
        // Upload the file to Firebase Storage
        await uploadBytes(storageRef, photoFile);

        // Get the file's URL
        const photoURL = await getDownloadURL(storageRef);

        // Save the URL to Firestore, ensuring `photoURL` field is added
        const userDocRef = doc(db, "Users", userid);

        // Check if user already has a photoURL
        const userDoc = await getDoc(userDocRef);
        const userData = userDoc.data();
        if (userData && userData.photoURL) {
          // Delete the previous photo from Storage
          const prevPhotoRef = ref(storage, userData.photoURL);
          await deleteObject(prevPhotoRef);
        }

        // Update the user document with the new photoURL
        await setDoc(userDocRef, { photoURL }, { merge: true });

        console.log("Photo saved");
        navigate(-1); // Navigate back to the previous page after successful save
      } catch (error) {
        console.error("Error saving photo:", error);
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleBackClick}
        className="text-blue-600 dark:text-blue-400 mb-4 px-4 pt-2 flex items-center"
      >
        <FiArrowLeftCircle className="inline-block mr-2 " /> Back to Saved homes
      </button>
      <div className="p-6 bg-zinc-50 dark:bg-zinc-800">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Edit photo
        </h1>
        <p className="text-zinc-700 dark:text-zinc-300 mb-6">
          Add an updated photo of yourself to help fill out your profile.
        </p>
        <div
          className="border-2 border-dashed border-blue-500 p-6 text-center cursor-pointer"
          onClick={handlePhotoClick}
        >
          {selectedPhoto ? (
            <img
              src={selectedPhoto}
              alt="Selected"
              className="max-w-full h-auto mx-auto"
            />
          ) : (
            <p className="text-zinc-700 dark:text-zinc-300">
              Click or drop to upload photo
            </p>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePhotoChange}
        />
        {selectedPhoto && (
          <button
            onClick={handleSaveClick}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}
