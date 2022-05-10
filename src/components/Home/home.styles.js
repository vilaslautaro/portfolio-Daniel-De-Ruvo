import styled from "styled-components";

export const ContainerHome = styled.div`
  margin: 50px 0;
  padding-top: 30px;
`;

export const TextHome = styled.p`
  color: var(--colorSecondary);
  font-size: 1.3rem;
  margin: 0;
`;

export const TitleHome = styled.h1`
  color: var(--colorSecondary);
  font-size: 3.2rem;
  margin: 20px 0 30px;
`;

export const DescriptionHome = styled.p`
  color: var(--colorPrimary);
  max-width: 600px;
  margin: 0;
`;

export const ButtonHome = styled.button`
    margin-top: 40px;
    background: transparent;
    border: 1px solid var(--colorPrimary);
    color: var(--colorPrimary);
    transition: 0.3s ease all;
    padding: 5px 15px;
    cursor: pointer;
    border-radius: 20px;
    font-size: 0.9rem;
    &:hover{
        transition: 0.3s ease all;
        color: var(--colorSecondary);
        border: 1px solid var(--colorSecondary);
    }
`;
