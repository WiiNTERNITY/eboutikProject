import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Login from "./Pages/Login";
import Profil from "./Pages/Profil";
import Signup from "./Pages/Signup";
import Articles from "./Pages/Articles";
import Admin from "./Pages/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/show/:id" element={<Show/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/profil" element={<Profil/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/ajoute" element={<Articles/>} />
          <Route exact path="/Admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
