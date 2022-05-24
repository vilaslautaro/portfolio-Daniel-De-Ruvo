import { ButtonHome, ContainerHome, DescriptionHome, TextHome, TitleHome } from "./home.styles";

export const Home = ({ refHome, refContact }) => {

  const scrollToSection = (section) => {
    if(section !== null && section.current !== null){
        section.current.scrollIntoView({ behavior: 'smooth', block: 'start' })   
    }
  }

  return (
    <ContainerHome ref={refHome}>
        <TextHome>Hi, my name is</TextHome>
        <TitleHome>DANIEL DE RUVO</TitleHome>
        <DescriptionHome>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ut
          placeat? Error enim necessitatibus hic sequi ratione doloribus,
          assumenda molestiae veniam incidunt dolor dolore quo nulla a tempora
          beatae asperiores?
        </DescriptionHome>
        <ButtonHome onClick={() => scrollToSection(refContact)}>GET STARTED</ButtonHome>
    </ContainerHome>
  );
};
