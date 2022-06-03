import styled from "styled-components";

export const ContainerHome = styled.div`
  z-index: 90;
  margin: 0px 0 30px;
  padding-top: 180px;
  padding-left: 100px;
`;

export const TextHome = styled.p`
  color: var(--colorSecondary);
  font-size: 1.5rem;
   z-index: 90;
  margin: 0;
`;

export const TitleHome = styled.h1`
  color: var(--colorSecondary);
   z-index: 90;
  font-size: 4.5rem;
  margin: 20px 0 30px;
`;

export const DescriptionHome = styled.p`
  color: var(--colorPrimary);
  max-width: 600px;
  font-size: 1.3rem;
   z-index: 90;
  margin: 0;
`;

export const ButtonHome = styled.button`
  margin-top: 40px;
  background: transparent;
  z-index: 90;
  border: 1px solid var(--colorPrimary);
  color: var(--colorPrimary);
  transition: 0.3s ease all;
  padding: 10px 15px 8px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 1.2rem;
  &:hover {
    z-index: 90;
    transition: 0.3s ease all;
    color: var(--colorSecondary);
    border: 1px solid var(--colorSecondary);
  }
`;
