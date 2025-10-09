import React, { useState } from "react";

const Modal = ({ show, setShow }) => {
  return (
    <>
      {show ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50      backdrop-blur-sm z-50">
          <div className="bg-white w-96 h-56 rounded-2xl shadow-lg p-6 relative">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
              <div>
                <button
                  onClick={() => setShow(false)}
                  className="p-1 h-4 w-4 bg-purple-100 rounded-lg"
                >
                  {" "}
                  X{" "}
                </button>
              </div>
            </div>
            <p className="text-gray-600">
              This is a TailwindCSS modal example.
            </p>
            Modal
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
