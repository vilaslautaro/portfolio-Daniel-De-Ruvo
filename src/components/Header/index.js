import { ListLinks, Main, Links } from "./header.styles";

export const Header = ({refs}) => {
  const {refAboutMe, refProjects, refContact, refHome} = refs

  const scrollToSection = (section) => {
    if(section !== null && section.current !== null){
        section.current.scrollIntoView({ behavior: 'smooth', block: 'start' })   
    }
  }
    
  return (
        <Main>
            <img alt="Logo Daniel" aria-label="Logo Daniel"/>
            <nav role="main" aria-label="main">
                <ListLinks>
                    <Links onClick={() => scrollToSection(refHome)} role="link"  aria-label="link Home">Home</Links>
                    <Links onClick={() => scrollToSection(refAboutMe)} role="link"  aria-label="link About me">About Me</Links>
                    <Links onClick={() => scrollToSection(refProjects)} role="link" aria-label="link projects">Projects</Links>
                    <Links onClick={() => scrollToSection(refContact)} role="link" aria-label="link contact">Contact</Links>
                    <Links role="link" aria-label="link resume">Resume</Links>
                </ListLinks>
            </nav>
        </Main>
    )
}