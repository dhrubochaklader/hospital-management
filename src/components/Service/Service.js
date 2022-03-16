import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, img, name, price } = service;
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <h1>{price}</h1>
      <h2>{name}</h2>
      <Link to={`/detail/${id}`}>
        <button className="btn btn-warning">Details</button>
      </Link>
    </div>
  );
};

export default Service;
