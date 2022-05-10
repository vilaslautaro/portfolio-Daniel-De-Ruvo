import styled from "styled-components";

export const SectionTechnologies = styled.section`
    margin: 50px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    color: var(--colorPrimary); 
    & > h2{
        font-size: 3rem;
        margin-bottom: 50px;
    }
`

export const ContainerTechnologies = styled.div`
    max-width: 600px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(75px, 150px));
    justify-items: center;
    row-gap: 20px;
`
