import Image from "next/image";
import React from "react";
import "../app/globals.css";
export const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <Image
        className="avatar"
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        alt="avatar"
        width={50}
        height={50}
      />
    </div>
  );
};
