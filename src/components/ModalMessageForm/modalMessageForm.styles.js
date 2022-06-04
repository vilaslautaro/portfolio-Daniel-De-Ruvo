import styled from "styled-components";

const TYPES = {
  "true": "var(--colorSecondary)",
  "false": "red",
};

export const Modal = styled.div`
  z-index: 91;
  position: fixed;
  top: 150px;
  right: 0;
  background: ${(props) => TYPES[props.type]};
  border-radius: 20px 0 0 20px;
`;

export const ModalText = styled.p`
  color: var(--colorPrimary);
  font-weight: 500;
  margin: 0;
  font-size: 20px;
  padding: 15px 50px;
`;