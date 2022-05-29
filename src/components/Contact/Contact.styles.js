import styled from "styled-components";
//import { mediaQueries } from "styles";

export const SectionContact = styled.section`
    margin: 100px 0;
    padding-top: 150px;
    color: var(--colorPrimary);
    display: flex;
    flex-flow: row wrap;
`;

export const ContactTitle = styled.h2`
    font-size: 3.5rem;
    margin-bottom: 80px;
`;

export const ContactText = styled.h3`
    color: var(--colorSecondary);
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin-bottom: 80px;
    margin-top: 80px;
`;

export const ContactLinks = styled.div`
    text-align: center;
    & > a {
        margin-right: 20px;
        &:hover {
        filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
    }
`;