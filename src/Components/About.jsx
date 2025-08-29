import React from "react";
import Picture1 from  "../assets/img/testjfif.jfif"
import Picture2 from  "../assets/img/test2.jfif"
import Picture3 from  "../assets/img/test3.jfif"

const About = () => {
  const galleryItems = [
    { id: 1, img: Picture1, alt: 'Picture1' },
    { id: 2, img: Picture2, alt: 'Picture1' },  
    { id: 3, img: Picture3, alt: 'Picture1' },
  ];

    return (
        <>
        <section className="about">
        <h2 className="title">About Me</h2>
        <div className="inter-desc">Get to know me</div>
        <p>Detail-oriented and tech-savvy professional with a strong foundation in computer systems, technical support,
and troubleshooting. Skilled in diagnosing hardware and software issues, providing effective solutions, and
ensuring smooth system operations. </p>

<p>Proficient in HTML, CSS, ReactJS, and UI/UX design, with additional
experience in Java, Python, and full-stack development. Familiar with tools like VueJS and PostgreSQL.
Currently exploring cybersecurity, with a commitment to continuous learning and adapting to new
technologies.
</p>
        <div className="gallery">
            <div className="flex-container">
            {galleryItems.map(item => (
                
                <div key={item.id} className="gallery-item">
                      <img src={item.img} alt={item.alt} />
                    </div>
                ))}
            </div>
        </div>
        
        </section>

        </>
    );
}

export default About;