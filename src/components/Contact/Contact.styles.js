import styled from "styled-components";
//import { mediaQueries } from "styles";

export const ContactTitle = styled.h2`
  margin-top: 100px;
  padding-top: 150px;
  color: var(--colorPrimary);
  font-size: 3.5rem;
  z-index: 50;
  padding-left: 100px;
`;

export const SectionContact = styled.section`
  margin: 0 0 100px;
  z-index: 50;
  padding-left: 100px;
  color: var(--colorPrimary);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around; 
`;

export const BoxContactInfo = styled.div`
  max-width: 500px;
  z-index: 50;
`;

export const ContactText = styled.h3`
  color: var(--colorSecondary);
  font-size: 2rem;
  z-index: 50;
`;

export const ContactInfo = styled.div`
  display: flex;
  z-index: 50;
  flex-flow: row;
  justify-content: space-between;
  margin: 80px 0;
  & > p {
    cursor: pointer;
    z-index: 50;
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
  margin: 0;
  transition: 0.3s ease all;
  &:hover{
    transition: 0.3s ease all;
    z-index: 50;
    background: var(--colorSecondary);
    color: var(--colorPrimary);
  }
`
