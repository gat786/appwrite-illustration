import React from "react";
import styles from "./components.module.css";

export default function Ball(args: { ballColor: string; ballSizeRem: number }) {
  return (
    <div className={`relative w-${args.ballSizeRem} h-${args.ballSizeRem}`}>
      <div
        style={{
          background: `radial-gradient(circle at 70% 40%, ${args.ballColor}, #444 200%)`,
        }}
        className={`absolute bottom-0 left-0 ${styles.circle}`}
      ></div>
    </div>
  );
}
