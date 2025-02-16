import React from "react";
import { stackList } from "../../data/ProjectData";
import profileimg1 from "../../assets/profileimg1.png";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src={profileimg1}
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Abhishek Patel</strong>. I'm originally from Bhopal and have been living in Noida for the past 2.5 years. During my time here, I gained valuable experience through various entry-level positions, which greatly enhanced my work ethic, communication skills, and adaptability.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              {/* My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Systems Technology program. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
            Throughout my studies at BCIT, I had the opportunity to engage in fascinating projects. Notably, I contributed to the development of the RENR Safety App and MyMind, projects that garnered recognition from my colleagues, instructors, and clients alike. */}
              With over 4 years of work experience, including more than 2.5 years in front-end development using React Native and React JS, I have gained valuable expertise in building web and mobile applications. I hold a Bachelor of Engineering degree from Sagar Institute of Research and Technology-Excellence and began my career as a Mechanical Engineer. Currently, I am working as a Front-End Developer at Apcom Infotech in Noida, where I have contributed to notable projects, including the Cars360 mobile app for buying and selling used cars. At present, I am working on a React-based eCommerce website, further expanding my skills in web development.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              {/* Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development. */}
              I am passionate about exploring new technologies and look forward to future opportunities in web and cross-platform mobile development.
              <div className="tagline2">
              I’ve worked with these technologies and am still refining my skills.
              </div>
            </ScrollAnimation>


            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
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
