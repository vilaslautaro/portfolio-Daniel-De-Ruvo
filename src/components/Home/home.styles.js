import styled from "styled-components";

export const ContainerHome = styled.div`
  margin: 0px 0 30px;
  padding-top: 180px;
`;

export const TextHome = styled.p`
  color: var(--colorSecondary);
  font-size: 1.5rem;
  margin: 0;
`;

export const TitleHome = styled.h1`
  color: var(--colorSecondary);
  font-size: 5.2rem;
  margin: 20px 0 30px;
`;

export const DescriptionHome = styled.p`
  color: var(--colorPrimary);
  max-width: 600px;
  font-size: 1.3rem;
  margin: 0;
`;

export const ButtonHome = styled.button`
    margin-top: 40px;
    background: transparent;
    border: 1px solid var(--colorPrimary);
    color: var(--colorPrimary);
    transition: 0.3s ease all;
    padding: 10px 15px 8px;
    cursor: pointer;
    border-radius: 20px;
    font-size: 1.2rem;
    &:hover{
        transition: 0.3s ease all;
        color: var(--colorSecondary);
        border: 1px solid var(--colorSecondary);
    }
`;
