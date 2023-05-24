import { createGlobalStyle, css } from "styled-components";
import ColorScheme from "@/styles/theme/colorScheme";
import fontFace from "@/styles/fontFace";
import { Breakpoints } from "@/styles/breakpoints";

const container = css`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${ColorScheme.MAIN};
    color: ${ColorScheme.GRAY};
    
    font-family: Lato, sans-serif;
    font-size: 14px;
    font-weight: 600;
  }
  
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,li {
    list-style-type: none;
  }

  button {
    font-family: inherit;
    border: 0;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    & > main {
      flex-grow: 1;
    }
  }
  
  .container {
    max-width: 1950px;
    ${container};
  }

  .container-two {
    max-width: 1646px;
    ${container};
  }
  
  .container-three {
    max-width: 1500px;
    ${container};
  }

  .container-main {
    max-width: 1470px;
    ${container};
      
    @media(max-width: ${Breakpoints.BIG_TABLET}px) {
        padding: 0 15px
    }  
  }

  .container-main-two {
    max-width: 776px;
    ${container};
    
    @media(max-width: ${Breakpoints.BIG_TABLET}px) {
        max-width: none;
    }  
  }
  
  .p-0 {
    padding: 0;
  }
  
  ${fontFace}
`;
