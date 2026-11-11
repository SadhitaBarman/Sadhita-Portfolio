import { useEffect, useState } from "react";

function ThemeToggle() {
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("theme") === "editorial";
  });

  useEffect(() => {
    document.body.classList.toggle("editorial-mode", lightMode);

    localStorage.setItem(
      "theme",
      lightMode ? "editorial" : "cyber"
    );
  }, [lightMode]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setLightMode(!lightMode)}
      aria-label="Toggle theme"
    >
      <span className="theme-icon">
        {lightMode ? "☀" : "☾"}
      </span>

      <span className="theme-label">
        {lightMode ? "EDITORIAL" : "CYBER"}
      </span>
    </button>
  );
}

export default ThemeToggle;