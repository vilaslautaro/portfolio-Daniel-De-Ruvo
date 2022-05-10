import styled from "styled-components";

export const SectionAboutMe = styled.section`
  margin: 200px 0 0;
  padding-top: 50px;
  display: grid;
  align-items: start;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export const AboutMeBoxImg = styled.div`
  background: var(--colorSecondary);
  width: 300px;
  height: 300px;
`;

export const AboutMeBoxText = styled.div`
  display: flex;
  flex-flow: column wrap;
  color: var(--colorPrimary);
  max-width: 500px;
  height: 300px;
  justify-content: space-between;
  & > p {
    margin: 0;
    font-size: 1.3rem;
  }
`;
export const AboutMeBoxLinks = styled.div`
  & > a {
    text-decoration: none;
    margin-right: 10px;
    color: #fff;
  }
`;
