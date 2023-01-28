import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailSiswa() {
  const { id } = useParams();
  const url = `http://localhost:3000/students/${id}`;
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      const getRegisteredStudent = async () => {
        setLoading(true);
        const data = await axios.get(url);
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
  return (
    <div>
      {loading && <p>{loading}</p>}
      {student && (
        <>
          <h2>{student.nama}</h2>
          <p>{student.alamat}</p>
          <p>{student.kelas}</p>
          {student.certification ? (
            <div>
              <p>Student Certification</p>
              <p>{student.certification.join(" | ")}</p>
            </div>
          ) : (
            <p>Siswa tidak memiliki sertifikat</p>
          )}
        </>
      )}
    </div>
  );
}
