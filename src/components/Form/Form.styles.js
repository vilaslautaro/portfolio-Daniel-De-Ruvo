import styled from "styled-components";

export const SectionForm = styled.section`
    margin-top: 100px;
    align-items: center;
    display: flex;
    flex-flow: column;
    `;

export const Form = styled.form`
    display: flex; 
    flex-flow: row;   
    margin-left: 150px;
    & > input {
        padding: 10px 70px 30px 5px;
        margin: 10px;
        background-color: #3A5856;
        ::placeholder {
            color: var(--colorPrimary);
        }
    }
    `;

export const Textarea = styled.textarea`
    padding: 10px 323px 120px 10px;
    margin-left: 150px;
    margin-top: 10px;
    background-color: #3A5856;
    color: var(--colorPrimary);
    ::placeholder {
        color: var(--colorPrimary);
    }
    `;

export const Btn = styled.button`
    margin-top: 20px;
    border-radius: 50px;
    background-color: transparent;
    color: #02C3BD;
    border: 2px solid #02C3BD;
    padding: 8px 15px;
    font-size: 0.8rem;
    align-self: flex-start;
    margin-left: 160px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        background-color: var(--colorSecondary);
        color: var(--background);
        filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
    `;
