import Image from "next/image";
import React from "react";
import styles from "./bottomBar.module.css";
import { BiSolidBattery } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
export const BottomBar = () => {
  return (
    <div className={styles.bottomBar}>
      <Image
        className={styles.avatar}
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        alt="avatar"
        width={50}
        height={50}
      />
      <p>10:28 PM</p>
      <BiSolidBattery size={25} />
      <FaWifi size={25} />
      <p>28°C</p>
    </div>
  );
};
