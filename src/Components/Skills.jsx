import React, { useState } from "react";
import { RiCodeSSlashLine } from "react-icons/ri";
import { FaDatabase, FaTools, FaLock, FaLaptopCode, FaUsers } from "react-icons/fa";

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const skills = [
    {
      id: 1,
      title: "Frontend",
      description: "HTML, CSS, ReactJS, UI/UX design.",
      icon: <FaLaptopCode size={30} color="#1a1a1a" />,
    },
    {
      id: 2,
      title: "Backend",
      description: "NodeJS, Express, PostgreSQL, APIs.",
      icon: <FaDatabase size={30} color="#1a1a1a" />,
    },
    {
      id: 3,
      title: "Languages",
      description: "Java, Python, JavaScript, SQL.",
      icon: <RiCodeSSlashLine size={30} color="#1a1a1a" />,
    },
    {
      id: 4,
      title: "Cybersecurity",
      description: "Network security, threat analysis.",
      icon: <FaLock size={30} color="#1a1a1a" />,
    },
    {
      id: 5,
      title: "Tools",
      description: "Git, Docker, Kubernetes, Linux.",
      icon: <FaTools size={30} color="#1a1a1a" />,
    },
    {
      id: 6,
      title: "Other",
      description: "Problem solving, collaboration.",
      icon: <FaUsers size={30} color="#1a1a1a" />,
    },
  ];

  return (
    <section className="skills">
      {/* HEADER stays fixed on top */}
      <div className="check">
        <h2 className="title">Skills</h2>
        <p className="inter-desc">What I Can Do</p>
      </div>

      {/* CONTENT AREA */}
      <div className="skills-stage">
        {!expandedSkill ? (
          <div className="skills-grid">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="skill-card"
                onClick={() => setExpandedSkill(skill)}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="popup-overlay" onClick={() => setExpandedSkill(null)}>
            <div
              className="skill-card popup-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="skill-icon">{expandedSkill.icon}</div>
              <h3>{expandedSkill.title}</h3>
              <p>{expandedSkill.description}</p>
              <p className="popup-extra">
                {/* You can add logos/extra details here */}
                More details about {expandedSkill.title}.
              </p>
              <button
                className="close-btn"
                onClick={() => setExpandedSkill(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Resume button stays outside */}
      <button className="resume-btn">Resume</button>
    </section>
  );
};

export default Skills;
