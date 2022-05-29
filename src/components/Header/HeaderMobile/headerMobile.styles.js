import styled from "styled-components";

export const Main = styled.header`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid var(--colorSecondary);
  right: 0;
  background: var(--background);
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  & > img {
    color: var(--colorPrimary);
    padding: 0 40px;
    cursor: pointer;
  }
  & > nav {
    position: absolute;
    top: 71px;
    right: 0;
    left: 0;
    z-index: 20;
    background: var(--background);
  }
`;

export const ListLinks = styled.ul`
  margin: 30px 0 60vh;
  display: flex;
  flex-flow: column wrap;
  list-style: none;
  text-align: end;
  padding: 0;
`;

export const Links = styled.li`
  cursor: pointer;
  font-size: 2rem;
  margin-right: 20px;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: var(--colorSecondary);
  border-radius: 20px;
  padding: 3px 25px;
  transition: 0.3s ease all;
  &:hover {
    transition: 0.3s ease all;
    color: var(--colorSecondary);
  }
`;
