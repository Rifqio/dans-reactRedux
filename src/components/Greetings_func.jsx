import React from "react";
import ModalFunction from "./modal/Modal_funct";
import { useState } from "react";

export default function GreetingsFunction({ user, time, getTime, setTime }) {
  const [showModal, setShowModal] = useState(false);
  switch (true) {
    case getTime < 9:
      setTime("Pagi");
      console.log("Pagi");
      break;
    case getTime < 14:
      setTime("Siang");
      console.log("Siang");
      break;
    default:
      setTime("Malam");
      console.log("Malam");
  }
  return (
    <div>
      <h2>
        Selamat {time} {user}
      </h2>
      <button onClick={() => setShowModal(true)}>Detail</button>
      {showModal ? (
        <ModalFunction>
          <h3>Nama : {user}</h3>
          <p>Alamat</p>
          <p>Jurusan</p>
          <p>Certificate</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </ModalFunction>
      ) : null}
    </div>
  );
}
