import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'



export function Footer() {
  return (
    <Container className="footer">
      
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/akhilaa-sonduri-0154b61a4/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/sa1136"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
        
      </div>
    </Container>
  )
}
