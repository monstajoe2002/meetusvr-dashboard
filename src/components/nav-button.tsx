import React from "react";
import styles from "./navButton.module.css";
import { IconBaseProps } from "react-icons";
interface NavButtonProps extends IconBaseProps {
  icon: React.ComponentType<IconBaseProps>;
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
