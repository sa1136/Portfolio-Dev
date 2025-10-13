import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

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
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
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

`