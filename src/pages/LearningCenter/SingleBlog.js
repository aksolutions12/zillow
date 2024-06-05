import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import houseimg from "../../assets/images/hom2.jpg";
import house2img from "../../assets/images/home.jpg";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import logoUrl from "../../assets/images/zil-logo.png";
import BottomNavLearning from "./Components/BottomNavLearning";

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const data = [
    {
      id: 1,
      imageUrl: houseimg,
      duration: "13 min read",
      title: "10 Steps to Buying a House",
    },
    {
      id: 2,
      imageUrl: house2img,
      duration: "7 min read",
      title:
        "6 Causes of Buyer's Remorse After Buying a House, According to Homeowners",
    },
    {
      id: 3,
      imageUrl: houseimg,
      duration: "13 min read",
      title: "10 Steps to Buying a House",
    },
    {
      id: 4,
      imageUrl: house2img,
      duration: "7 min read",
      title:
        "6 Causes of Buyer's Remorse After Buying a House, According to Homeowners",
    },
    // Add more data objects as needed
  ];

  useEffect(() => {
    // Fetch blog details from your API using the id
    // Example: fetch(`/api/blogs/${id}`)
    //   .then(response => response.json())
    //   .then(data => setBlog(data))
    //   .catch(error => console.error("Error fetching blog details:", error));

    // For demonstration purposes, find the blog in the data array based on id
    const foundBlog = data.find((item) => item.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      console.error(`Blog with id ${id} not found.`);
    }
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar logoUrl={logoUrl} />
      <BottomNavLearning />
      <div className="p-6 px-10 bg-white py-10">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          {blog.duration}
        </span>
        <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-2 px-4">
          {blog.title}
        </h1>
        <img
          className="w-full mb-4 object-cover rounded-lg"
          src={blog.imageUrl}
          alt="Blog Cover"
        />

        {/* Add other blog details here */}
      </div>
      <Footer />
    </div>
  );
}
