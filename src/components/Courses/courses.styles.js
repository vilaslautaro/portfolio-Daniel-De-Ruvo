import styled from "styled-components";

export const SectionCourses = styled.section`
  margin-top: 80px;
  padding-left: 100px;
  padding-top: 50px;
  z-index: 50;
`;

export const CoursesTitle = styled.h2`
  color: var(--colorSecondary);
  font-weigth: 600;
  z-index: 60;
  font-size: 4rem;
  margin: 0 0 75px;
`;

export const ContainerCourses = styled.ul`
  margin-top: 50px;
  display: grid;
  z-index: 50;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  color: var(--colorPrimary);
  gap: 50px;
  row-gap: 100px;
  list-style: none;
`;

export const ContainerCourse = styled.li`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  z-index: 50;
`;

export const ContainerCourseName = styled.div`
  display: flex;
  flex-flow: row nowrap;
  z-index: 50;
  align-items: center;
  & > div {
    z-index: 50;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 8px 10px 0;
    border-radius: 50%;
    background: var(--colorSecondary);
    color: var(--colorSecondary);
  }
`;

export const CourseName = styled.p`
  margin: 0 0 15px;
  z-index: 50;
  font-size: 2.1rem;
  font-weight: 600;
`;

export const CourseText = styled.p`
  margin: 0;
  max-width: 85%;
  z-index: 50;
  font-size: 1.3rem;
`;

export const CourseAcademy = styled.p`
  margin: 0;
  z-index: 50;
  font-size: 1.3rem;
`;
