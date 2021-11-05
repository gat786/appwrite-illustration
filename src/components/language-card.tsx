import React from "react";
import { Logos } from "../assets/assets.export";
import styles from "./components.module.css";

export default function LanguageCard(args: {
  imgSrc: string;
  position: string;
}) {
  return (
    <div className={`${styles.languageCard} p-2 rounded-2xl ${args.position}`}>
      <div className="bg-white p-4 rounded-2xl">
        <img src={args.imgSrc} className="h-12 w-12" alt="" />
      </div>
    </div>
  );
}
