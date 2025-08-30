import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://med-gaurd.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Medguard - Secure Decentralized EHR Audit System</h3>
              <p>A secure web-based audit logging system for electronic health records (EHRs) using React and Flask. The system allows patients and auditors to view access logs while preserving privacy and ensuring tamper detection. Access is authenticated via role-based login, and all audit entries include time, user ID, and action type. To ensure immutability and decentralization, I integrated Ethereum-based blockchain logging, so any unauthorized changes to audit data can be detected. The system supports secure queries, encrypted storage, and a clear UI that allows users to track who accessed their health data and when—enabling transparency and accountability.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li><li>Flask</li><li>MongoDB</li><li>Ethereum</li><li>Blockchain</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                
              </div>
            </header>
            <div className="body">
              <h3>Real-time Stock Search ios App</h3>
              <p>Developed a stock search iOS application using Swift, integrating Finhub API and Polygon API for real-time stock data. Ensured optimal performance with efficient data handling. Designed a user-friendly interface with sections for news, insights, and charts, allowing users to quickly access comprehensive stock information. </p>
            </div>
            <footer> <ul className="tech-list"> <li>ios</li><li>DynamoDB</li><li>Xcode</li><li>SwiftUI</li><li>GCP</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                {/* <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a> */}
                <a href="https://web3client-419104.uw.r.appspot.com/search/home" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Real-time Stock Search Web Application</h3>
              <p>Independently conceptualized, designed, and developed a stock search web application using React.js, Node.js, and MongoDB. Integrated Finhub API and Polygon API for real-time stock data.Hosted on Google Cloud Platform (GCP), ensuring 80% faster load times. Streamlined data management with MongoDB for reduced access times. Enhanced user experience with dedicated components for news, insights, and charts, providing 60% more comprehensive stock information.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li><li>DynamoDB</li><li>Node.js</li><li>Highcharts</li><li>GCP</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                {/* <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a> */}
                <a href="https://ieeexplore.ieee.org/document/9702842" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Crypto Currency Price Prediction Model</h3>
              <p>Developed a machine learning model to predict the price of a specific cryptocurrency using historical data, achieving high predictive accuracy. Formulated and executed a comprehensive project plan to analyze cryptocurrency price trends, resulting in a 20% accuracy improvement over previous models. Implemented the model using Python, incorporating Time Series Analysis and Feature Engineering techniques, and achieved a 90% accuracy rate.</p>
            </div>
            <footer> <ul className="tech-list"><li>Time Series</li><li>ARIMA</li><li>Feature Engineering</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              
            </header>
            <div className="body">
              <h3>Stock price prediction using LSTM</h3>
              <p>
              Implemented LSTM for 95% accurate stock price prediction, utilizing stochastic gradient descent. Model with
              cross-approval executed with well-founded preparation data.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>RNN</li>
                <li>LSTM</li>
                <li>Neural Network</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
             
            </header>
            <div className="body">
              <h3>Crop Yield Prediction Using ANN</h3>
              <p>
              I crafted a predictive crop yield system by analyzing historical soil data, pH levels, nutrients, and weather conditions. Utilizing the Feed Forward Backward Propagation algorithm, I developed precise yield forecasts. Concurrently, I designed a web application using NodeJs, HTML, CSS, and JavaScript to facilitate the visualization and interpretation of the forecasted data.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Pandas</li>
                <li>ANN</li>
                <li>ML</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        
      </div>
    </Container>
  );
}