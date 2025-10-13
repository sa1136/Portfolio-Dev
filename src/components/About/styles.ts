import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  padding: 0 2rem;
  
  h2 {
    text-align: center !important;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: var(--green);
    width: 100%;
    display: block;
  }
  
  h3 {
    text-align: center !important;
    font-size: 3rem;
    margin-top: 6rem;
    margin-bottom: 3rem;
    color: var(--green);
    width: 100%;
    display: block;
  }
  
  .about-intro {
    max-width: 800px;
    margin: 0 auto 4rem auto;
    text-align: center;
    
    p {
      font-size: 1.8rem;
      line-height: 1.7;
      color: var(--text);
      margin-bottom: 2rem;
      font-weight: 400;
    }
  }
  
  .about-timeline, .education-timeline {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(to bottom, var(--accent-1), var(--accent-2), var(--accent-3));
      transform: translateX(-50%);
      border-radius: 2px;
    }
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 4rem;
    width: 50%;
    
    &:nth-child(odd) {
      left: 0;
      padding-right: 3rem;
      text-align: right;
    }
    
    &:nth-child(even) {
      left: 50%;
      padding-left: 3rem;
      text-align: left;
    }
    
    &::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: var(--accent-1);
      border: 4px solid var(--surface);
      border-radius: 50%;
      top: 0;
      z-index: 2;
    }
    
    &:nth-child(odd)::before {
      right: -10px;
    }
    
    &:nth-child(even)::before {
      left: -10px;
    }
    
    &:nth-child(2)::before {
      background: var(--accent-2);
    }
    
    &:nth-child(3)::before {
      background: var(--accent-3);
    }
  }
  
  .timeline-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 1.5rem;
    padding: 2.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(15px);
    
    &:nth-child(1) {
      background: linear-gradient(135deg, rgba(108, 92, 231, 0.3), rgba(108, 92, 231, 0.15));
      border-color: rgba(108, 92, 231, 0.4);
    }
    
    &:nth-child(2) {
      background: linear-gradient(135deg, rgba(0, 194, 168, 0.3), rgba(0, 194, 168, 0.15));
      border-color: rgba(0, 194, 168, 0.4);
    }
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(20px);
    }
    
    h3 {
      color: var(--green);
      font-size: 2.2rem;
      margin-bottom: 1rem;
      line-height: 1.6;
    }
    
    p {
      color: var(--text);
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .skill-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 1.2rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    overflow: hidden;
    backdrop-filter: blur(15px);
    
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
    
    &:nth-child(4) {
      background: linear-gradient(135deg, rgba(35, 206, 107, 0.3), rgba(35, 206, 107, 0.15));
      border-color: rgba(35, 206, 107, 0.4);
    }
    
    &:nth-child(5) {
      background: linear-gradient(135deg, rgba(1, 111, 185, 0.3), rgba(1, 111, 185, 0.15));
      border-color: rgba(1, 111, 185, 0.4);
    }
    
    &:nth-child(6) {
      background: linear-gradient(135deg, rgba(225, 31, 113, 0.3), rgba(225, 31, 113, 0.15));
      border-color: rgba(225, 31, 113, 0.4);
    }
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(20px);
    }
    
    h4 {
      color: var(--green);
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1.3rem;
      color: var(--text-muted);
      margin-top: 1rem;
      font-weight: 500;
    }
    
    .skill-icons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      justify-items: center;
      align-items: center;
      margin-bottom: 1rem;
      
      img {
        width: 3.6rem;
        height: 3.6rem;
        object-fit: contain;
        transition: transform 0.2s ease;
        
        &:hover {
          transform: scale(1.15);
        }
      }
    }
  }
  
  /* Light mode overrides for education and skill cards */
  html.light & {
    .timeline-card {
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
      
      &:hover {
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
      }
      
      h3 {
        color: var(--green);
      }
      
      p {
        color: var(--text);
      }
    }
    
    .skill-card {
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
      
      &:nth-child(4) {
        background: linear-gradient(135deg, rgba(35, 206, 107, 0.35), rgba(35, 206, 107, 0.18));
        border-color: rgba(35, 206, 107, 0.5);
      }
      
      &:nth-child(5) {
        background: linear-gradient(135deg, rgba(1, 111, 185, 0.35), rgba(1, 111, 185, 0.18));
        border-color: rgba(1, 111, 185, 0.5);
      }
      
      &:nth-child(6) {
        background: linear-gradient(135deg, rgba(225, 31, 113, 0.35), rgba(225, 31, 113, 0.18));
        border-color: rgba(225, 31, 113, 0.5);
      }
      
      &:hover {
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
        transform: translateY(-5px);
      }
    }
  }

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.2rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, filter 0.2s ease;

    img{
      width: 3.6rem;
      transition: transform 0.25s ease, filter 0.25s ease;
    }
    &:hover img{
      transform: scale(1.15);
      filter: drop-shadow(0 6px 16px rgba(108,92,231,0.35)); /* accent-1 glow */
    }
    &:hover{
      transform: translateY(-2px);
      filter: brightness(1.05);
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  /* Add spacing between About Me paragraphs */
  .about-right p{
    margin-bottom: 1.2rem;
  }
  /* Education visuals */
  .about-left .education-card{
    background-color: var(--education-card-bg);
    border: 1px solid var(--border);
    border-left: 0.4rem solid var(--green);
    border-radius: 1.2rem;
    margin-top: 1.2rem; /* space below heading */
    margin-bottom: 0.8rem; /* space between cards */
    padding: 1.6rem 2rem;
    transition: transform 0.25s ease, filter 0.25s ease;
  }
  /* Alternate card corner shapes */
  .about-left .education-card:nth-child(odd){
    border-top-left-radius: 2.4rem;
    border-bottom-right-radius: 2.4rem;
  }
  .about-left .education-card:nth-child(even){
    border-top-right-radius: 2.4rem;
    border-bottom-left-radius: 2.4rem;
  }
  .about-left .education-card:hover{
    transform: translateY(-3px);
    filter: brightness(0.98);
  }
  /* About badges */
  .about-badges{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.6rem;
  }
  .badge{
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 1.2rem;
    border-radius: 2rem;
    background-color: var(--accent-3);
    color: #1e1f25;
    border: none;
    font-size: 1.3rem;
  }
  
  

  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    .about-intro {
      p {
        font-size: 1.6rem;
      }
    }
    
    .about-timeline {
      &::before {
        left: 2rem;
      }
    }
    
    .timeline-item {
      width: 100%;
      left: 0 !important;
      padding-left: 4rem !important;
      padding-right: 0 !important;
      text-align: left !important;
      
      &::before {
        left: -8px !important;
        right: auto !important;
      }
    }
    
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      padding: 0 1rem;
    }
    
    .skill-card {
      padding: 1.5rem 1rem;
      
      h4 {
        font-size: 1.6rem;
        margin-bottom: 0.8rem;
      }
      
      .skill-icons {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.8rem;
        
        img {
          width: 2.8rem;
          height: 2.8rem;
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 0 1rem;
    }
    
    .skill-card {
      padding: 1.8rem 1.5rem;
      
      h4 {
        font-size: 1.7rem;
        margin-bottom: 1rem;
      }
      
      .skill-icons {
        grid-template-columns: repeat(4, 1fr);
        gap: 0.8rem;
        
        img {
          width: 2.6rem;
          height: 2.6rem;
        }
      }
    }
  }
  
  @media (max-width: 480px) {
    .skills-grid {
      grid-template-columns: 1fr;
      gap: 1.2rem;
      padding: 0 0.5rem;
    }
    
    .skill-card {
      padding: 1.5rem 1rem;
      
      h4 {
        font-size: 1.5rem;
        margin-bottom: 0.8rem;
      }
      
      .skill-icons {
        grid-template-columns: repeat(4, 1fr);
        gap: 0.6rem;
        
        img {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }
  }

`