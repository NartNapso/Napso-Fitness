import React from "react";
import "../styles.css";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScCaiVyRykRN4js9F54YpWQpSdr799-h4islo7dRyGly1f0EA/viewform"; // 🔴 Replace with your form link
const PLAN_FIELD_ID = "entry.213565008";

const plans = [
  {
    id: "basic",
    name: "Basic Plan",
    icon: "🏃",
    description: "לרצים שרוצים רק לרוץ, ללא תרגילי כוח, חיזוקים לריצה ואימונים פונקציונאליים",
    price: "350 ₪",
    benefits: [
      "תוכנית ריצה מותאמת אישית שמתעדכנת שבועית בהתאם להתקדמות.",
      "ליווי שוטף בוואטסאפ עם מענה אישי לכל שאלה.",
      "התאמות לתוכנית במקרים מיוחדים (פציעות, עומס עבודה וכו').",
      "ייעוץ בנושא תזונת ספורט לפני/במהלך/אחרי פעילות מאומצת.",
    ],
  },
  {
    id: "standard",
    name: "Standard Plan",  
    icon: "🔥",
    description: "לרצים שרוצים למצא את מלוא הפוטנציל שלהם, אימונים מגוונים, תמיכה אישית יותר",
    price: "390 ₪",
    benefits: [
      "תוכנית מותאמת אישית שמתעדכנת שבועית בהתאם להתקדמות.",
      "ליווי צמוד בוואטסאפ עם מענה מהיר לשאלות, שינויים והתייעצויות.",
      "ייעוץ על תזונת ספורט (לפני/במהלך/אחרי תחרות או אימון ארוך/קשה).",
      "2 אימוני כוח/פונקציונלי בשבוע, מותאמים למטרות הריצה שלך.",
      "תוכנית התאוששות ומניעת פציעות – תרגילי מתיחות וחיזוקים לפי הצורך.",
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    icon: "🏆",
    description: "לרצים שחיים את הספורט ורוצים להגשים חלומות",
    price: "410 ₪",
    benefits: [
      "תוכנית ריצה וכוח מותאמת אישית שמתעדכנת שבועית בהתבסס על ביצועים.",
      "ליווי צמוד ומענה אישי בוואטסאפ לכל שאלה, שינוי והתאמה.",
      "ייעוץ על תזונת ספורט – אסטרטגיה תזונתית לפני/במהלך/אחרי מאמצים משמעותיים.",
      "3 אימוני כוח/פונקציונלי בשבוע – התאמה ספציפית לפי הצרכים שלך.",
      "תוכנית התאוששות ומניעת פציעות – תרגילי מתיחות וחיזוקים לפי הצורך.",
      "ניתוח ביצועים וייעוץ מתמשך להתקדמות ושיפור מתמיד.",
    ],
  },
];


const handlePlanSelection = (planName: string) => {
    // הכנסת שם החבילה כפרמטר לטופס
    const formUrl = `${GOOGLE_FORM_URL}?${PLAN_FIELD_ID}=${encodeURIComponent(planName)}`;
    window.location.href = formUrl;
  };
const TrainingPlans: React.FC = () => {
  return (
    <div id="training-plans" className="training-plans-container">
      <h2>💪 חבילות אימון אישיות</h2>
      <p>בחר את המסלול שמתאים לך והתחל את הדרך לשיפור מתמיד</p>
      <div className="plans-grid">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-card">
            <div className="plan-header">
              <span className="plan-icon">{plan.icon}</span>
              <h3>{plan.name}</h3>
            </div>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-benefits">
              {plan.benefits.map((benefit, index) => (
                <li className="plan-benefits-li" key={index}>✅ {benefit}</li>
              ))}
            </ul>
            <p className="plan-price">💰 {plan.price} לחודש</p>
            <button className="choose-plan-btn" onClick={() => handlePlanSelection(plan.name)}>
              בחר חבילה
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPlans;
