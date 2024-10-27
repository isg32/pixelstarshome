import React from "react";
import backgland from "./assets/background1.png";
import foot from "./assets/foot.png";
import learnmore from "./assets/learnmore.png";
import newver from "./assets/newver.png";
import discussion from "./assets/discussion.png";
import tglink from "./assets/tglink.png";
import tgicon from "./assets/tg.png";
import gh from "./assets/gh.png";
import downicon from "./assets/down.png";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-spacex">
        <ul className="navbar-links ">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#download">download</a>
          </li>
        </ul>
        <ul className="navbar-links vert-center">
          <li>
            <a href="https://github.com/Project-PixelStar">
              <img src={gh} alt="GitHub" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://t.me/pixelstarchannel">
              <img src={tgicon} alt="Telegram" className="icon" />
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div class="container">
          <img src={backgland} className="backgroundx" alt="background" />
          <div class="top-left">
            <p>
              <h1>
                <b>Pixel</b>Star
              </h1>
              An Android based open-source operating system for various devices.
            </p>
            <a href="https://isg32.github.com">
              <div className="downloadbutton">
                <img src={downicon} /> <b>Download</b>
              </div>
            </a>
          </div>
        </div>
        <div className="secondarybody">
          <div>
            <td>
              <img src={learnmore} className="Card" alt="Learn More" />
            </td>
            <td>
              <img src={newver} className="Card" alt="New Version" />
            </td>
          </div>
          <div>
            <td>
              <a href="https://t.me/Project_PixelStar">
                <img src={discussion} className="Card" alt="Discussion" />
              </a>
            </td>
            <td>
              <a href="https://t.me/pixelstarchannel">
                <img src={tglink} className="Card" alt="Telegram Link" />
              </a>
            </td>
          </div>
        </div>
        <div class="container">
          <img src={foot} className="backgroundx" alt="background" />
          <div class="bottom-left">
            <p>
              Prototype By <a href="https://isg32.github.io">isg32</a> /
              Prathamk07 | Designed By naoto
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
