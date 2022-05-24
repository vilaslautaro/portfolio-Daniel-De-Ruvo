import useWidth from "hooks/useWidth";
import { ListLinks, Main, Links } from "./header.styles";
import { HeaderMobile } from "./HeaderMobile";

export const Header = ({refs}) => {
  const {refAboutMe, refProjects, refContact, refHome, refTechnologies} = refs
  const {width} = useWidth()


  const scrollToSection = (section) => {
    if(section !== null && section.current !== null){
        section.current.scrollIntoView({ behavior: 'smooth', block: 'start' })   
    }
  }


  if(width < 1024) return <HeaderMobile refs={refs}/>
    
  return (
        <Main>
            <img 
            alt="Logo Daniel" 
            aria-label="Logo Daniel" 
            src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653404223/portfolio%20daniel/LOGO_DR_six97a.svg"
            width="120px"
            height="120px"
            onClick={() => scrollToSection(refHome)}
            />
            <nav role="main" aria-label="main">
                <ListLinks>
                    <Links onClick={() => scrollToSection(refHome)} role="link"  aria-label="link Home">Home</Links>
                    <Links onClick={() => scrollToSection(refAboutMe)} role="link"  aria-label="link About me">About Me</Links>
                    <Links onClick={() => scrollToSection(refTechnologies)} role="link"  aria-label="link About me">Technologies</Links>
                    <Links onClick={() => scrollToSection(refProjects)} role="link" aria-label="link projects">Projects</Links>
                    <Links onClick={() => scrollToSection(refContact)} role="link" aria-label="link contact">Contact</Links>
                </ListLinks>
            </nav>
        </Main>
    )
}