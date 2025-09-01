
import { Container } from "./styles";
import akhilaa from "../../assets/Akhilaa.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import swift from "../../assets/swift.png";
import flask from "../../assets/flask.png";
import github from "../../assets/github.svg";
import mongo from "../../assets/mongo.png";
import postman from "../../assets/postman.png";
import python from "../../assets/python.png";
import vueIcon from "../../assets/vue-icon.svg";
import docker from "../../assets/docker.png";
import aws from "../../assets/aws.svg";
import gcp from "../../assets/gcp.png";
import mysql from "../../assets/mysql.png";
import kubernetes from "../../assets/kubernetes.png";
import xcode from "../../assets/xcode.png";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-content">
        {/* About Me Section */}
        <div className="about-right">
          <ScrollAnimation animateIn="fadeInUp">
            <h2>About Me</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
            <p>
              Hi, I'm Akhilaa — a Master's student in Computer Science at USC and a Software Developer with experience in full-stack development, cloud platforms, and data-driven applications.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <p>
              Skilled in React, Node.js, AWS, and GCP, I’ve built scalable applications including a real-time stock search platform and MedGuard, a medical monitoring system. I enjoy creating impactful solutions with clean, efficient code.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
            <p>
              I'm passionate about developing software that solves real-world problems and excited to grow as a Software Engineer while contributing to innovative teams.
            </p>
          </ScrollAnimation>
        </div>




        {/* Education Section */}
        <div className="about-left">
          <ScrollAnimation animateIn="fadeInUp">
            <h3>Education</h3>
            <div className="education-card">
              <h4>University of Southern California</h4>
              <h4>Aug 2023 – May 2025</h4>
              <h4>Masters of Science in Computer Science</h4>
              <h4> GPA: 3.65 / 4</h4>
              
            </div>
            <br></br>
            <div className="education-card">
              <h4>SRM University</h4>
              <h4>Jul 2018 – May 2022</h4>
              <h4>Bachelor of Technology in Computer Science and Engineering</h4>
              <h4> GPA: 9.76 /10</h4>
             
            </div>
          </ScrollAnimation>
          
          {/* Technical Skills Section */}
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <h3>Technical Skills</h3>
            <div className="hard-skills">
              
              
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                  <img src={reactIcon} alt="React" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
                  <img src={typescriptIcon} alt="Typescript" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
                  <img src={swift} alt="Swift" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
                  <img src={nodeIcon} alt="Node" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
                  <img src={htmlIcon} alt="Html" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
                  <img src={cssIcon} alt="Css" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={boostrapIcon} alt="bootstrap" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={jsIcon} alt="JavaScript" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={mongo} alt="Mongo" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={python} alt="Python" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={github} alt="Github" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={postman} alt="Postman" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={jsIcon} alt="JavaScript" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={aws} alt="AWS" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={gcp} alt="GCP" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={docker} alt="Docker" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={kubernetes} alt="Kubernetes" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={xcode} alt="Xcode" />
                </ScrollAnimation>
              </div>
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <img src={mysql} alt="Mysql" />
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Image Section */}
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={akhilaa} alt="Akhilaa Sonduri" />
        </ScrollAnimation>
      </div>

      
    </Container>
  );
}

