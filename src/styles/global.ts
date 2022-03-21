import { darken, lighten } from "polished";
import { createGlobalStyle } from "styled-components";

export const theme = {
  main: {
    primary: "#0072FB",
    primaryLight: lighten(0.1, "#0072FB"),
    primaryDark: darken(0.1, "#0072FB"),
    secondary: "#001F69",
    secondaryLight: lighten(0.1, "#001F69"),
    secondaryDark: darken(0.1, "#001F69"),
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
 
html {
  font-size: 62.5%;
}

label {
  margin: 0 0 0.2rem 0;
  color: #050E27;
  font-weight: 600;
}

body {
    background: #0072FB;
    overflow-x: hidden;
  }
`;
