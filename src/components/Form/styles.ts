// import styled from "styled-components";


// export const Container = styled.div`
//   margin-top: 3rem;
//   display: grid;
//   place-items: center;
//   h2{
//     text-align: center;
//     margin-bottom: 2rem;
//   }
//   form{
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     align-items: center;
//     gap: 1rem;
//     width: 100%;
//     input, textarea{
//       width: 60rem;
//       padding: 1rem 2rem;
//       border-radius: 1.6rem;
//       outline: none;
//       border: none;
//       background:none;
//       border: 1px solid #FFF;
//       color: white;
//       font-weight: 600;
//       &::placeholder{
//         color: #FFF;
//       }
//     }

//     textarea{
//       height: 20rem;
//       overflow-y: auto;
//       resize: none;
//     }

//     button{
//       padding: 1rem 6rem;
//       text-transform: uppercase;
//     }
  
//   }

//   @media (max-width: 740px){
//     form{
//       width: 100%;
      
//       input,textarea{
//         width: 100%;
//       }
//     }
//   }
// `


// export const ContainerSucces = styled.div`
//   margin-top: 10rem;
//   text-align: center;

//   button{
//     border-radius: 0.6rem;
//     padding: 1rem;
//     margin-top: 0.8rem;
//     text-transform: uppercase;
//     text-align: center;
//     color: #fbfbfb;
//   }
// `/

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background-color: transparent; /* Transparent background */
  color: #fff; /* White text color */
`;

export const ContainerSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30vh;
  background-color:transparent; /* Black background */
 
  color: #fff; /* White text color */

  h3 {
    font-size: 2rem;
    color: #fff; /* White text color */
    margin-bottom: 20px;
  }

  button {
    background-color: var(--green); /* Green background from contacts */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
       background-color: var(--accent-1);
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background-color: transparent; /* Transparent background */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Retain the box shadow for depth */

  h2 {
    font-size: 1.5rem;
    color: #fff; /* White text color */
    margin-bottom: 20px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #fff; /* White border */
    border-radius: 5px;
    font-size: 1rem;
    background-color: transparent; /* Transparent background */
    color: #fff; /* White text color */

    &::placeholder {
      color: #fff; /* White placeholder text color */
      font-size: 1.1rem; /* Increase placeholder font size */
    }

    &:hover,
    
    &:focus {
      border-color: #fff; /* White border on hover/focus */
    }
  }

  button {
    background-color: var(--green); /* Green background from contacts */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #218838;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;
