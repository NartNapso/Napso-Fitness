import React from "react";
import Hero from "./components/Hero";
import VideoShowcase from "./components/VideoShowcase";
import TrainingPlans from "./components/TrainingPlans";
import "./styles.css";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Hero />
      <VideoShowcase />
      <About />
      <TrainingPlans />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
