import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import Student from "./Components/Student";
import NoteState from "./context/notes/NoteState";

function App() {
  // const [navbar, setNavbar] = useState("Navbar")
  // if(localStorage.getItem()){
  //   const fetchuser = fetchuser(token)
  //   setNavbar(fetchuser.firstName)
  // }

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="about" element={<About />} />
            <Route path="/student" element={<Student />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
