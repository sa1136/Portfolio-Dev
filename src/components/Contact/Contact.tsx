import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import Form from "../Form/Form";



export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:sondurip@usc.edu"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:sondurip@usc.edu">sondurip@usc.edu</a>
        </div>
        <div>
        <a href="tel:+1 6304017763"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+1 6304017763">(+1) 6304017763</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}