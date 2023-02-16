import { useState } from "react";

import "./App.css";
import ActionCard from "./components/ActionCard";
import Actions from "./components/Actions";
import InfoCard from "./components/InfoCard";
import Slider from "./components/Slider";
import TextHeading from "./components/TextHeading";

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="section-1">
          <TextHeading
            shortText="How it Work"
            heading="A Simple, Proven Way to Boost Your Team Performance."
            mainText="Most popular type of partnership Malta. The limited liability is, in
        fact, the only type of company allowed by Companies."
          />
          <main>
            <Actions />
            <img
              className="main-img"
              src="/phone_image.svg"
              alt="phone graphic"
            />
          </main>
        </section>
        <section className="section-2">
          <InfoCard
            imgSrc="/download_icon.svg"
            value="25K+"
            text="App Downloads"
          />
          <InfoCard
            imgSrc="/heart_icon.svg"
            value="1200+"
            text="Happy Clients"
          />
          <InfoCard imgSrc="/user_icon.svg" value="14K+" text="Active User" />
          <InfoCard
            imgSrc="/reviews_icon.svg"
            value="3500+"
            text="Total Reviews"
          />
        </section>
        <section className="section-3">
          <TextHeading
            shortText="Screenshoots"
            heading="Awesome Apps ScreenShoots"
            mainText="Most popular type of partnership Malta. The limited liability is, in
                  fact, the only type of company allowed by Companies."
          />
          <Slider />
        </section>
      </div>
    </div>
  );
}

export default App;
