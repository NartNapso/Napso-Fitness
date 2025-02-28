import React from "react";
import { motion } from "framer-motion";
import "../styles.css";
import NapsoFitnessLogo from "../../public/NapsoFitnessLogo.png";  

const Hero: React.FC = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById("training-plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container">
      <motion.img 
        src={NapsoFitnessLogo}
        alt="Napso Fitness Logo"
        className="hero-logo"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      />
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.3 }}
      >
        הדרך שלך לחוסן פיזי ומנטלי מתחילה כאן 💪
      </motion.p>

      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.3 }}
      >
        אימונים היברידיים בשילוב כושר פונקציונלי, סיבולת, כוח ומכשולים. בין אם אתם מתחילים או רוצים לשבור שיאים חדשים – אני כאן כדי להגשים את החלום
      </motion.p>

      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        className="hero-btn"
        onClick={scrollToPlans} /* ✅ Scroll function */
      >
        לבחירת תוכנית מותאמת 🎯
      </motion.button>
    </div>
  );
};

export default Hero;
