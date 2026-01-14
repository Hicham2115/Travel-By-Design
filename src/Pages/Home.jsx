import React from "react";
import Hero from "./Components/Hero";
import WhoAreWe from "./Components/WhoAreWe";
import Bridge from "./Components/Bridge";
import OurIdeology from "./Components/OurIdeology";
import WhatMakesUs from "./Components/WhatMakesUs";
import Message from "./Components/Message";
import OurLanguages from "./Components/OurLanguages";
import Contact from "./Components/Contact";
function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="our-story">
        <WhoAreWe />
      </section>
      <Bridge />
      <section id="our-ideology">
        <OurIdeology />
      </section>
      <section id="about-us">
        <WhatMakesUs />
      </section>
      <Message />
      <OurLanguages />
      <section id="contact-us">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
