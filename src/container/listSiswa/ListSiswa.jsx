import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditSiswa from "./EditSiswa";

export default function ListSiswa() {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const getRegisteredStudent = async () => {
        setLoading(true);
        const data = await axios.get("http://localhost:3000/students");
        const json = await data.data;
        setStudent(json);
        setLoading(false);
      };
      getRegisteredStudent();
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  }, []);
  console.log(`List of all student ${student}`);

  return (
    <div>
      <h1>Daftar Siswa</h1>
      {loading && <h1>Please Wait...</h1>}
      {student &&
        student.map((data, index) => {
          return (
            <React.Fragment key={data.id}>
              <h2>
                <Link to={`/user/${data.id}`}>{data.nama}</Link>
              </h2>
              <span>{data.gender}</span>
              <button onClick={() => setShowModal({ ...showModal, [index]: !showModal[index] })}>Edit</button>
              {showModal[index] && <EditSiswa idSiswa={data.id} setShowModal={setShowModal}/>}
            </React.Fragment>
          );
        })}
    </div>
  );
}
