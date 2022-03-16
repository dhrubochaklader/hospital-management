import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const [show, setShow] = useState({});
  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => {
        const topic = data.find((show) => show.id == detailId);
        setShow(topic);
      });
  }, []);
  return (
    <div>
      <h1>This is service detail {detailId}</h1>
      <p>{show?.description}</p>
    </div>
  );
};

export default Detail;
