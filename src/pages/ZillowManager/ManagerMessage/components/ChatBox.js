import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import { FiArrowLeft } from "react-icons/fi";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { useAuth } from "../../../../ContextApi/AuthContext";
import { db } from "../../../../Firebase/firebase";
import userimg from "../../../../assets/images/YourTeamLO.png";
import { Box, CircularProgress } from "@mui/material";

const ChatBox = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [sender, setSender] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userid } = useAuth();
  const messagesEndRef = useRef(null);

  const currentUserId = userid;

  useEffect(() => {
    const fetchUserData = async (userId, setUserData) => {
      const userDoc = await getDoc(doc(db, "Users", userId));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    };

    const loadData = async () => {
      await fetchUserData(currentUserId, setSender);
      await fetchUserData(userId, setReceiver);
      setLoading(false);
    };

    loadData();
  }, [currentUserId, userId]);

  useEffect(() => {
    const chatId = getChatId(currentUserId, userId);

    const messagesQuery = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
      const messagesList = [];
      querySnapshot.forEach((doc) => {
        messagesList.push(doc.data());
      });
      setMessages(messagesList);
    });

    return () => unsubscribe();
  }, [userId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getChatId = (user1, user2) => {
    return user1 < user2 ? `${user1}_${user2}` : `${user2}_${user1}`;
  };

  const sendMessage = async () => {
    const chatId = getChatId(currentUserId, userId);

    if (newMessage.trim() === "") return;

    const message = {
      text: newMessage,
      senderId: currentUserId,
      timestamp: new Date(),
    };

    await addDoc(collection(db, "chats", chatId, "messages"), message);

    // Update the last message and timestamp in the chat document
    const chatDocRef = doc(db, "chats", chatId);
    await setDoc(
      chatDocRef,
      {
        lastMessage: message.text,
        lastMessageTimestamp: message.timestamp,
        participants: [currentUserId, userId],
      },
      { merge: true }
    );

    setNewMessage("");
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-card text-card-foreground">
      <div className="bg-primary text-primary-foreground p-4 flex items-center">
        <div
          className="flex items-center"
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        >
          <FiArrowLeft size={20} className="mr-2 text-white" />
        </div>
        <span className="font-bold text-white">
          Chat with {receiver ? receiver.screenName : "User"}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-muted-foreground">
            Start a conversation
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start space-x-2 ${
                message.senderId === currentUserId ? "justify-end" : ""
              }`}
            >
              {message.senderId !== currentUserId && (
                <img
                  className="rounded-full w-8 h-8 items-center justify-center"
                  src={receiver?.photoURL || userimg}
                  alt="Receiver"
                />
              )}
              <div>
                <div
                  className={`p-3 rounded-lg shadow-md ${
                    message.senderId === currentUserId
                      ? "bg-primary text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-xs text-muted-foreground mt-1 ${
                    message.senderId === currentUserId ? "text-right" : ""
                  }`}
                >
                  {new Date(message.timestamp.seconds * 1000).toLocaleString()}
                </div>
              </div>
              {message.senderId === currentUserId && (
                <img
                  className="rounded-full w-8 h-8 items-center justify-center"
                  src={sender?.photoURL || userimg}
                  alt="Sender"
                />
              )}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white flex items-center space-x-2 border-t border-border">
        <input
          type="text"
          className="flex-1 p-2 border border-input rounded-lg"
          placeholder="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="p-3" onClick={sendMessage}>
          <IoSend className="text-black" size={25} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
