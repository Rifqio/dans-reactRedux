import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username);
    history.push("/home", {state: username});
  };
  return (
    <div>
      <span>Mohon masukan username</span>
      <form onSubmit={handleLogin}>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
