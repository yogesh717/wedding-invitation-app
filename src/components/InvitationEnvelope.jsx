import React from "react";

const InvitationEnvelope = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Envelope */}
        <div className="w-60 h-[500px] bg-blue-100 relative rounded-xl shadow-md">
          <div className="absolute left-1/2 top-0 bottom-0 w-[50%] bg-blue-200 rounded-tr-xl rounded-br-xl -translate-x-1/2 z-10 flex justify-center items-center">
            {/* Pearl Button */}
            <div className="w-10 h-10 rounded-full border-[3px] border-yellow-300 bg-white flex items-center justify-center shadow-md z-20 absolute top-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-white rounded-full shadow-inner"></div>
            </div>

            {/* Vertical Text */}
            <div className="rotate-90 absolute top-1/2 right-6 -translate-y-1/2">
              <p className="text-xl font-serif text-red-800">Wedding Invitation</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col justify-center gap-4">
          <div className="flex gap-4">
            <input
              className="border rounded px-4 py-2 w-60"
              value="Wedding"
              readOnly
            />
            <input
              className="border rounded px-4 py-2 w-60"
              value="Invitation"
              readOnly
            />
          </div>
          <div className="flex gap-4 mt-6">
            <button className="text-pink-600 hover:underline">&larr; Back</button>
            <button className="border border-pink-600 px-6 py-2 rounded-full text-pink-600 hover:bg-pink-100">
              👁 Preview
            </button>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700">
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationEnvelope;
