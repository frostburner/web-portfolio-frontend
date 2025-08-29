import React, { useState } from "react";
import { RiCodeSSlashLine } from "react-icons/ri";
import { FaDesktop, FaWindows, FaGitAlt, FaCrosshairs, FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaTools, FaLock, FaLaptopCode, FaUsers, FaJava, FaPython, FaJs, FaGit } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiExpress, SiPostgresql, SiNodedotjs } from "react-icons/si";
import { BiShieldQuarter } from "react-icons/bi";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FcLinux } from "react-icons/fc";



const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const skills = [
    {
      id: 1,
      title: "Frontend",
      description: "HTML, CSS, ReactJS, UI/UX design.",
      items: [
        { text: "HTML", icon: <FaHtml5 color="#e34c26" size={20} /> },
        { text: "CSS", icon: <FaCss3Alt color="#264de4" size={20} /> },
        { text: "ReactJS", icon: <FaReact color="#61dafb" size={20} /> },
        { text: "UI/UX Design", icon: <>🎨</> },
      ],
      icon: <FaLaptopCode size={30} color="#1a1a1a" />,
    },
    {
      id: 2,
      title: "Backend",
      description: "NodeJS, Express, PostgreSQL, APIs.",
      items: [
        { text: "NodeJS", icon: <SiNodedotjs color="#68a063" size={20} /> },
        { text: "Express", icon: <SiExpress color="black" size={20} /> },
        { text: "PostgreSQL", icon: <SiPostgresql color="#336791" size={20} /> },
        { text: "APIs", icon: <>🔌</> },
      ],
      icon: <FaDatabase size={30} color="#1a1a1a" />,
    },
    {
      id: 3,
      title: "Languages",
      description: "Java, Python, JavaScript, SQL.",
      items: [
       { text: "Java", icon: <FaJava color="#f89820" size={20} /> },      
{ text: "Python", icon: <FaPython color="#3776AB" size={20} /> },  
{ text: "JavaScript", icon: <FaJs color="#F7DF1E" size={20} /> },  
{ text: "SQL", icon: <BsFiletypeSql color="#4479A1" size={20} /> }, 
      ],
      icon: <RiCodeSSlashLine size={30} color="#1a1a1a" />,
    },
    {
      id: 4,
      title: "Cybersecurity",
      description: "Network Security, Threat Analysis, Threat Hunting.",
       items: [
       { text: "Network Security", icon: <BiShieldQuarter color="#2ECC71" size={20} /> },
{ text: "Threat Analysis", icon: <GiMagnifyingGlass color="#E67E22" size={20} /> },
{ text: "Threat Hunting", icon: <FaCrosshairs color="#E74C3C" size={20} /> },
],
      icon: <FaLock size={30} color="#1a1a1a" />,
    },
    {
      id: 5,
      title: "Tools",
      description: "Git, Windows, Linux, Virtual Machines",
      items: [
       { text: "Git", icon: <FaGitAlt color="#F05032" size={20} /> },        
{ text: "Windows", icon: <FaWindows color="#0078D6" size={20} /> },  
{ text: "Linux", icon: <FcLinux size={20} /> },                      
{ text: "Virtual Machines", icon: <FaDesktop color="#6C63FF" size={20} /> }, 
],
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
      {/* HEADER */}
      <div className="check">
        <h2 className="title">Skills</h2>
        <p className="inter-desc">What I Can Do</p>
      </div>

      {/* CONTENT */}
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

              {/* Render logos if available */}
              {expandedSkill.items && (
                <div className="popup-extra mt-3">
                  {expandedSkill.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 mb-1 text-sm"
                    >
                      {item.icon} &nbsp; <span className="skill-text">{item.text}</span>
                    </div>
                  ))}
                </div>
              )}

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

      {/* Resume button */}
      <button className="resume-btn">Resume</button>
    </section>
  );
};

export default Skills;
