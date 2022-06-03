import styled from "styled-components";
//import { mediaQueries } from "styles";

export const ContactTitle = styled.h2`
  margin-top: 100px;
  padding-top: 150px;
  color: var(--colorPrimary);
  font-size: 3.5rem;
`;

export const SectionContact = styled.section`
  margin: 0 0 100px;
  color: var(--colorPrimary);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around; 
`;

export const BoxContactInfo = styled.div`
  max-width: 500px;
`;

export const ContactText = styled.h3`
  color: var(--colorSecondary);
  font-size: 2rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin: 80px 0;
  & > p {
    cursor: pointer;
  }
`;

export const ContactLinks = styled.div`
  text-align: center;
  & > a {
    margin-right: 20px;
    & > img {
      transition: 0.3s ease all;
      &:hover {
        transition: 0.3s ease all;
        filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
      }
    }
  }
`;

export const Email = styled.p`
  border-radius: 15px;
  border: 1px solid var(--colorSecondary);
  padding: 15px 30px;
  color: var(--colorSecondary);
  margin: 0;
  transition: 0.3s ease all;
  &:hover{
    transition: 0.3s ease all;
    background: var(--colorSecondary);
    color: var(--colorPrimary);
  }
`
