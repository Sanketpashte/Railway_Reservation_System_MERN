import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthProtect } from "./AuthProtect";
import { AboutUs } from "./components/aboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        {/* auth routes */}
        <Route path="/login" element={<AuthProtect element={<Login />} />} />
        <Route path="/signup" element={<AuthProtect element={<Signup />} />} />
        <Route path="/about-us" element={<AboutUs></AboutUs>} />
        

        {/* Regular Routes */}
        <Route path="/" element={<Main />} />
       
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
