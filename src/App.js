import React from "react";
import Header from "./Header";
import Bookings from "./Bookings";
import InfoCards from "./InfoCards";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
import "./App.css";

const cards = [
  {
    city: "London",
    link: "http://visitlondon.com",
    img:
      "https://learnenglishteens.britishcouncil.org/sites/teens/files/rs5693_71263137-low.jpg"
  },
  {
    city: "Manchester",
    link: "http://visitmanchester.com",
    img:
      "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/880/cached.offlinehbpl.hbpl.co.uk/news/OTM/Manchester-Zuzanna-Neziri-6272043372_5cd92b0ea9_b-Flickr-CC-20190620063742491.jpg"
  },
  {
    city: "Glasgow",
    link: "http://peoplemakeglasgow.com",
    img:
      "https://media.gettyimages.com/photos/riverside-view-of-a-city-at-night-picture-id519375418?s=612x612"
  }
];
const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <InfoCards cards={cards} />
      <Bookings />
      {/* <SearchResults /> */}
      <Footer address={address} />
    </div>
  );
};

export default App;
