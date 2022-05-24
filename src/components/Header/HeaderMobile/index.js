import { useRef, useState } from "react";
import { Links, ListLinks, Main } from "./headerMobile.styles";

export const HeaderMobile = ({ refs }) => {
  const { refAboutMe, refProjects, refContact, refHome, refTechnologies } = refs;
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = useRef(null);
  const iconMenu =
    "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652379488/portfolio%20daniel/menu_uw4rjt.png";
  const iconClose =
    "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652379624/portfolio%20daniel/cerrar_zhp6o1.png";

  function handleMenu() {
    if (menu.current.classList.contains("open") === false) {
      menu.current.classList.add("open");
      setMenuOpen(true);
    } else {
      menu.current.classList.remove("open");
      setMenuOpen(false);
    }
  }

  const scrollToSection = (section) => {
    if (section !== null && section.current !== null) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    menu.current.classList.remove("open");
    setMenuOpen(false);
  };

  return (
    <Main ref={menu}>
      <img
        src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653404223/portfolio%20daniel/LOGO_DR_six97a.svg"
        width="65px"
        height="65px"
        aria-label="logo Daniel"
      />
      <img
        alt="menu"
        aria-label="menu"
        onClick={handleMenu}
        width="35px"
        height="35px"
        src={menuOpen ? iconClose : iconMenu}
      />
      {menuOpen && (
        <nav role="main" aria-label="main">
          <ListLinks>
            <Links onClick={() => scrollToSection(refHome)}>Home</Links>
            <Links onClick={() => scrollToSection(refAboutMe)}>About Me</Links>
            <Links onClick={() => scrollToSection(refTechnologies)}>Technologies</Links>
            <Links onClick={() => scrollToSection(refProjects)}>Projects</Links>
            <Links onClick={() => scrollToSection(refContact)}>Contact</Links>
          </ListLinks>
        </nav>
      )}
    </Main>
  );
};
