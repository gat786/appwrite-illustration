import React from "react";
import styles from "./components.module.css";

export default function Ball(args: { ballColor: string }) {

  return <div className="relative w-28 h-28">
      <div className={`absolute bottom-0 left-0 ${styles.circle}`}></div>
  </div>
}
