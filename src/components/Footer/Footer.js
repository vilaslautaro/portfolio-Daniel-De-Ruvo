import { FooterStyle, FooterLinks } from "./Footer.styles";
import useDateYear from "hooks/useDateYear";
import { useRefs } from "context/refsContext";
import useWidth from "hooks/useWidth";

export const Footer = () => {
  const { year } = useDateYear();

  const { refHome } = useRefs();

  const goToTop = (section) => {
    if (section !== null && section.current !== null) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const {width} = useWidth()

  return (
    <>
      <FooterStyle>
        <img
          alt="Logo Daniel"
          title="Home"
          aria-label="Logo Daniel"
          src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653404223/portfolio%20daniel/LOGO_DR_six97a.svg"
          width={ width > 767 ? "200px": "100px"}
          height="180px"
          onClick={() => goToTop(refHome)}
        />
        <FooterLinks>
          <a
            className="twitter"
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Twitter"
              src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653408217/portfolio%20daniel/logot_wbqrk8.svg"
              width={ width > 767 ? "65px": "50px"}
              height={ width > 767 ? "60px": "45px"}
            />
          </a>
          <a
            href="https://github.com/deruvodaniel"
            target="_blank"
            title="Github"
            rel="noreferrer"
          >
            <img
              alt="GitHub"
              src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653408217/portfolio%20daniel/logog_udsccl.svg"
              width={ width > 767 ? "65px": "50px"}
              height={ width > 767 ? "60px": "45px"}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/deruvodaniel/"
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
          >
            <img
              alt="Linkedin"
              src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653403777/portfolio%20daniel/logoin_brxiyb.svg"
              width={ width > 767 ? "65px": "50px"}
              height={ width > 767 ? "60px": "45px"}
            />
          </a>
        </FooterLinks>
        <h3>{year} All rights reserved</h3>
      </FooterStyle>
    </>
  );
};
