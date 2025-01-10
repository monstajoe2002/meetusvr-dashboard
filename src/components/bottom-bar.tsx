"use client";
import Image from "next/image";
import React from "react";
import bottomBarStyles from "./bottomBar.module.css";
import navButtonStyles from "./navButton.module.css";
import { BiSolidBattery } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import { NavButton } from "./nav-button";
import { HiHome } from "react-icons/hi2";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaBasketShopping } from "react-icons/fa6";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { BsCalendarEventFill } from "react-icons/bs";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { useIsClient, useMediaQuery } from "usehooks-ts";
export const BottomBar = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isClient = useIsClient();
  if (!isDesktop && isClient) return;
  return (
    <div className={bottomBarStyles.bottomBar}>
      <Image
        className={bottomBarStyles.avatar}
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        alt="avatar"
        width={50}
        height={50}
      />
      <p style={{ width: "max-content" }}>10:28 PM</p>
      <BiSolidBattery size={25} />
      <FaWifi size={25} />
      <p>28°C</p>
      <div style={{ gap: "35px", display: "flex" }}>
        <NavButton
          label="Home"
          icon={HiHome}
          className={navButtonStyles.homeButton}
        />
        <NavButton
          label="Sound"
          icon={HiSpeakerWave}
          className={navButtonStyles.soundButton}
        />
        <NavButton
          label="Product"
          icon={FaBasketShopping}
          className={navButtonStyles.productButton}
        />
        <NavButton
          label="Assistant"
          icon={BsFillChatSquareDotsFill}
          className={navButtonStyles.assistantButton}
        />
        <NavButton
          label="Event"
          icon={BsCalendarEventFill}
          className={navButtonStyles.eventButton}
        />
        <NavButton
          label="Menu"
          icon={RiLayoutGrid2Fill}
          className={navButtonStyles.menuButton}
        />
      </div>
    </div>
  );
};
