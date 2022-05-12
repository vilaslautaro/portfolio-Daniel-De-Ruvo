import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionAboutMe = styled.section`
  margin: 0;
  padding-top: 250px;
  display: grid;
  align-items: start;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 90px;
  ${mediaQueries.mobile} {
    display: grid;
    align-items: start;
    justify-items: start;
    gap: 30px;
  }
`;

export const AboutMeBoxImg = styled.div`
  background: #59c9a5;
  position: relative;
  width: 330px;
  height: 277px;
  & > div {
    box-sizing: border-box;
    position: absolute;
    width: 325px;
    height: 277px;
    left: 38px;
    top: 38px;
    border: 6px solid #56e39f;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  & > img {
    position: absolute;
    width: 391px;
    height: 438px;
    left: -50px;
    bottom: -7px;
  }
  ${mediaQueries.desktop} {
    background: #59c9a5;
    position: relative;
    width: 530px;
    height: 477px;
    & > div {
      box-sizing: border-box;
      position: absolute;
      width: 525px;
      height: 477px;
      left: 38px;
      top: 38px;
      border: 6px solid #56e39f;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    & > img {
      position: absolute;
      width: 591px;
      height: 638px;
      left: -50px;
      bottom: -7px;
    }
  }
`;

export const AboutMeBoxText = styled.div`
  display: flex;
  flex-flow: column wrap;
  color: var(--colorPrimary);
  max-width: 650px;
  height: 500px;
  justify-content: space-between;
  & > p {
    margin: 0;
    font-size: 1.7rem;
  }
  ${mediaQueries.mobile}{
    display:; flex
    flex-flow: column wrap;
    justify-content: space-evenly;
  }
`;

export const AboutMeTitle = styled.h2`
  color: var(--colorSecondary);
  font-weigth: 600;
  font-size: 5rem;
  margin: 0;
`;

export const AboutMeBoxLinks = styled.div`
  & > a {
    text-decoration: none;
    margin-right: 20px;
    font-size: 1.5rem;
    color: #fff;
    transition: 0.3s ease all;
    &:hover {
      transition: 0.3s ease all;
      filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.5));
    }
    & > img {
      filter: brightness(1.1);
    }
  }
`;
