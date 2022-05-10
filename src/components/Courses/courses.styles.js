import styled from "styled-components";

export const SectionCourses = styled.section`
    margin-top: 80px;
`

export const ContainerCourses = styled.ul`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    color: var(--colorPrimary);
    gap: 50px;
    list-style: none;
`

export const ContainerCourse = styled.li`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;   
`

export const ContainerCourseName = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    & > div{
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 8px 15px 0;
        border-radius: 50%;
        background: var(--colorSecondary);
        color: var(--colorSecondary); 
    }
`

export const CourseName = styled.p`
    margin: 0 0 15px;
    font-size: 1.5rem;
    font-weight: 600;

    
`

export const CourseText = styled.p`
    margin: 0;
    max-width: 85%;
    font-size: 1rem;
`

export const CourseAcademy = styled.p`
    margin: 0;
`