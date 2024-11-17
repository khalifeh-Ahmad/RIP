import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #000000; /* Black background */
    color: #CCCCCC; /* Light grey text */
  }

  h1, h2, h3, h4, h5, h6 {
    color: #FFD700; /* Gold headings */
    font-family: 'Playfair Display', serif;
  }

  a {
    text-decoration: none;
    color: #FFD700; /* Gold links */
    transition: color 0.3s ease;
  }

  a:hover {
    color: #FFFFFF; /* White on hover */
  }

  button {
    font-family: 'Roboto', sans-serif;
    background-color: #FFD700; /* Gold button */
    color: #000000; /* Black text */
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.3s ease;
  }

  button:hover {
    background-color: #FFFFFF; /* White on hover */
    transform: scale(1.05);
  }
`;

export default GlobalStyles;
