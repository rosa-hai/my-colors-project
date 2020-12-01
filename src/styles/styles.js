import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    
    html {
        box-sizing: border-box;
        position: relative;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
    }
    
    h1,h2,h3,h4{
      font-family: 'Montserrat', sans-serif;
    }
    ul{
      list-style-type: none;
    }
`;

export const SApp = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: space-between;
  //overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .image {
    display: flex;
    align-items: center;
    width: 45%;
    height: 100%;
    @media (max-width: 768px) {
      width: 100%;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  nav {
    margin-top: 10px;
    padding: 10px;
    height: 100px;
    @media (max-width: 768px) {
      height: unset;
    }
    ul {
      display: flex;
    }
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 4px;
      font-size: 1.3rem;
      font-family: "Montserrat", sans-serif;
      svg {
        width: 20px;
        margin-right: 10px;
      }
    }
  }
`;

export const SContent = styled.div`
  position: relative;
  flex: 1;
  height: 100%;

  color: #1f242a;
  //background-color: #ffffff;
  //background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23ffffff'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23ffab9d' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23ffab9d' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.5'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  //background-size: cover;
  //background-position-x: center;
  .text {
    padding: 20px 150px;

    @media (max-width: 768px) {
      padding: 20px 50px;
    }
  }
  h1 {
    font-size: 5rem;
    letter-spacing: 25px;
    @media (max-width: 768px) {
      font-size: 2.5rem;
      letter-spacing: 14px;
    }
    .title {
      color: ${(props) => props.darkMutedColor || "#000"};
    }
    span {
      color: ${(props) => props.vibrantColor};
    }
  }

  p {
    line-height: 30px;
    margin-top: 50px;
    color: ${(props) => props.darkVibrantColor || "#000"};
    font-size: 0.8rem;
    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  .new-image {
    border: 1px solid black;
    width: 80%;
    padding: 20px 40px;
    position: relative;
    background: ${(props) => props.mutedColor || "#000"};
    text-align: center;
    margin: 50px auto 0 auto;
    cursor: pointer;

    .contour {
      width: 100%;
      height: 100%;
      border: 1px solid black;
      position: absolute;
      top: 11px;
      left: 15px;
    }
  }
`;
