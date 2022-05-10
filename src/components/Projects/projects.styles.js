import styled from "styled-components";

export const SectionProjects = styled.section`
  margin: 50px 0 0;
  padding-top: 50px;
  color: var(--colorPrimary);
  & > h2 {
    font-size: 2rem;
    margin-bottom: 50px;
  }
`;

export const ContainerImg = styled.div`
  position: relative;
  width: 802px;
  height: 722px;
  background: rgba(89, 201, 165, 0.34);
  & > div {
    box-sizing: border-box;
    position: absolute;
    width: 794px;
    height: 721px;
    left: 203px;
    top: 322px;
    border: 6px solid #56e39f;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  & > img {
    position: absolute;
    width: 802px;
    height: 722px;
    left: 0;
    top: 0;
  }
`;
