import { createGlobalStyle } from "styled-components";

export const theme = {
  main: {
    primary: "#0072FB",
    secondary: "#001F69",
    primaryText: "#000",
    secondaryText: "#fff",
  },
};

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Poppins";
    src: url("../../public/fonts/Poppins.woff") format("woff"),
    url("../../public/fonts/Poppins.woff2") format("woff2");
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; 
}
 
body {
    background: #f1f1f1;
    overflow-x: hidden;
  }
`;
