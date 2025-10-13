import { Container } from "./styles";
import akhilaa from "../../assets/Akhilaa.png";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import swift from "../../assets/swift.png";
import nodeIcon from "../../assets/node-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import mongo from "../../assets/mongo.png";
import python from "../../assets/python.png";
import github from "../../assets/github.svg";
import aws from "../../assets/aws.svg";
import gcp from "../../assets/gcp.png";
import docker from "../../assets/docker.png";
import kubernetes from "../../assets/kubernetes.png";
import xcode from "../../assets/xcode.png";
import postman from "../../assets/postman.png";
import mysql from "../../assets/mysql.png";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
// New assets
import cIcon from "../../assets/c-icon.svg";
import cplusplusIcon from "../../assets/cplusplus-icon.svg";
import nextjsIcon from "../../assets/nextjs-icon.svg";
import angularIcon from "../../assets/angular-icon.svg";
import dotnetIcon from "../../assets/dotnet-icon.svg";
import flaskIcon from "../../assets/flask-icon-white.svg";
import fastapiIcon from "../../assets/fastapi-icon.svg";
import expressIcon from "../../assets/express-icon-white.svg";
import postgresqlIcon from "../../assets/postgresql-icon.svg";
import azureIcon from "../../assets/azure-icon.svg";
import jenkinsIcon from "../../assets/jenkins-icon.svg";
import vercelIcon from "../../assets/vercel-icon-white.svg";
import sqlIcon from "../../assets/sql-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <ScrollAnimation animateIn="fadeInUp">
        <h2>About Me</h2>
      </ScrollAnimation>
      
      <div className="about-intro">
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <div className="about-image">
            <img src={akhilaa} alt="Akhilaa Sonduri Panthangi" />
          </div>
          <p>
            Hi, I'm Akhilaa Sonduri Panthangi , a Master's student in Computer Science at USC and a Software Developer passionate about building scalable, data-driven, and impactful applications.
          </p>
          <p>
            I specialize in full-stack development using React, Node.js, AWS, and GCP, and love turning complex ideas into clean, efficient, and user-friendly software. From developing a real-time stock search platform to creating MedGuard, a medical monitoring system, I've designed and deployed solutions that bridge functionality with real-world impact.
          </p>
          <p>
            Curious by nature and driven by problem-solving, I thrive at the intersection of technology and creativity crafting systems that don't just work well, but make a difference. I'm excited to grow as a Software Engineer, collaborate with innovative teams, and continue building products that empower users and elevate experiences.
          </p>
        </ScrollAnimation>
      </div>
      
      <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
        <h3>Education</h3>
      </ScrollAnimation>
      
      <div className="education-timeline">
        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
            <div className="timeline-card">
              <h3>University of Southern California</h3>
              <p><strong>Aug 2023 – May 2025</strong></p>
              <h4>Masters of Science in Computer Science</h4>
              <p>GPA: 3.65 / 4</p>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000}>
            <div className="timeline-card">
              <h3>SRM University</h3>
              <p><strong>Jul 2018 – May 2022</strong></p>
              <h4>Bachelor of Technology in Computer Science and Engineering</h4>
              <p>GPA: 9.76 /10</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      
      <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
        <h2>Technical Skills</h2>
      </ScrollAnimation>
      
      <div className="skills-grid">
        <div className="skill-card">
          <h4>Programming Languages</h4>
          <div className="skill-icons">
            <img src={jsIcon} alt="JavaScript" />
            <img src={python} alt="Python" />
            <img src={swift} alt="Swift" />
            <img src={typescriptIcon} alt="TypeScript" />
          </div>
          <div className="skill-icons">
            <img src={cIcon} alt="C" />
            <img src={cplusplusIcon} alt="C++" />
            <img src={htmlIcon} alt="HTML" />
            <img src={cssIcon} alt="CSS" />
          </div>
        </div>
        
        <div className="skill-card">
          <h4>Frontend Frameworks</h4>
          <div className="skill-icons">
            <img src={reactIcon} alt="React" />
            <img src={nextjsIcon} alt="Next.js" />
            <img src={angularIcon} alt="Angular" />
            <img src={dotnetIcon} alt=".NET" />
          </div>
          <div className="skill-icons">
            <img src={boostrapIcon} alt="Bootstrap" />
            <img src={htmlIcon} alt="HTML" />
            <img src={cssIcon} alt="CSS" />
            <img src={jsIcon} alt="JavaScript" />
          </div>
        </div>
        
        <div className="skill-card">
          <h4>Backend & APIs</h4>
          <div className="skill-icons">
            <img src={nodeIcon} alt="Node.js" />
            <img src={flaskIcon} alt="Flask" />
            <img src={fastapiIcon} alt="FastAPI" />
            <img src={expressIcon} alt="Express.js" />
          </div>
          <div className="skill-icons">
            <img src={python} alt="Python" />
            <img src={postman} alt="Postman" />
            <img src={github} alt="GitHub" />
            <img src={jsIcon} alt="JavaScript" />
          </div>
        </div>
        
        <div className="skill-card">
          <h4>Databases</h4>
          <div className="skill-icons">
            <img src={mongo} alt="MongoDB" />
            <img src={mysql} alt="MySQL" />
            <img src={postgresqlIcon} alt="PostgreSQL" />
            <img src={sqlIcon} alt="SQL" />
          </div>
          <div className="skill-icons">
            <img src={aws} alt="AWS RDS" />
            <img src={python} alt="Database Design" />
            <img src={nodeIcon} alt="Database Integration" />
            <img src={postman} alt="API Testing" />
          </div>
        </div>
        
        <div className="skill-card">
          <h4>Cloud Platforms</h4>
          <div className="skill-icons">
            <img src={aws} alt="AWS" />
            <img src={gcp} alt="GCP" />
            <img src={azureIcon} alt="Azure" />
            <img src={vercelIcon} alt="Vercel" />
          </div>
          <div className="skill-icons">
            <img src={docker} alt="Docker" />
            <img src={kubernetes} alt="Kubernetes" />
            <img src={jenkinsIcon} alt="CI/CD" />
            <img src={github} alt="GitHub Actions" />
          </div>
        </div>
        
        <div className="skill-card">
          <h4>Development Tools</h4>
          <div className="skill-icons">
            <img src={github} alt="Git" />
            <img src={jenkinsIcon} alt="Jenkins" />
            <img src={postman} alt="Postman" />
            <img src={xcode} alt="Xcode" />
          </div>
          <div className="skill-icons">
            <img src={docker} alt="Docker" />
            <img src={vercelIcon} alt="Vercel" />
            <img src={aws} alt="AWS Tools" />
            <img src={gcp} alt="GCP Tools" />
          </div>
        </div>
      </div>
    </Container>
  );
}