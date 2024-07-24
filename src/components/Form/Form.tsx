// import { Container, ContainerSucces } from './styles'
// import { useForm, ValidationError } from '@formspree/react'
// import { toast, ToastContainer } from 'react-toastify'
// import ReCAPTCHA from 'react-google-recaptcha'
// import { useEffect, useState } from 'react'
// import validator from 'validator'

// export function Form() {
//   const [state, handleSubmit] = useForm('xknkpqry')
//   const [validEmail, setValidEmail] = useState(false)
//   const [isHuman, setIsHuman] = useState(false)
//   const [message, setMessage] = useState('')
//   function verifyEmail(email: string) {
//     if (validator.isEmail(email)) {
//       setValidEmail(true)
//     } else {
//       setValidEmail(false)
//     }
//   }
//   useEffect(() => {
//     if (state.succeeded) {
//       toast.success('Email successfully sent!', {
//         position: toast.POSITION.BOTTOM_LEFT,
//         pauseOnFocusLoss: false,
//         closeOnClick: true,
//         hideProgressBar: false,
//         toastId: 'succeeded',
//       })
//     }
//   })
//   if (state.succeeded) {
//     return (
//       <ContainerSucces>
//         <h3>Thanks for getting in touch!</h3>
//         <button
//           onClick={() => {
//             window.scrollTo({ top: 0, behavior: 'smooth' })
//           }}
//         >
//           Back to the top
//         </button>
//         <ToastContainer />
//       </ContainerSucces>
//     )
//   }
//   return (
//     <Container>
//       <h2>Get in touch using the form</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Email"
//           id="email"
//           type="email"
//           name="email"
//           onChange={(e) => {
//             verifyEmail(e.target.value)
//           }}
//           required
//         />
//         <ValidationError prefix="Email" field="email" errors={state.errors} />
//         <textarea
//           required
//           placeholder="Send a message to get started."
//           id="message"
//           name="message"
//           onChange={(e) => {
//             setMessage(e.target.value)
//           }}
//         />
//         <ValidationError
//           prefix="Message"
//           field="message"
//           errors={state.errors}
//         />
   
//         <button
//           type="submit"
//           disabled={state.submitting || !validEmail || !message || !isHuman}
//         >
//           Submit
//         </button>
//       </form>
//       <ToastContainer />
//     </Container>
//   )
// }
// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import validator from 'validator';

// const email = 'sondurip@usc.edu';

// const Form = () => {
//   const [validEmail, setValidEmail] = useState(false);
//   const [isHuman, setIsHuman] = useState(true);  // Assuming no CAPTCHA used
//   const [message, setMessage] = useState('');
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   function verifyEmail(email) {
//     if (validator.isEmail(email)) {
//       setValidEmail(true);
//     } else {
//       setValidEmail(false);
//     }
//   }

//   useEffect(() => {
//     if (formSubmitted) {
//       toast.success('Email successfully sent!', {
//         position: toast.POSITION.BOTTOM_LEFT,
//         pauseOnFocusLoss: false,
//         closeOnClick: true,
//         hideProgressBar: false,
//         toastId: 'succeeded',
//       });
//     }
//   }, [formSubmitted]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const response = await fetch('https://getform.io/f/agdyjznb', {
//       method: 'POST',
//       body: formData,
//     });

//     if (response.ok) {
//       setFormSubmitted(true);
//     } else {
//       toast.error('Failed to send email!', {
//         position: toast.POSITION.BOTTOM_LEFT,
//         pauseOnFocusLoss: false,
//         closeOnClick: true,
//         hideProgressBar: false,
//         toastId: 'failed',
//       });
//     }
//   };

//   if (formSubmitted) {
//     return (
//       <div className="w-full h-screen bg-white flex justify-center items-center p-4">
//         <div className="flex flex-col max-w-[600px] w-full bg-gray-100 p-8 rounded-lg shadow-md text-center">
//           <h3 className="text-4xl font-bold text-gray-800 mb-4">Thanks for getting in touch!</h3>
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-lg transition duration-300 ease-in-out"
//           >
//             Back to the top
//           </button>
//           <ToastContainer />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div name="contact" className="w-full h-screen bg-white flex justify-center items-center p-4">
//       <form
//         method="POST"
//         action="https://getform.io/f/agdyjznb"
//         onSubmit={handleSubmit}
//         className="flex flex-col max-w-[600px] w-full bg-gray-100 p-8 rounded-lg shadow-md"
//       >
//         <div className="pb-8">
//           <p className="text-4xl font-bold text-gray-800">Contact</p>
//           <p className="text-gray-600 py-4">
//             Submit the form below or shoot me an email to
//             <a href={`mailto:${email}`} className="text-blue-500 underline ml-1">{email}</a>
//           </p>
//         </div>
//         <input
//           className="bg-white p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           type="text"
//           placeholder="Name"
//           name="name"
//           required
//         />
//         <input
//           className="bg-white p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           type="email"
//           placeholder="Email"
//           name="email"
//           onChange={(e) => verifyEmail(e.target.value)}
//           required
//         />
//         <textarea
//           className="bg-white p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           name="message"
//           rows="10"
//           placeholder="Message"
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         ></textarea>
//         <button
//           type="submit"
//           disabled={!validEmail || !message || !isHuman}
//           className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-lg transition duration-300 ease-in-out"
//         >
//           Let's Connect
//         </button>

//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Form;


import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import { Container, ContainerSuccess, FormContainer } from './styles'; // Adjust the import path as needed

const email = 'sondurip@usc.edu';

const Form: React.FC = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(true);  // Assuming no CAPTCHA used
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  useEffect(() => {
    if (formSubmitted) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
    }
  }, [formSubmitted]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch('https://getform.io/f/agdyjznb', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      setFormSubmitted(true);
    } else {
      toast.error('Failed to send email!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'failed',
      });
    }
  };

  if (formSubmitted) {
    return (
      <ContainerSuccess>
        <h3>Thanks for getting in touch!</h3>
        
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSuccess>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <br></br>
      <FormContainer onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          id="name"
          type="text"
          name="name"
          required
        />
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) => verifyEmail(e.target.value)}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          rows={10}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={!validEmail || !message || !isHuman}
        >
          Submit
        </button>
      </FormContainer>
      <ToastContainer />
    </Container>
  );
};

export default Form;

