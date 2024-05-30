import React from "react";
import OutlinedButton from "../../../../components/Button/OutlinedButton";

import { IoCall } from "react-icons/io5";
export default function FirstStep() {
  return (
    <div className="bg-blue-100 text-center py-16">
      <p className="text-lg font-medium text-zinc-700">
        Take the first step and call today!
      </p>
      <div className="flex justify-center items-center mt-4 mb-4">
        <div className="flex items-center">
          <IoCall size={25} color="blue" className="mr-1" />
          <span className="ml-2 text-2xl font-bold text-zinc-900">
            (877) 661-3172
          </span>
        </div>
      </div>
      <OutlinedButton>Request more info</OutlinedButton>
    </div>
  );
}
