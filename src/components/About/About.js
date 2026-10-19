import React from "react";
import { stackList } from "../../data/ProjectData";
import profileimg1 from "../../assets/profileimg1.png";
import { Image, Technologies, Tech, TechImg, TechName, ContactWrapper } from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <h2 className="SectionTitle">About Me</h2>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src={profileimg1} alt="Abhishek Patel" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              <p>Hello! I'm <strong>Abhishek Patel</strong>, a <strong>Software Engineer (Full Stack)</strong> originally from Bhopal. I build web and mobile applications, working across responsive interfaces, backend APIs, and databases.</p>
              <p style={{ marginTop: "1.5rem" }}>My experience spans React and React Native development, and my current work includes building Python services with FastAPI, managing data with PostgreSQL and Firebase, and deploying applications with Docker and Microsoft Azure. My projects include Curie, a private enterprise AI workspace, and the Saleseer healthcare data pricing platform.</p>
              <p style={{ marginTop: "1.5rem" }}>I hold a Bachelor of Engineering degree from Sagar Institute of Research and Technology-Excellence and began my career as a Mechanical Engineer. Today, I enjoy connecting frontend experiences with reliable backend systems and exploring AI-powered applications. I also use ChatGPT and Claude to support development, problem-solving, and learning.</p>
              <div className="tagline2">Technologies and tools I work with across frontend, backend, databases, cloud, and AI.</div>
            </ScrollAnimation>
            <Technologies>
              {stackList.map((stack) => (
                <ScrollAnimation animateIn="fadeInLeft" key={stack.name}>
                  <Tech className="tech">
                    {stack.icon ? (
                      <stack.icon size={40} color={stack.color} aria-hidden="true" style={{ paddingBottom: 5 }} />
                    ) : (
                      <TechImg src={stack.img} alt="" loading="lazy" />
                    )}
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
