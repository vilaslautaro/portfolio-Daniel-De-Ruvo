import styled from "styled-components";

export const SectionForm = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  & > div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const BoxInput = styled.div`
display: flex;
flex-flow: column wrap;
& > input {
  padding: 20px 20px;
  margin: 10px 20px;
  border-radius: 5px;
  max-width: 250px;
  color: var(--colorPrimary);
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: #3a5856;
  ::placeholder {
    color: var(--colorPrimary);
  }
  &:focus{
    background-color: #3a5856;
  }
  &.input__error{
    border: 1px solid red;
    outline: 1px solid red;
  }
`;

export const Textarea = styled.textarea`
  padding: 20px 20px;
  margin: 10px;
  color: var(--colorPrimary);
  font-size: 1rem;
  border: none;
  width: 495px;
  min-height: 150px;
  max-height: 350px;
  border-radius: 5px;
  outline: none;
  background-color: #3a5856;
  color: var(--colorPrimary);
  ::placeholder {
    color: var(--colorPrimary);
  }
  &:focus {
    background-color: #3a5856;
  }
  &.input__error{
    border: 1px solid red;
    outline: 1px solid red;
  }
`;

export const Btn = styled.button`
    margin-top: 40px;
    margin-left: 20px;
    border-radius: 20px;
    background-color: transparent;
    color: #02C3BD;
    border: 2px solid #02C3BD;
    padding: 12px 15px;
    font-size: 1rem;
    align-self: flex-start;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s ease all;
    &:hover {
        transition: 0.3s ease all;
        background-color: #02C3BD;
        color: var(--ColorPrimary);
        filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.3));
    `;

export const ErrorMessage = styled.div`
  display: block;
  color: red;
  font-size: 13px;
  margin: 3px 0 0 20px;
  text-align: start;
`;
