
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>My Experience</h2>
      
      <div className="experience-timeline">
        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
            <div className="timeline-card">
              <h3>AI Engineer</h3>
              <h4>Proliant Data</h4>
              <p><strong>May 2026 – Present</strong></p>
              <p>Delivered the core Python library behind RESOLVE, an AI-native, NLP-to-SQL agent that answers analysts' questions in natural language over enterprise migration data, built as ~3,300 lines across 12 modules (safety layer, metadata registry, Neo4j KG queries, FAISS retrieval) grounding every generated SQL query and answer in hybrid RAG.</p>
              <p>Cut token spend and eliminated runaway loops in a 28-tool autonomous agent through prompt caching, history pruning, and result compaction, backed by hard termination guards (budget caps, forced synthesis) the model cannot override.</p>
              <p>Secured the platform to enterprise standards, closing SQL-injection, CORS, MIME-spoofing, and credential risks via AST-based SQL validation, Azure Key Vault rotation, and PII redaction, gated by a CI eval harness on correctness, groundedness, and cost.</p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
            <div className="timeline-card">
              <h3>Research Assistant</h3>
              <h4>University of Southern California - Viterbi School of Engineering</h4>
              <p><strong>Sep 2025 – Apr 2026</strong></p>
              <p>Architected agentic AI frameworks and multi-agent systems using React, TypeScript, Node.js, Express.js, and MongoDB, enabling real-time visualization of LLM reasoning and optimizing information extraction, ranking, and adaptive planning workflows.</p>
              <p>Built MoodMap, an AI-powered location recommendation engine using Groq Llama 3.3 70B, RAG, and OpenStreetMap for mood-based personalized suggestions via a mobile-first chatbot interface; integrated LLMs, NLP, and RAG pipelines with responsive frontend dashboards and APIs, enhancing coordination accuracy, reducing latency, and improving scalability across complex research prototypes.</p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
            <div className="timeline-card">
              <h3>Software Engineer</h3>
              <h4>HubSpot</h4>
              <p><strong>Jun 2025 – Sep 2025</strong></p>
              <p>Built an AI-powered summary and suggestion panel in the Workflow Action Builder, parsing triggers, filter branches, and action steps into structured payloads, reducing pre-activation review time by 30% and workflow misconfiguration by ~20%.</p>
              <p>Enhanced workflow efficiency by 25% by designing a new input panel to configure, reorder, validate, and save multiple workflow inputs with improved usability and visual consistency.</p>
              <p>Led a data model migration for workflow categories, defining clear data structures and service contracts to enable scalable automation and consistent platform behavior.</p>
              <p>Boosted platform reliability and QA efficiency by 30% by integrating real-time APIs, strengthening feature controls, execution safeguards, and monitoring for billing and analytics.</p>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000}>
            <div className="timeline-card">
              <h3>Software Developer Intern</h3>
              <h4>WorkUp</h4>
              <p><strong>May 2024 – Jul 2024</strong></p>
              <p>Engineered an AI-Driven Interview Customization Feature and Automated Template Selection system in React and Node.js, increasing user adoption by 40% and cutting recruiter setup time by 50%.</p>
              <p>Revamped the AI Copilot Web App UI by migrating to React and embedding video playback of candidate responses in reports, improving decision-making by 60% and overall user engagement by 30%.</p>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
            <div className="timeline-card">
              <h3>Software Developer</h3>
              <h4>Accolite Digital</h4>
              <p><strong>Jan 2022 – Jul 2023</strong></p>
              <p>Administered AWS services (VPCs, RDS, S3, EC2, Lightsail) and orchestrated CI/CD pipelines with containerized applications as a Certified AWS Cloud Practitioner, slashing deployment time by 20% while ensuring secure, scalable infrastructure; led migration to GCP, cutting operational costs by 15%.</p>
              <p>Optimized Git workflows and collaborated cross-functionally on Node.js, .NET, React, microservices, and REST API integration, strengthening monitoring and alerting across cloud infrastructure and increasing system reliability and uptime by 25%.</p>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="timeline-item">
          <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
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
