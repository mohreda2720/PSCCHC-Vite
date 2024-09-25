import React, { useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import "./langstyle.css";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageToggle = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    changeLanguage(newLanguage);
  };

  useEffect(() => {
    // Update the checkbox state based on current language
    const checkbox = document.getElementById("language-toggle");
    checkbox.checked = language === "ar";
  }, [language]);

  const handleSwitchToggle = () => {
    handleLanguageToggle();
  };

  return (
    <div className="switch">
      <input
      title="language switcher"
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        onChange={handleSwitchToggle}
      />
      <label htmlFor="language-toggle"></label>
      <span className="on">EN</span>
      <span className="off">AR</span>
    </div>
  );
};

export default LanguageSwitcher;
