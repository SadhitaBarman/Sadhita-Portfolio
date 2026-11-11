import { useRef } from "react";

function MagneticButton({ children, href, className = "" }) {
  const buttonRef = useRef(null);

  const handleMouseMove = (event) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;

    if (!button) return;

    button.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}

export default MagneticButton;