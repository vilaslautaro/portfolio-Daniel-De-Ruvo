import styled from "styled-components";

export const SectionTechnologies = styled.section`
    margin: 50px 0 250px;
    padding-top: 100px;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    color: var(--colorPrimary); 
    & > h2{
        font-size: 4rem;
        z-index: 50;
        margin-bottom: 100px;
    }
`

export const ContainerTechnologies = styled.div`
    max-width: 1000px;
    z-index: 50;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
    justify-items: center;
    justify-content: center;
    gap: 50px;
`

export const ImgTechnologies = styled.img`
    cursor: pointer;
    width: 100px;
    z-index: 50;
    height: 100px;
    &:hover{
        z-index: 50;
        filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.7));
    }
`
