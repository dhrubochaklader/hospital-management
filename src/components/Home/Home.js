import React from "react";
import Services from "../../components/Services/Services";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;
