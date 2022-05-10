import styled from "styled-components";

export const Main = styled.header`
  display: flex;
  padding-top: 20px;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const ListLinks = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  color: #fff;
  padding: 0;
`;

export const Links = styled.li`
  cursor: pointer;
  font-size: 1.3rem;
  margin-right: 20px;
  color: var(--colorPrimary);
  border-radius: 20px;
  border: 2px solid transparent;
  padding: 3px 25px;
  transition: 0.3s ease all;
  &:hover{
    transition: 0.3s ease all;
    color: var(--colorSecondary);
    border: 2px solid var(--colorSecondary);
}
`;
