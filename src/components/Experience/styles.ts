// import styled from "styled-components";


// export const Container = styled.section`
//   margin-top: 15rem;
  
//   h2{
//     text-align: center;
//     font-size: 4rem;
//     margin-bottom: 3rem;
//   }
//   .projects{
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-template-rows: auto;
//     gap: 2rem;
//     padding: 1rem;
//     overflow: hidden;

//     .project{
//       padding: 2rem 1.8rem;
//       background-color: #2b2b2b;
//       border-radius: 1.2rem;
//       transition: 0.25s;
//       display: flex;
//       flex-direction: column;
//       height: 100%;
//       color: #FFF;
//       &:hover{
//         transform: translateY(-5px);
//         background-color: var(--pink);
//       }

//       header{
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//         color: var(--blue);
//         margin-bottom: 3.6rem;
//         .project-links{
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }
//         a > img {
//           width: 5.0rem;
//         }
//       }
      
//       h3{
//         margin-bottom: 2rem;
//       }

//       p{
//         letter-spacing: 0.12rem;
//         margin-bottom: 2rem;
//         a{
//           color: #FFFF;
//           border-bottom: 1px solid var(--green);
//           transition: color 0.25s;
//           &:hover{
//             color: var(--green);
//           }
//         }
//       }

//       footer{
//         margin-top: auto;
//         .tech-list{
//           display: flex;
//           align-items: center;
//           gap: 2rem;
//           font-size: 1.4rem;
//           opacity: 0.6;
//         }
//       }

//     }
//   }

//   @media (max-width: 960px){
//     .projects{
//       grid-template-columns: 1fr 1fr;
//     }
//   }

//   @media (max-width: 740px){
//     .projects{
//       grid-template-columns: 1fr;
//     }
//   }
// `

import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .experience-timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 0;
    margin-left: 0;
    width: 100%;
    
    &::before {
      content: '';
      position: absolute;
      left: 3rem;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(to bottom, var(--accent-1), var(--accent-2), var(--accent-3));
      border-radius: 2px;
    }
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 4rem;
    width: 100%;
    padding-left: 8rem;
    text-align: left;
    
    &::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: var(--accent-1);
      border: 4px solid var(--surface);
      border-radius: 50%;
      top: 0;
      left: 1.8rem;
      z-index: 2;
    }
    
    &:nth-child(2)::before {
      background: var(--accent-2);
    }
    
    &:nth-child(3)::before {
      background: var(--accent-3);
    }
    
    &:nth-child(4)::before {
      background: var(--green);
    }
    
    &:nth-child(5)::before {
      background: var(--blue);
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
    
    h4 {
      color: var(--text);
      font-size: 1.8rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    
    p {
      color: var(--text);
      font-size: 1.6rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
  }

    &:before {
      content: "";
      position: absolute;
      left: -1.8rem; /* Adjust to center the node on the line */
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      background: var(--green);
      border-radius: 50%;
      z-index: 1;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--blue);
      margin-bottom: 1rem;

      .project-links {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      a > img {
        width: 2rem;
      }
    }

    .body {
      flex: 1;
      padding-left: 1rem;

      h3 {
        margin-bottom: 1rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 1rem;

        a {
          color: var(--text);
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }
    }

    footer {
      .tech-list {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.4rem;
        opacity: 0.6;
      }
    }
  }
  
      /* Light mode: glass-morphism matching technical skills */
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
          
          h4 {
            color: var(--text);
          }
          
          p {
            color: var(--text);
          }
        }
      }
  
  

  @media (max-width: 960px) {
    .experience {
      flex-direction: column;
      align-items: flex-start;

      header {
        margin-bottom: 1rem;
      }

      .body {
        padding-left: 0;
      }

      footer {
        margin-top: 1rem;
      }
    }

    .timeline-container {
      padding-left: 2rem;
    }
  }
  
  @media (max-width: 960px) {
    .experience-timeline {
      &::before {
        left: 2.5rem;
      }
    }
    
    .timeline-item {
      padding-left: 6.5rem;
      
      &::before {
        left: 1.8rem;
      }
    }
  }
  
  @media (max-width: 480px) {
    .experience-timeline {
      &::before {
        left: 2rem;
      }
    }
    
    .timeline-item {
      padding-left: 5rem;
      
      &::before {
        left: 1.5rem;
      }
    }
    
    .timeline-card {
      padding: 1.5rem 1rem;
      
      h3 {
        font-size: 1.8rem;
      }
      
      h4 {
        font-size: 1.6rem;
      }
      
      p {
        font-size: 1.4rem;
      }
    }
  }
`;

