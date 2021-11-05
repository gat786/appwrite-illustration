import React from "react";
import styles from "./components.module.css";

export default function CoffeeMug() {
  return (
    <div className="absolute w-20 h-44 bg-transparent">
      <div className={`${styles.mugCap}`}></div>
      <div className={`${styles.mug} ${styles.mugBg}`}></div>
    </div>
  );
}
