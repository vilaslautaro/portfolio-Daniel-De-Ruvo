import { useRefs } from "context/refsContext";
import {
  ButtonHome,
  ContainerHome,
  DescriptionHome,
  TextHome,
  TitleHome,
} from "./home.styles";
import { motion } from "framer-motion";

export const Home = () => {
  const { refHome, refContact } = useRefs();

  const scrollToSection = (section) => {
    if (section !== null && section.current !== null) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.div
        style={{ zIndex: 50 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", duration: 3 }}
        viewport={{ once: true }}
      >
        <ContainerHome ref={refHome}>
          <TextHome>Hi, my name is</TextHome>
          <TitleHome>DANIEL DE RUVO</TitleHome>
          <DescriptionHome>
            I'm autodidact Frontend Developer, technology lover and Graphic
            Designer.  <br></br>I'm thoughtful, enterprising and charismatic person.I
            would always get on with my colleagues, and take my challenges in a
            very enthusiastic way and most important of all: desiring to learn!
          </DescriptionHome>
          <ButtonHome onClick={() => scrollToSection(refContact)}>
            GET STARTED
          </ButtonHome>
        </ContainerHome>
      </motion.div>
    </>
  );
};
