import {
  ContainerCourse,
  ContainerCourseName,
  ContainerCourses,
  CourseAcademy,
  CourseName,
  CoursesTitle,
  CourseText,
  SectionCourses,
} from "./courses.styles";
import { motion } from "framer-motion";
import useWidth from "hooks/useWidth";
import { courses } from "arrays/arrayCourses";

export const Courses = () => {
  const {width} = useWidth()
  const initial = width > 700 ? -500 : 0 
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: initial }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionCourses>
          <CoursesTitle>Courses</CoursesTitle>
          <ContainerCourses>
            {courses.map(({ id, name, text, academy }) => {
              return (
                <ContainerCourse key={id}>
                  <ContainerCourseName>
                    <div></div>
                    <CourseName>{name}</CourseName>
                  </ContainerCourseName>
                  <CourseText>{text}</CourseText>
                  <CourseAcademy>{academy}</CourseAcademy>
                </ContainerCourse>
              );
            })}
          </ContainerCourses>
        </SectionCourses>
      </motion.div>
    </>
  );
};
