import { useState } from "react";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: "01",
      title: "Smart Jewelry Try-On",
      description:
        "A real-time virtual jewelry try-on application using React, computer vision and MediaPipe.",
      tech: ["React", "MediaPipe", "Computer Vision"],
      preview: "JEWELRY / AR",
    },
    {
      id: "02",
      title: "Marketing Analytics",
      description:
        "Performance marketing analytics focused on campaign performance, acquisition funnels, CPL, CPQL and ROI.",
      tech: ["GA4", "Excel", "Google Ads", "Data Analytics"],
      preview: "DATA / ANALYTICS",
    },
    {
      id: "03",
      title: "AI Plagiarism Detector",
      description:
        "A text similarity application using Python, TF-IDF, cosine similarity and FastAPI.",
      tech: ["Python", "FastAPI", "TF-IDF"],
      preview: "AI / NLP",
    },
    {
      id: "04",
      title: "Student Record System",
      description:
        "A Java-based CRUD application demonstrating object-oriented programming and file handling.",
      tech: ["Java", "OOP", "CRUD"],
      preview: "JAVA / SYSTEM",
    },
  ];

  return (
    <section className="section" id="projects">
      <p className="section-label">03 / SELECTED WORK</p>

      <div className="project-list">
        {projects.map((project) => (
          <div
            className={`project ${
              activeProject === project.id ? "active" : ""
            }`}
            key={project.id}
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <span>{project.id}</span>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-preview">
              <span className="preview-label">
                LIVE PREVIEW
              </span>

              <div className="preview-window">
                <div className="preview-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="preview-content">
                  <div className="preview-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>

                  <p>{project.preview}</p>
                </div>
              </div>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;