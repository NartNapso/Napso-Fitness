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
      "תוכנית ריצה מותאמת אישית – מתעדכנת אחת לחודש.",
      "מענה בוואטסאפ לכל שאלה.",
      "התאמות לתוכנית במקרים מיוחדים (פציעות, עומס עבודה וכו').",
      "פגישת זום חודשית (30 דקות) להסבר מפורט על התכנית.",
    ],
  },
  {
    id: "standard",
    name: "Standard Plan",  
    icon: "🔥",
    description: "לרצים שרוצים למצא את מלוא הפוטנציל שלהם, אימונים מגוונים, תמיכה אישית יותר",
    price: "395 ₪",
    benefits: [
      "תוכנית ריצה ואימונים היברידיים מותאמים אישית – מתעדכנת אחת לשבוע.",
      "ליווי צמוד ומענה אישי בוואטסאפ/טלפון לכל שאלה, שינויים והתאמות.",
      "פגישת זום אחת לשבועיים.",
      "תוכנית לשיפור כוח לרצים, כולל תרגילים פונקציונליים מקליסטניקס וג'ימנסטיקה.",
      "תוכנית התאוששות ומניעת פציעות – תרגילי מתיחות וחיזוקים לפי הצורך.",
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    icon: "🏆",
    description: "לרצים שחיים את הספורט ורוצים להגשים חלומות",
    price: "420 ₪",
    benefits: [
      "תוכנית ריצה ואימונים היברידיים מותאמים אישית – מתעדכנת אחת לשבוע.",
      "ליווי צמוד ומענה אישי בוואטסאפ/טלפון לכל שאלה, שינויים והתאמות.",
      "פגישת זום אחת לשבועיים.",
      "תוכנית לשיפור כוח לרצים, כולל תרגילים פונקציונליים מקליסטניקס וג'ימנסטיקה.",
      "תוכנית התאוששות ומניעת פציעות – תרגילי מתיחות וחיזוקים לפי הצורך.",
      "תוכנית מיוחדת לשיפור טכניכת הריצה לביצועים מקסימאליים – לאחר ניתוח טכניקה.",
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
      <h2>חבילות אימון אישיות</h2>
      <h3>מגוון מסלולים גמישים לכל מתאמן שמחפש להתקדם בדרך שלו</h3>
      <p>ניתן להוסיף אימונים פרונטליים לתוכניות בתוספת תשלום</p>
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
            {/* <p className="plan-price">💰 {plan.price} לחודש</p> */}
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
