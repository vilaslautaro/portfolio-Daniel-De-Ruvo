import styled from "styled-components";

const TYPES = {
  true: "green",
  false: "red",
};

export const Modal = styled.div`
  z-index: 31;
  position: fixed;
  top: 100px;
  right: 0;
  background: ${(props) => TYPES[props.type]};
  border-radius: 20px 0 0 20px;
`;

export const ModalText = styled.p`
  color: var(--textWhite);
  font-weight: 500;
  margin: 0;
  font-size: 23px;
  padding: 15px 50px;
`;