import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SimKyungha from "../fonts/SimKyungha.ttf"; // => src폴더안에서 찾아올때
// 절대경로에서 찾아올때는 import쓸 필요 없다.

const GlobalStyles = createGlobalStyle`
  
  ${reset}

  *{
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "SimKyungha";
  }

  :root{
    --light-color: #fff;
    --dark-color: #000;
    --border-color: #ccc;
    --accent-color: #dc1437;
    --title-color: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }

  @font-face {
    font-family: "SimKyungha";
    src: url(${SimKyungha}) format("truetype");  
    /* src 폴더에서 찾아올때 상대경로 찾아오는 방법 */

    /* src: url("/fonts/SimKyungha.ttf") format("truetype") */
    /* public에서 찾아올때 "/"로 전역에서 사용하는 절대경로로 찾아오는 방법이다. */
  }
`;

export default GlobalStyles;
