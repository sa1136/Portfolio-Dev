import styled from "styled-components";

export const Container = styled.section`
  padding: 10rem 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  
  .hero-text{
    max-width: 85rem;
    z-index: 2;
    
    & > p{
      font-size: 2.2rem;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
      font-weight: 400;
      letter-spacing: 0.1rem;
      
      img {
        margin: 0 0.8rem;
        vertical-align: middle;
      }
    }
    
    h1{
      font-size: 7.5rem;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 2.5rem;
      color: var(--text);
      letter-spacing: -0.01em;
    }

    h3{
      color: var(--green);
      margin: 2rem 0 4rem 0;
      font-size: 2.2rem;
      font-weight: 500;
      line-height: 1.5;
      max-width: 70rem;
      margin-left: auto;
      margin-right: auto;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .social-media{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-top: 4rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 50%;
      background: var(--surface);
      border: 1px solid var(--border);
      transition: all 0.3s ease;
      
      img {
        width: 2.6rem;
        height: 2.6rem;
        transition: all 0.3s ease;
      }
      
      &:hover {
        transform: translateY(-4px);
        background: var(--accent-1);
        border-color: var(--accent-1);
        
        img {
          filter: brightness(1.2);
        }
      }
      
      &:nth-child(2):hover {
        background: var(--green);
        border-color: var(--green);
      }
    }
  }

  .button{
    margin-top: 3rem;
    padding: 1.8rem 4rem;
    font-size: 1.7rem;
    font-weight: 600;
    border-radius: 4rem;
    background: var(--green);
    color: white;
    border: none;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      background: #1ea85a;
      box-shadow: 0 8px 20px rgba(35, 206, 107, 0.3);
    }
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`