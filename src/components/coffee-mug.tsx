import React from "react";
import styles from "./components.module.css";

export default function CoffeeMug() {
  return (
    <div className="relative w-24 h-48">
      <div className="absolute left-0 bottom-0 w-20 h-44 bg-transparent">
        <div className={`${styles.mugCap}`}></div>
        <div className={`${styles.mug} ${styles.mugBg}`}></div>
        <div className={`${styles.mugShadow}`}></div>
      </div>
    </div>
  );
}
