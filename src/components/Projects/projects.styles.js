import styled from "styled-components";

export const SectionProjects = styled.section`
  margin: 50px 0 0;
  padding-top: 50px;
  color: var(--colorPrimary);
  & > h2 {
    font-size: 3rem;
    margin-bottom: 80px;
  }
`;

export const ContainerProjects = styled.div`
& > div:nth-child(2n+1){
  grid-template-areas: "text img";
  & > div:first-child {
    margin-left: 125px;
    & > div {
      left: -30px;
      top: 30px;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 0;
  grid-template-areas: "img text";
  & > div:last-child {
    text-align: start;
    & > button {
      align-self: start;
    }
  }
`;

export const ContainerBoxImg = styled.div`
  position: relative;
  width: 525px;
  height: 477px;
  grid-area: img;
  background: rgba(89, 201, 165, 0.34);
  margin-bottom: 200px;
`;

export const ContainerImg = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 525px;
  height: 477px;
  left: 30px;
  top: 30px;
  border: 6px solid #56e39f;
  transition: 0.5s ease all;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  & > img {
    width: 100.1%;
    height: 100.1%;
    filter: brightness(0.9);
  }
`;

export const ContainerTexts = styled.div`
padding: 20px 50px;
grid-area: text;
margin-top: 100px;
background: #3B2C35;
display: flex;
z-index: 2;
flex-flow: column wrap;
justify-content: space-between;
width: 550px;
height: 275px;
}
`;

export const ProjectTitle = styled.h3`
  font-size: 2.5rem;
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
