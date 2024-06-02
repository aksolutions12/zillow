import React from "react";

function BuilderMeetSection() {
  return (
    <div className="bg-blue-800 text-white p-8 flex justify-between py-12 items-center">
      <div>
        <h1 className="text-3xl font-bold">Builders, meet buyers</h1>
        <p className="mt-2">
          38% of all buyers consider new construction. Make it easy for them to
          choose you.
        </p>
      </div>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg">
        Advertise
      </button>
    </div>
  );
}

export default BuilderMeetSection;
