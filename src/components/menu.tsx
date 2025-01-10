"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import styles from "./menu.module.css";
export const Menu = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isClient = useIsClient();
  if (isClient && isDesktop) return;
  return (
    <button className={styles.button}>
      <AiOutlineMenu size={25} />
      <span
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: "0",
        }}
      >
        menu
      </span>
    </button>
  );
};
