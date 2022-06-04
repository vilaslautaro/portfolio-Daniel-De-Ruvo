import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionAboutMe = styled.section`
  margin: 0 0 300px;
  padding-top: 250px;
  z-index: 50;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  justify-items: start;
  gap: 30px;
  padding-left: 0px;
  ${mediaQueries.desktop} {
    display: grid;
    padding-left: 100px;
    align-items: start;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 90px;
  }
`;

export const AboutMeBoxImg = styled.div`
  background: #59c9a5;
  position: relative;
  width: 60%;
  margin-bottom: 40px;
  z-index: 50;
  margin-left: 0px;
  height: 200px;
  & > div {
    box-sizing: border-box;
    position: absolute;
    width: 99%;
    height: 99%;
    z-index: 50;
    left: 38px;
    top: 38px;
    border: 6px solid #56e39f;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  & > img {
    cursor: pointer;
    position: absolute;
    width: 92%;
    height: 170%;
    left: 45px;
    z-index: 50;
    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.8));
    bottom: 0px;
    transition: 0.3s ease all;
    &:hover {
      transition: 0.3s ease all;
      filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
    }
  }
  ${mediaQueries.tablet} {
    background: #59c9a5;
    position: relative;
    width: 330px;
    z-index: 50;
    margin-left: 70px;
    height: 277px;
    & > div {
      box-sizing: border-box;
      position: absolute;
      width: 325px;
      height: 277px;
      z-index: 50;
      left: 38px;
      top: 38px;
      border: 6px solid #56e39f;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    & > img {
      cursor: pointer;
      position: absolute;
      width: 285px;
      height: 377px;
      left: 45px;
      z-index: 50;
      filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.8));
      bottom: 0px;
      transition: 0.3s ease all;
      &:hover {
        transition: 0.3s ease all;
        filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
      }
    }
  }
  ${mediaQueries.desktop} {
    background: #59c9a5;
    position: relative;
    width: 430px;
    height: 377px;
    & > div {
      box-sizing: border-box;
      position: absolute;
      width: 425px;
      height: 377px;
      left: 38px;
      top: 38px;
      border: 6px solid #56e39f;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    & > img {
      position: absolute;
      width: 412px;
      height: 558px;
      left: 45px;
      filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.8));
      bottom: 0px;
    }
  }
`;

export const AboutMeBoxText = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-evenly;
  color: var(--colorPrimary);
  max-width: 550px;
  width: 80%;
  height: 500px;
  z-index: 50;
  & > p {
    font-size: 1.2rem;
    margin: 0;
    z-index: 50;
  }
  ${mediaQueries.desktop}{
    display:; flex
    flex-flow: column wrap;
    justify-content: space-between;
    width: 100%;
    & > p {
      font-size: 1.5rem;
      margin: 0;
    }
  }
`;

export const AboutMeTitle = styled.h2`
  color: var(--colorSecondary);
  font-weigth: 600;
  z-index: 50;
  margin: 0;
  font-size: 3rem;
  ${mediaQueries.desktop}{
    font-size: 4rem;
  }
`;

export const AboutMeBoxLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
  z-index: 50;
  & > a {
    text-decoration: none;
    z-index: 50;
    margin-right: 20px;
    font-size: 1.5rem;
    color: #fff;
    transition: 0.3s ease all;
    &:hover {
      transition: 0.3s ease all;
      filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
    }
    &:last-child {
      width: 55px;
      height: 50px;
      z-index: 50;
      font-size: 3rem;
      font-weight: 800;
      color: var(--colorSecondary);
      transition: 0.3s ease all;
      &:hover {
        transition: 0.3s ease all;
        filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
      }
    }
    & > img {
      filter: brightness(1.1);
      z-index: 50;
    }
  }
`;
