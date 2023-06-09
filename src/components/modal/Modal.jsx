import React from "react";
import ReactDOM from "react-dom";

import "../../../dist/index.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 opacity-80 fixed top-0 left-0 flex justify-center items-center w-full h-screen">
      {children}
    </div>,

    document.getElementById("modal")
  );
}

export default Modal;
