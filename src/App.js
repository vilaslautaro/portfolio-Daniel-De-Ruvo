import { useRef } from "react";
import { ContainerApp, ContainerSections } from "app.styles";
import { Header } from "components/Header";
import { AboutMe } from "components/AboutMe";
import { Projects } from "components/Projects";
import { Home } from "components/Home/Index";
import { Courses } from "components/Courses";
import { Technologies } from "components/Technologies";

const App = () => {
  const refAboutMe = useRef(null);
  const refProjects = useRef(null);
  const refContact = useRef(null);
  const refHome = useRef(null);

  return (
    <ContainerApp>
      <ContainerSections>
        <Header refs={{ refAboutMe, refProjects, refContact, refHome }} />
        <Home refHome={refHome} />
        <AboutMe refAboutMe={refAboutMe} />
        <Courses />
        <Technologies />
        <Projects refProjects={refProjects} />
      </ContainerSections>
    </ContainerApp>
  );
};

export default App;
