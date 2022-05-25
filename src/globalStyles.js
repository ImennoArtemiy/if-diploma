import styled, {createGlobalStyle, keyframes} from "styled-components";
import {colors, fontSetting} from "./data/siteConfig";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  :focus, :active {
    outline: none;
  }

  a:focus, a:active {
    outline: none;
  }

  nav, footer, header, aside {
    display: block;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
  }

  input, button, textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  a, a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: 400;
  }
  //-------------------------------------
  
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${fontSetting.middle.fs};
    line-height: ${fontSetting.middle.lh};
    color: ${colors.black};
  }
  
  h2 {
    font-size: ${fontSetting.large.fs};
    line-height: ${fontSetting.large.lh};
    text-transform: uppercase;
  }
  
  .labelActive {
    bottom: 30px;
  }
`
export const Wrapper = styled.div`
  position: relative;
  max-width: 1232px;
  margin: 0 auto;
  padding: 70px 16px;
  
`
export const blur = keyframes`
  0% {
    backdrop-filter: blur(0px);
  }
  100% {
    backdrop-filter: blur(5px);
  }
`
export const clearBlur = keyframes`
  0% {
    backdrop-filter: blur(5px);
  }
  100% {
    backdrop-filter: blur(0px);
  }
`
export const appearance = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
