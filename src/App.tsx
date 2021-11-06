import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Assets, Logos } from "./assets/assets.export";
import CoffeeMug from "./components/coffee-mug";
import Ball from "./components/ball";
import LanguageCard from "./components/language-card";
import FlowerPot from "./components/flower-pot";

function App() {
  return (
    <div>
      <div className={`wall`}>
        <div className="appwrite-desktop">
          <div className="window-buttons">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="window-title">appwrite.io</div>
          <div className="window">
            <div className="flex items-center">
              <img
                src={Assets.AppwriteColored}
                className="desktop-icon"
                alt=""
              />
              <div className="flex flex-col gap-2 flex-grow item-h-4 bars">
                <div className="full green"></div>
                <div className="broken">
                  <div className="big yellow"></div>
                  <div className="small green"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col gap-2 flex-grow item-h-4 bars">
                <div className="full green"></div>
                <div className="broken">
                  <div className="big green"></div>
                  <div className="small yellow"></div>
                </div>
                <div className="full appwrite-pink"></div>
              </div>
              <div className="desktop-icon orange-dot-in-pink"></div>
            </div>
          </div>

          <LanguageCard imgSrc={Logos.AndroidBot} position="-right-10 top-16" />
          <LanguageCard imgSrc={Logos.Apple} position="-left-12 -top-6" />
          <LanguageCard imgSrc={Logos.Javascript} position="left-1/3 -top-20" />
          <LanguageCard imgSrc={Logos.Flutter} position="-left-20 top-40" />
          <LanguageCard imgSrc={Logos.Swift} position="-right-20 top-48" />
        </div>

        <div className="absolute z-10 -bottom-4 left-96 flex items-end">
          <Ball ballColor="#fce205" ballSizeRem={20} />
          <CoffeeMug />
        </div>

        <div className="absolute right-1/4 bottom-0">
          <FlowerPot />
        </div>

        <div
          style={{
            top: "20%",
            left: "10%",
          }}
          className="absolute"
        >
          <Ball ballColor="rgba(193, 69, 109, 1)" ballSizeRem={8} />
        </div>
        <div
          style={{
            top: "10%",
            left: "15%",
          }}
          className="absolute"
        >
          <Ball ballColor="rgba(193, 69, 109, 1)" ballSizeRem={4} />
        </div>
        <div
          style={{
            top: "30%",
            left: "85%",
          }}
          className="absolute"
        >
          <Ball ballColor="rgba(193, 69, 109, 1)" ballSizeRem={8} />
        </div>
        <div
          style={{
            top: "10%",
            left: "75%",
          }}
          className="absolute"
        >
          <Ball ballColor="rgba(193, 69, 109, 1)" ballSizeRem={4} />
        </div>

        <div
          style={{
            top: "10%",
            left: "8%",
          }}
          className="absolute"
        >
          <Ball ballColor="rgba(176, 146, 138, 1)" ballSizeRem={12} />
        </div>
        <div
          style={{
            top: "35%",
            left: "4%",
          }}
          className="absolute"
        >
          <Ball ballColor="rgba(176, 146, 138, 1)" ballSizeRem={8} />
        </div>

        <div
          style={{
            top: "15%",
            left: "94%",
          }}
          className="absolute"
        >
          <Ball ballColor="rgba(176, 146, 138, 1)" ballSizeRem={20} />
        </div>
        <div
          style={{
            top: "12%",
            left: "84%",
          }}
          className="absolute"
        >
          <Ball ballColor="rgba(176, 146, 138, 1)" ballSizeRem={16} />
        </div>
        <div
          style={{
            top: "45%",
            left: "70%",
          }}
          className="absolute"
        >
          <Ball ballColor="rgba(176, 146, 138, 1)" ballSizeRem={12} />
        </div>
        <div
          style={{
            top: "55%",
            left: "90%",
          }}
          className="absolute"
        >
          <Ball ballColor="rgba(176, 146, 138, 1)" ballSizeRem={16} />
        </div>
      </div>
      <div className="floor">
        <div className="built-with-appwrite capitalize">
          built with{" "}
          <img className="h-8" src={Assets.BuiltWithAppwrite} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
