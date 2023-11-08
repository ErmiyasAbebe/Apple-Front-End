
// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react';

import Header from './Components/Header/Header';
import Alert from "./Components/Alert/Alert";
import FirstSection from "./Components/FirstSection/FirstSection";
import SecondSection from "./Components/SecondSection/SecondSection"
import ThirdSection from "./Components/ThirdSection/ThirdSection";
import FourthSection from "./Components/FourthSection/FourthSection";
import FifthSection from "./Components/FifthSection/FifthSection";
import SixthSection from "./Components/SixthSection/SixthSection";
import Footer from "./Components/Footer/Footer";

import "./commonResource/css/styles.css";
import "./commonResource/css/bootstrap.css";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Alert />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <Footer />
      </div>
    );
  }
}


export default App;
