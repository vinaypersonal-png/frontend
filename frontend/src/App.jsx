import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/Whychooseus";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
  return (
    <>
       <Navbar/>

       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/service" element={<WhyChooseUs/>}/>
         <Route path="/project" element={<Projects/>}/>
         <Route path="/testonomial" element={<Clients/>}/>
       </Routes>

       <Footer/>
    </>
  )
}

export default App;