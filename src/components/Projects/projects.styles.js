import styled from "styled-components";
import { mediaQueries } from "styles";
import { motion } from "framer-motion";

export const SectionProjects = styled.section`
  margin: 100px 0;
  padding-top: 150px;
  color: var(--colorPrimary);
  & > h2 {
    font-size: 3.5rem;
    margin-bottom: 80px;
  }
`;

export const ContainerProjects = styled.div`
${mediaQueries.desktop}{
  display: grid;
  justify-content: start;
  row-gap: 150px;
  & > div:nth-child(2n+1){
    flex-flow: row-reverse wrap;
    & > div:first-child > div{
        left: -30px;
        top: 30px;
    }
  }
`;

export const Container = styled(motion.div)`
    display: flex;
    flex-flow: column wrap;
    margin: 0 0 50px;
  ${mediaQueries.desktop} {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    gap: 0;
    & > div:last-child {
      text-align: start;
      & > button {
        align-self: start;
      }
    }
  }
`;

export const Img = styled.img`
  width: 90%;
  height: 100%;
`

export const ContainerBoxImg = styled.div`
  ${mediaQueries.desktop} {
    position: relative;
    width: 475px;
    height: 427px;
    grid-area: img;
    background: rgba(89, 201, 165, 0.34);
  }
`;

export const ContainerImg = styled.div`
  ${mediaQueries.desktop} {
    box-sizing: border-box;
    position: absolute;
    width: 475px;
    height: 427px;
    left: 30px;
    top: 30px;
    border: 4px solid #56e39f;
    transition: 0.5s ease all;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    & > img {
      width: 100.1%;
      height: 100.1%;
      filter: brightness(0.9);
    }
  }
`;

export const ContainerTexts = styled.div`
  background: #3b2c35;
  width: 90%;
  height: 100%;
  padding: 15px 0;
  ${mediaQueries.desktop} {
    padding: 20px 30px;
    grid-area: text;
    margin-top: 90px;
    display: flex;
    z-index: 2;
    flex-flow: column wrap;
    justify-content: space-between;
    width: 475px;
    height: 275px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weigth: 600;
  color: var(--colorPrimary);
  margin: 0;
`;

export const ProjectSubtitle = styled.p`
  font-weigth: 600;
  color: var(--colorPrimary);
  margin: 0;
  font-size: 1.5rem;
`;

export const ProjectDescription = styled.p`
  font-weigth: 600;
  font-size: 1.2rem;
  color: var(--colorPrimary);
  margin: 0;
`;

export const ProjectButton = styled.button`
  font-weigth: 600;
  color: var(--colorPrimary);
  margin: 20px 0 0;
  font-size: 1rem;
  background: transparent;
  border-radius: 33px;
  border: 1px solid var(--colorPrimary);
  cursor: pointer;
  padding: 10px 40px;
  transition: 0.3s ease all;
  &:hover {
    color: var(--colorSecondary);
    transition: 0.3s ease all;
    border: 1px solid var(--colorSecondary);
  }
`;
