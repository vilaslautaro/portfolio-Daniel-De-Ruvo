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

const courses = [
  {
    id: 1,
    name: "Vuejs 2 - the complete guide",
    text: "One the most popular Javascript Framework (Maximilian Schawarzmuller)",
    academy: "Udemy",
  },
  {
    id: 2,
    name: "The complete Javascript course",
    text: "Proyects, challenges, Javascript ES6+, OOP, AJAX, Webpack (Jonas Schmedtmann)",
    academy: "Udemy",
  },
  {
    id: 3,
    name: "Frontend Vue.js Carrer",
    text: "HTML, CSS, SASS, SEO, Javascript, Vue.js",
    academy: "Coderhouse",
  },
  {
    id: 4,
    name: "Desarrollo web",
    text: "HTML5, CSS3, JavaScript, jQuery, AJAX, PHP, MySQL (Juan de la Torre)",
    academy: "Udemy",
  },
  {
    id: 5,
    name: "Learn Scrum",
    text: "Linkedin",
    academy: "Scrum Basics",
  },
  {
    id: 6,
    name: "Git Started with GitHub",
    text: "Save project changes into source control using Git, Create repositories on GitHub. Pull request, and branchs use. (Jason Tylor)",
    academy: "Udemy",
  },
];

export const Courses = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 500 }}
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
