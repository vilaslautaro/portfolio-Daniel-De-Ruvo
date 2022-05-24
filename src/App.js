import { useRef } from "react";
import { ContainerApp, ContainerSections } from "app.styles";
import { Header } from "components/Header";
import { AboutMe } from "components/AboutMe";
import { Projects } from "components/Projects";
import { Home } from "components/Home/Index";
import { Courses } from "components/Courses";
import { Technologies } from "components/Technologies";

const App = () => {
  const refHome = useRef(null);
  const refAboutMe = useRef(null);
  const refTechnologies = useRef(null);
  const refProjects = useRef(null);
  const refContact = useRef(null);

  return (
    <ContainerApp>
      <ContainerSections>
        <Header refs={{ refAboutMe, refProjects, refContact, refHome, refTechnologies }} />
        <Home refHome={refHome} refContact={refContact} />
        <AboutMe refAboutMe={refAboutMe} />
        <Courses />
        <Technologies refTechnologies={refTechnologies} />
        <Projects refProjects={refProjects} />
      </ContainerSections>
    </ContainerApp>
  );
};

export default App;
