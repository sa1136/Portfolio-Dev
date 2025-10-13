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

  .timeline-container {
    position: relative;
    padding-left: 3rem; /* Adjust for space between the timeline and content */
  }

  .timeline {
    position: absolute;
    left: 1.5rem;
    top: 0;
    bottom: 0;
    width: 0.2rem;
    background: var(--green);
  }

  .experience {
    position: relative;
    margin-bottom: 2rem;
    padding: 2rem 1.8rem;
    background-color: var(--accent-1);
    border-radius: 1.2rem;
    transition: 0.25s;
    color: var(--text);
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover {
      transform: translateY(-5px);
      filter: brightness(0.95);
      background-color: #3b2fb3; /* even darker purple */
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
  
  /* Light mode: force white text inside colored cards for contrast */
  html.light & {
    .experience{
      color: #FFFFFF;
    }
    .experience .body p a{
      color: #FFFFFF;
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
`;
