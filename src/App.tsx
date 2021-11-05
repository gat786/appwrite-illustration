import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Assets from "./assets/assets.export";

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
