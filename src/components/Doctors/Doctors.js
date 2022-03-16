import React from "react";
import "./Doctors.css";

import doc1 from "../../images/doctors/1.jpg";
import doc2 from "../../images/doctors/2.jpg";
import doc3 from "../../images/doctors/3.jpg";
import Doctor from "../Doctor/Doctor";

const doctors = [
  {
    img: doc1,
    name: "Mim Rosi",
    speciality: "Chemotherapy",
    visit: 1000,
  },
  {
    img: doc2,
    name: "Jack",
    speciality: "Radiotherapy",
    visit: 2000,
  },
  {
    img: doc3,
    name: "John",
    speciality: "Bone Surgery",
    visit: 3000,
  },
];

const Doctors = () => {
  return (
    <div id="doctors-container">
      <h1>Our Doctors</h1>
      <div className="doctors-container">
        {doctors.map((doctor) => (
          <Doctor doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
