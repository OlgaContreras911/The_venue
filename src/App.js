import React from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";
import Header from "./components/header_footer/Header.js";
import Featured from "./components/featured";
import VunueNfo from "./components/venueNfo";
import Highlight from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";
function App() {
  return (
    <div
      className="App"
      style={{ height: "1300px", background: "cornFlowerblue" }}
    >
      <Header />

      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venuenfo">
        <VunueNfo />
      </Element>
      <Element name="highlights">
        <Highlight />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
