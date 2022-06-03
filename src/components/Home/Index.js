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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", duration: 3 }}
      viewport={{ once: true }}
    >
      <ContainerHome ref={refHome}>
        <TextHome>Hi, my name is</TextHome>
        <TitleHome>DANIEL DE RUVO</TitleHome>
        <DescriptionHome>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut
          placeat? Error enim necessitatibus hic sequi ratione doloribus,
          assumenda molestiae veniam incidunt dolor dolore quo nulla a tempora
          beatae asperiores?
        </DescriptionHome>
        <ButtonHome onClick={() => scrollToSection(refContact)}>
          GET STARTED
        </ButtonHome>
      </ContainerHome>
    </motion.div>
  );
};
