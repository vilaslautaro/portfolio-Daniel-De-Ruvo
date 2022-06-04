import styled from "styled-components";
import { mediaQueries } from "styles";

export const ContactTitle = styled.h2`
  margin-top: 100px;
  padding-top: 150px;
  color: var(--colorPrimary);
  z-index: 55;
  font-size: 2.5rem;
  ${mediaQueries.desktop}{
    font-size: 3.5rem;
    padding-left: 100px;
  }
`;

export const SectionContact = styled.section`
  margin: 0 0 100px;
  z-index: 50;
  color: var(--colorPrimary);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around; 
  ${mediaQueries.desktop}{
    padding-left: 100px;
  }
`;

export const BoxContactInfo = styled.div`
  max-width: 500px;
  z-index: 50;
  margin: 0 10px 100px;
`;

export const ContactText = styled.h3`
  color: var(--colorSecondary);
  font-size: 2rem;
  z-index: 50;
`;

export const ContactInfo = styled.div`
  display: grid;
  z-index: 50;
  grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
  justify-content: center;
  align-items: center;
  margin: 80px 0px;
  gap: 20px;
  & > p {
    text-align: center;
    cursor: pointer;
    z-index: 50;
    margin: 0;
  }
  ${mediaQueries.desktop}{
    justify-content: space-between;
  }
`;

export const ContactLinks = styled.div`
  text-align: center;
  z-index: 50;
  & > a {
    margin-right: 20px;
    z-index: 50;
    & > img {
      z-index: 50;
      transition: 0.3s ease all;
      &:hover {
        z-index: 50;
        transition: 0.3s ease all;
        filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
      }
    }
  }
`;

export const Email = styled.p`
  border-radius: 15px;
  z-index: 50;
  border: 1px solid var(--colorSecondary);
  padding: 15px 30px;
  color: var(--colorSecondary);
  transition: 0.3s ease all;
  &:hover{
    transition: 0.3s ease all;
    z-index: 50;
    background: var(--colorSecondary);
    color: var(--colorPrimary);
  }
  ${mediaQueries.desktop}{
    margin: 0;
  }
`
