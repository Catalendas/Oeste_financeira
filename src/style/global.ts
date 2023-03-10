import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}


@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {

}

body, input, textarea, select, button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}


::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: #E6E5E5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: #8047F8;
  }

`