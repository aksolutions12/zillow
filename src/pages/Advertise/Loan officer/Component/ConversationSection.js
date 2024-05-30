import React from "react";
import ConversationForm from "./ConversationForm";
import vector from "../../../../assets/images/homevector.jpg";

export default function ConversationSection() {
  return (
    <div
      className="bg-cover bg-center py-10 "
      style={{
        backgroundImage: `url(${vector})`,
      }}
    >
      <div className=" flex items-center justify-center">
        <ConversationForm />
      </div>
    </div>
  );
}
