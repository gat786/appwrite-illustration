import React from "react";
import styles from "./components.module.css";

export default function FlowerPot() {
  return (
    <div className="absolute bottom-0 w-24 h-48">
      <div className="absolute bottom-0 bg-transparent">
        <div className={`${styles.cactus}`}></div>
        <div className={`${styles.pot}`}></div>
        <div className={`${styles.potCap}`}>
          <div className={`${styles.potCapRectangle}`}></div>
          <div className={`${styles.potCapTriangle}`}></div>
        </div>
        <div className={`${styles.potShadow}`}></div>
      </div>
    </div>
  );
}
