import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;

        .project{
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 1.2rem;
          padding: 2rem 1.8rem;
          transition: all 0.3s ease;
          overflow: hidden;
          backdrop-filter: blur(15px);
          display: flex;
          flex-direction: column;
          height: 100%;
          color: var(--text);
          
          &:nth-child(1) {
            background: linear-gradient(135deg, rgba(108, 92, 231, 0.3), rgba(108, 92, 231, 0.15));
            border-color: rgba(108, 92, 231, 0.4);
          }
          
          &:nth-child(2) {
            background: linear-gradient(135deg, rgba(0, 194, 168, 0.3), rgba(0, 194, 168, 0.15));
            border-color: rgba(0, 194, 168, 0.4);
          }
          
          &:nth-child(3) {
            background: linear-gradient(135deg, rgba(255, 175, 95, 0.3), rgba(255, 175, 95, 0.15));
            border-color: rgba(255, 175, 95, 0.4);
          }
          
          &:hover{
            transform: translateY(-5px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(20px);
          }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: var(--text);
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }
  
      /* Light mode: glass-morphism matching technical skills */
      html.light & {
        .projects .project{
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.08));
          border: 1px solid rgba(0, 0, 0, 0.2);
          
          &:nth-child(1) {
            background: linear-gradient(135deg, rgba(108, 92, 231, 0.35), rgba(108, 92, 231, 0.18));
            border-color: rgba(108, 92, 231, 0.5);
          }
          
          &:nth-child(2) {
            background: linear-gradient(135deg, rgba(0, 194, 168, 0.35), rgba(0, 194, 168, 0.18));
            border-color: rgba(0, 194, 168, 0.5);
          }
          
          &:nth-child(3) {
            background: linear-gradient(135deg, rgba(255, 175, 95, 0.35), rgba(255, 175, 95, 0.18));
            border-color: rgba(255, 175, 95, 0.5);
          }
          
          &:hover {
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
          }
        }
        .projects .project p a{
          color: var(--text);
        }
      }
  

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
      padding: 0.5rem;
      gap: 1.5rem;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
      padding: 0.5rem;
      gap: 1.5rem;
    }
    
    .project {
      padding: 1.5rem 1.2rem;
    }
  }
  
  @media (max-width: 480px) {
    .projects{
      grid-template-columns: 1fr;
      padding: 0.5rem 1rem;
      gap: 1.2rem;
    }
    
    .project {
      padding: 1.2rem 1rem;
      
      header {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
        
        .project-links {
          gap: 0.5rem;
        }
        
        a > img {
          width: 3.5rem;
        }
      }
      
      h3 {
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
      }
      
      p {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        line-height: 1.5;
      }
      
      footer {
        .tech-list {
          gap: 1rem;
          font-size: 1.2rem;
          flex-wrap: wrap;
        }
      }
    }
  }
`