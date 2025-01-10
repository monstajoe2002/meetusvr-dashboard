import React from "react";
import styles from "./navButton.module.css";
import type { IconType } from "react-icons";
interface NavButtonProps {
  icon: IconType;
  label: string;
  className?: string;
}

export const NavButton = ({ icon: Icon, label, className }: NavButtonProps) => {
  return (
    <div>
      <button className={`${styles.navButton} ${className}`}>
        <Icon size="24" />
      </button>
      <p className={styles.navLabel}>{label}</p>
    </div>
  );
};
