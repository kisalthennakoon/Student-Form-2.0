import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Login from "./Pages/Login";
import Students from "./Pages/Students";
import SignUp from "./Pages/SignUp";
import Registered from "./Pages/Registered";

function App() {
  return (
    
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/students" element={<Students />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registered" element={<Registered/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;