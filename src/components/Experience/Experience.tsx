
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import accolite from '../../assets/accolite.jpg'; 

export function Experience() {
  return (
    <Container id="experience">
      <h2>My Experience</h2>
      
      <div className="experience-timeline">
        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
            <div className="timeline-card">
              <h3>Software Developer</h3>
              <h4>HubSpot</h4>
              <p><strong>June 2025 – Sep 2025</strong></p>
              <p>Engineered advanced Action Builder features including interactive tooltips, case-sensitive validation, page-level dropdowns, drag-and-drop outputs, custom code execution, and enum input panels—using TypeScript and React, increasing workflow efficiency by 25%.</p>
              <p>Integrated dynamic listing category types into frontend UI and underlying data models, ensuring state consistency and enabling scalable workflow automation across applications.</p>
              <p>Developed and enabled Chirp API endpoints to seamlessly connect backend services with frontend workflows, supporting real-time billing metric integration and dynamic execution pipelines.</p>
              <p>Enhanced gates, release scopes, and RTL functionality for the External Action Builder, reducing QA defects by 30% and accelerating release timelines.</p>
              <p>Stabilized internal Action Builder and QA environments by resolving visual rendering bugs, acceptance test crashes, and event-handling issues, improving system reliability and developer confidence.</p>
              <p>Implemented end-to-end event tracking and telemetry across workflow components, significantly improving observability, debugging efficiency, and product maintainability.</p>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
            <div className="timeline-card">
              <h3>Software Developer Intern</h3>
              <h4>WorkUp</h4>
              <p><strong>May 2024 – Jul 2024</strong></p>
              <p>Developed and integrated 5 RESTful API endpoints using Node.js, enabling efficient management of custom interview questions and sets. I also developed the corresponding frontend components in React.js, ensuring seamless interaction between the client and server.</p>
              <p>Implemented Zoom SDKs to incorporate video chat functionality into the interview platform, significantly enhancing its real-time communication capabilities. Additionally, I developed a feature allowing users to select interview templates categorized by type, optimizing the template selection process.</p>
              <p>Added a feature for playable video recordings on interview result cards, utilizing HTML5 video components and custom React hooks. This allowed users to review interview recordings directly within the platform, improving post-interview analysis and feedback.</p>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
            <div className="timeline-card">
              <h3>Software Developer</h3>
              <h4>Accolite Digital</h4>
              <p><strong>Aug 2022 – Jul 2023</strong></p>
              <p>Worked as a Software Developer at Accolite Digital, specializing in AWS and Google Cloud Platform (GCP) technologies.</p>
              <p>As a certified AWS Cloud Practitioner, I led the containerization of web applications and implemented CI/CD pipelines, reducing deployment times by 20%. My expertise in AWS included managing VPCs, Amazon RDS databases, S3 buckets, EC2 instances, and Lightsail, ensuring reliable and scalable cloud solutions.</p>
              <p>My role emphasized optimizing cloud infrastructure for robust performance and cost-effectiveness.</p>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000}>
            <div className="timeline-card">
              <h3>Software Developer Intern</h3>
              <h4>Accolite Digital</h4>
              <p><strong>Jan 2022 – Jul 2022</strong></p>
              <p>Demonstrated expertise in Node.js, .NET, and React, utilizing these frameworks to develop effective and scalable software solutions tailored to diverse business needs.</p>
              <p>Strengthened skillfulness in programming languages such as C, C++, JavaScript, and Python, broadening my capability to tackle diverse technical challenges with confidence.</p>
              <p>Mastered Git for efficient code management and collaboration, ensuring streamlined development processes and maintaining code integrity throughout projects.</p>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
            <div className="timeline-card">
              <h3>Research Intern</h3>
              <h4>MIT Square</h4>
              <p><strong>Jul 2021 – Oct 2021</strong></p>
              <p>Engineered a robust model that accurately predicts Ethereum's daily price fluctuations with 95% precision, leveraging advanced Time Series Analysis techniques in Python. This achievement underscores proficiency in financial data analytics and predictive modeling.</p>
              <p>Published a research paper on cryptocurrency price forecasting utilizing ARIMA, offering valuable insights into effective methodologies for predicting market trends and enhancing understanding of cryptocurrency dynamics.</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  );
}
