import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/Whychooseus";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero/>
      <WhyChooseUs/>
      <Projects />
      <Clients />
    </>
  );
};

export default Home;
