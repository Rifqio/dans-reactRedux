import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "./App.css";
import Login from "./container/auth/Login.container";
import Home from "./container/home/Home.container";
import ListSiswa from "./container/listSiswa/ListSiswa";
import Navbar from "./components/Navbar";
import DetailSiswa from "./container/listSiswa/DetailSiswa";
import EditSiswa from "./container/listSiswa/EditSiswa";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list-siswa">
            <ListSiswa />
          </Route>
          <Route exact path="/user/:id">
            <DetailSiswa />
          </Route>
          <Route exact path="/user/edit/:userid">
            <EditSiswa />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
