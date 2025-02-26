import React from "react";
import { motion } from "framer-motion";
import "../styles.css";

const About: React.FC = () => {
  const scrollToContactForm = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="about-container">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="about-heading"
      >
        רוצה לשבור שיאים, להתחזק ולהיות מוכן לכל אתגר? 💪
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.2 }} 
        className="about-text"
      >
        אני <strong>נארת נפסו</strong>, מאמן ריצה ואימון פונקציונלי שמשלב{" "}
        <span className="highlight">סיבולת, כוח ומכשולים. </span>  
        רץ אולטרה מרתונים, משתתף במרוצי מכשולים, ותמיד מחפש לפרוץ גבולות.  
        אם אתה רוצה להשתפר בריצה, לבנות גוף חזק יותר ולהיות מוכן לכל אתגר –  
        אני כאן כדי לעזור לך להגיע לשיא שלך.
      </motion.p>

      <div className="offerings">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
        >
          🚀 מה אני מציע?
        </motion.h3>
        <ul>
          <li>✔ אימוני ריצה מותאמים אישית – לכל הרמות.</li>
          <li>✔ אימוני כוח ואימונים פונקציונליים.</li>
          <li>✔ הכנה למרוצי מכשולים (OCR) – טכניקה, סיבולת וכוח.</li>
        </ul>
      </div>

      <div className="why-me">
        <motion.h3 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.4 }}
        >
          🔥 למה איתי?
        </motion.h3>
        <p>
          אני לא רק מאמן – אני חי את זה. אני יודע איך זה מרגיש להתחיל מאפס,  
          איך זה לרוץ 24 שעות בגשם ובקור, ואיך מתמודדים עם רגעים קשים פיזית ומנטלית.  
          אין פה קסמים – יש דרך שעובדת. בואו נתחיל.
        </p>
      </div>

      <motion.div 
        className="cta-buttons"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a href="https://wa.me/+972528044482" className="whatsapp-btn">
          📲 שלח לי הודעה
        </a>
        <a href="https://calendly.com/nartnpso" className="consult-btn">
          📅 קבע שיחת ייעוץ
        </a>
        <a href="#contact-form" onClick={scrollToContactForm} className="form-btn">
          📩 השאר פרטים
        </a>
      </motion.div>
    </div>
  );
};

export default About;
