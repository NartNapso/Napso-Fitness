import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles.css";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendMessageToWhatsApp = () => {
    if (!name || !phone || !message) {
      alert("אנא מלא את כל השדות!");
      return;
    }

    const whatsappNumber = "+972528044482"; // 🔥 עדכן למספר שלך בפורמט בינלאומי (למשל: 972XXXXXXXXX)
    const encodedMessage = encodeURIComponent(
      `שלום, אני ${name}. מספר הטלפון שלי: ${phone}.\n\n${message}`
    );

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      id="contact-form"
    >
      <h2>📩 צור קשר עכשיו</h2>
      <p>רוצה להתחיל להתאמן איתי? שלח לי הודעה ואחזור אליך בהקדם!</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="שם מלא"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* <input
          type="tel"
          placeholder="מספר טלפון"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /> */}
        <textarea
          placeholder="ההודעה שלך..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="button" onClick={sendMessageToWhatsApp} className="send-btn">
          🚀 שלח הודעה
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
