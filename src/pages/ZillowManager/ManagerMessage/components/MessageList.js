import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import chatimg from "../../../../assets/images/first-time-home-buyers-40223c.png";
import { useAuth } from "../../../../ContextApi/AuthContext";
import { db } from "../../../../Firebase/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { Box, CircularProgress } from "@mui/material";

const MessageList = ({ ptext1, linktxt }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userid } = useAuth();

  useEffect(() => {
    const fetchChatUsers = async () => {
      try {
        const chatsQuery = query(
          collection(db, "chats"),
          where("participants", "array-contains", userid)
        );

        const chatSnapshot = await getDocs(chatsQuery);

        const userIds = new Set();
        const userLastMessages = {};

        chatSnapshot.forEach((doc) => {
          const chatData = doc.data();
          const participants = chatData.participants;

          participants.forEach((id) => {
            if (id !== userid) {
              userIds.add(id);
            }
          });

          userLastMessages[doc.id] = {
            lastMessageTimestamp: chatData.lastMessageTimestamp,
            participants,
          };
        });

        const usersList = [];
        for (const id of userIds) {
          const userDoc = await getDoc(doc(db, "Users", id));
          if (userDoc.exists()) {
            usersList.push({
              id: userDoc.id,
              name: userDoc.data().screenName,
              img: userDoc.data().photoURL || chatimg,
              chatId: `${userid}_${userDoc.id}`,
              lastMessageTimestamp:
                userLastMessages[`${userid}_${userDoc.id}`]
                  ?.lastMessageTimestamp ||
                userLastMessages[`${userDoc.id}_${userid}`]
                  ?.lastMessageTimestamp,
              lastSeenTimestamp:
                userDoc.data().lastSeenTimestamps?.[
                  `${userid}_${userDoc.id}`
                ] ||
                userDoc.data().lastSeenTimestamps?.[
                  `${userDoc.id}_${userid}`
                ] ||
                null,
            });
          }
        }

        setUsers(usersList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching chat users:", error);
        setLoading(false);
      }
    };

    fetchChatUsers();
  }, [userid]);

  const handleNewMessage = (chatId, timestamp) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.chatId === chatId
          ? { ...user, lastMessageTimestamp: timestamp }
          : user
      )
    );
  };

  useEffect(() => {
    const chatsQuery = query(
      collection(db, "chats"),
      where("participants", "array-contains", userid)
    );

    const unsubscribe = onSnapshot(chatsQuery, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "modified") {
          const chatData = change.doc.data();
          handleNewMessage(change.doc.id, chatData.lastMessageTimestamp);
        }
      });
    });

    return () => unsubscribe();
  }, [userid]);

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
    <div className="pt-4">
      <div className="border border-gray-300 flex">
        <div className="flex flex-col items-center justify-center border border-gray-300 bg-background w-full lg:w-1/4">
          <div className="w-full min-h-96">
            <div className="p-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, phone #"
                  className="w-full p-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <IoIosSearch size={20} />
                </button>
              </div>
            </div>
            <hr className="text-gray-900 h-2 mt-2" />
            <div className="flex flex-col p-2">
              {users.length === 0 ? (
                <div className="text-center text-muted-foreground">
                  No users found
                </div>
              ) : (
                users.map((user) => (
                  <Link
                    to={`/chat/${user.id}`}
                    className="flex items-center justify-between w-full px-3 py-2 bg-white border border-gray-200 shadow-md rounded-lg my-1 "
                    key={user.id}
                  >
                    <div className="flex items-center ">
                      <img
                        src={user.img}
                        className="w-12 h-12 rounded-full border border-gray-300"
                        alt={`${user.name} img`}
                      />
                      <h1 className="ml-6 text-base font-semibold text-gray-800">
                        {user.name}
                      </h1>
                    </div>
                    <div className="flex items-center">
                      {user.lastMessageTimestamp &&
                        (!user.lastSeenTimestamp ||
                          new Date(user.lastMessageTimestamp.seconds * 1000) >
                            new Date(
                              user.lastSeenTimestamp.seconds * 1000
                            )) && (
                          <span className="bg-red-500 h-3 w-3 rounded-full mr-2"></span>
                        )}
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center justify-center items-center border border-gray-300 lg:w-1/2 hidden lg:flex">
          <p className="text-muted-foreground text-center text-gray-400">
            {ptext1}
          </p>
          <Link className="text-blue-800 underline">{linktxt}</Link>
        </div>
        <div className="flex flex-col text-center justify-center items-center border border-gray-300 lg:w-1/4 hidden lg:flex">
          <p className="text-muted-foreground text-center text-gray-400">
            See more information on a potential renter here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
