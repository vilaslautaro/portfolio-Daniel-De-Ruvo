import styled from "styled-components";

export const SectionTechnologies = styled.section`
    margin: 50px 0;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    color: var(--colorPrimary); 
    & > h2{
        font-size: 5rem;
        margin-bottom: 100px;
    }
`

export const ContainerTechnologies = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, 200px));
    justify-items: center;
    justify-content: center;
    gap: 50px;
`

export const ImgTechnologies = styled.img`
    cursor: pointer;
    width: 150px;
    height: 150px;
    &:hover{
        filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.5));
    }
`
