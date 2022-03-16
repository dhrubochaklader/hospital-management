import React from "react";
import "./Doctor.css";

const Doctor = ({ doctor }) => {
  const { img, name, speciality, visit } = doctor;
  return (
    <div className="doctor-container">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <h2>{speciality}</h2>
      <h3>{visit}</h3>
    </div>
  );
};

export default Doctor;
