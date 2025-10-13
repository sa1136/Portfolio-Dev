import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    --accent-1: #6C5CE7; /* indigo */
    --accent-2: #00C2A8; /* teal */
    --accent-3: #FFAF5F; /* warm orange */

    /* Themed tokens */
    --background: #0B1020;   /* deep navy */
    --background-gradient: none; /* no gradient in dark theme */
    --surface: #17171b;      /* card bg (dark) */
    --surface-alt: #1f1f26;  /* elevated card/bg */
    --text: #f8f9fa;         /* primary text */
    --text-muted: #b0b4c3;   /* secondary text */
    --border: rgba(255,255,255,0.08);
    --education-card-bg: rgba(108, 92, 231, 0.12); /* subtle indigo tint for dark */
    scroll-padding-top: 10rem;

    &.light{

      /* Light theme overrides */
      /* Brighter mint light theme WITH gradient */
      --background: #EBFAEB;  /* soft mint-green */
      --background-gradient: radial-gradient(1200px circle at 20% 10%, #F6FFF6 0%, #EBFAEB 70%);
      --education-card-bg: #FFFFFF; /* clean white in light mode */
      --surface: #ffffff;     /* pure white cards */
      --surface-alt: #eef1f9; /* subtle cool tint */
      --text: #1e1f25;        /* near-black text */
      --text-muted: #5b6078;  /* muted text */
      --border: rgba(0,0,0,0.08);

      body{
        transition: 0.5s;
        background: var(--background-gradient);
        color: var(--text);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: var(--text);
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--text);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--text);
          &::placeholder{
            transition: 0.5s;
            color: var(--text);
          }
        }
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
    color: var(--text);
  }

  body, input, textarea, button{
    font-family: 'Inter', 'Red Hat Display', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4{
    font-family: 'Sora', 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    font-weight: 600;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: var(--text);
    // &::first-letter{
    //   color: var(--green);
    // }
  }
`