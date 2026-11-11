import { useState, useRef, useEffect } from "react";

function Hero() {
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "SADHITA.OS v1.0 initialized...",
    },
    {
      type: "system",
      text: "Type 'help' to see available commands.",
    },
  ]);

  const [command, setCommand] = useState("");

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  const terminalRef = useRef(null);

  // Keep terminal scrolled to latest message
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop =
        terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Live clock
  useEffect(() => {
    const clock = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  // Terminal 3D tilt
  const handleTerminalMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    setTilt({
      x: (0.5 - y) * 8,
      y: (x - 0.5) * 8,
    });
  };

  const resetTerminalTilt = () => {
    setTilt({
      x: 0,
      y: 0,
    });
  };

  const executeCommand = (input) => {
    const cmd = input.trim().toLowerCase();

    if (!cmd) return;

    let response = "";

    switch (cmd) {
      case "help":
        response =
          "Available commands: about, skills, projects, experience, contact, clear";
        break;

      case "about":
        response =
          "Sadhita Barman | Frontend Developer × Data × AI";
        break;

      case "skills":
        response =
          "React · JavaScript · HTML · CSS · Python · SQL · Data Analytics · AI";
        break;

      case "projects":
        response =
          "Smart Jewelry Try-On · AI Plagiarism Detector · Student Record System · Marketing Analytics";
        break;

      case "experience":
        response =
          "Performance Marketing Executive @ Property Pistol | Jan 2026 — Present";
        break;

      case "contact":
        response =
          "Scroll to the CONTACT section or use the GET IN TOUCH button.";
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        response = `Command not found: "${cmd}". Type "help" for available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      {
        type: "command",
        text: input,
      },
      {
        type: "response",
        text: response,
      },
    ]);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      executeCommand(command);
      setCommand("");
    }
  };

  return (
    <section className="hero" id="home">

      {/* LEFT SIDE */}
      <div className="hero-left">

        <p className="eyebrow">
          FRONTEND DEVELOPER · DATA · AI
        </p>

        <h1>
          SADHITA
          <span> BARMAN</span>
        </h1>

        <h2>
          I build digital experiences
          that make data feel human.
        </h2>

        <p className="hero-description">
          Frontend developer with a background in performance
          marketing, data analytics and AI. I like turning
          ideas, numbers and interfaces into useful digital
          products.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="button primary"
          >
            VIEW MY WORK
          </a>

          <a
            href="#contact"
            className="button secondary"
          >
            LET'S CONNECT
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">

        <div
          className="terminal"
          onMouseMove={handleTerminalMove}
          onMouseLeave={resetTerminalTilt}
          style={{
            transform: `
              perspective(1000px)
              rotateX(${tilt.x}deg)
              rotateY(${tilt.y}deg)
            `,
          }}
        >

          {/* TERMINAL HEADER */}
          <div className="terminal-top">

            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-title">

              <p>SADHITA.OS</p>

              <span>
                {currentTime}
              </span>

            </div>

          </div>

          {/* TERMINAL BODY */}
          <div
            className="terminal-body"
            ref={terminalRef}
          >

            <p>
              <span className="pink-text">
                &gt;
              </span>{" "}
              whoami
            </p>

            <h3>
              Sadhita Barman
            </h3>

            <p className="terminal-muted">
              Frontend Developer
            </p>

            <p className="terminal-muted">
              Performance Marketing
            </p>

            <p className="terminal-muted">
              Data × AI
            </p>

            <br />

            {/* COMMAND HISTORY */}
            {history.map((item, index) => (

              <div key={index}>

                {item.type === "command" && (
                  <p>
                    <span className="pink-text">
                      &gt;
                    </span>{" "}
                    {item.text}
                  </p>
                )}

                {item.type === "response" && (
                  <p className="terminal-response">
                    {item.text}
                  </p>
                )}

                {item.type === "system" && (
                  <p className="terminal-muted">
                    {item.text}
                  </p>
                )}

              </div>

            ))}

            {/* COMMAND INPUT */}
            <div className="terminal-input">

              <span className="pink-text">
                &gt;
              </span>

              <input
                type="text"
                value={command}
                onChange={(event) =>
                  setCommand(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="type a command..."
                autoComplete="off"
              />

            </div>

            <p className="system-status">
              ● SYSTEM ONLINE
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;