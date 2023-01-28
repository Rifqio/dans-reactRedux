import axios from "axios";
import "../../components/modal/Modal.css";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/userSlice";

export default function EditSiswa({ idSiswa, setShowModal }) {
  const [name, setName] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [alamat, setAlamat] = useState("");
  const dispatch = useDispatch();

  const getStudentById = async () => {
    const res = await axios.get(`http://localhost:3000/students/${idSiswa}`);
    const data = res.data;
    setName(data.nama);
    setJurusan(data.jurusan);
    setAlamat(data.alamat);
    console.log(data);
  };
  useEffect(() => {
    getStudentById();
  }, []);

  const payload = {
    id: idSiswa,
    nama: name,
    alamat: alamat,
    jurusan: jurusan,
  };
  const updateStudent = async (e) => {
    e.preventDefault();
    dispatch(updateUser(payload));
    setShowModal(false)
  };
  return (
    <div className="modal-backdrop">
      <form onSubmit={updateStudent} className="modal">
        <label>
          Nama
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Jurusan
          <input
            type="text"
            value={jurusan}
            onChange={(e) => setJurusan(e.target.value)}
          />
        </label>
        <br />
        <label>
          Alamat
          <input
            type="text"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
          />
        </label>
        <br />
        <button>Update</button>
        <button onClick={() => setShowModal(false)}>Close</button>
      </form>
    </div>
  );
}
