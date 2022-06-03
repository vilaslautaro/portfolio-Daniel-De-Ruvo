import { useRefs } from "context/refsContext";
import { motion } from "framer-motion";
import {
  AboutMeBoxImg,
  AboutMeBoxLinks,
  AboutMeBoxText,
  AboutMeTitle,
  SectionAboutMe,
} from "./aboutMe.styles";

export const AboutMe = () => {
  const { refAboutMe } = useRefs();

  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <SectionAboutMe ref={refAboutMe}>
        <AboutMeBoxImg>
          <div></div>
          <img
            alt="imagen de daniel"
            src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653405835/portfolio%20daniel/fotocv-min-removebg-preview_2_-modified_iwx6pr.png"
          />
        </AboutMeBoxImg>
        <AboutMeBoxText>
          <AboutMeTitle>About me</AboutMeTitle>
          <p>
            I'm autodidact Frontend Developer, technology lover and Graphic
            Designer. I'm thoughtful, enterprising and charismatic person. I
            would always get on with my colleagues, and take my challenges in a
            very enthusiastic way and most important of all: desiring to learn!
          </p>
          <AboutMeBoxLinks>
            <a
              className="twitter"
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Twitter"
                src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653408217/portfolio%20daniel/logot_wbqrk8.svg"
                width="55px"
                height="50px"
              />
            </a>
            <a
              href="https://github.com/deruvodaniel"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              <img
                alt="GitHub"
                src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653408217/portfolio%20daniel/logog_udsccl.svg"
                width="55px"
                height="50px"
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
                width="55px"
                height="50px"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/deruvodaniel/"
              target="_blank"
              rel="noreferrer"
              title="Resume"
            >CV
            </a>
          </AboutMeBoxLinks>
        </AboutMeBoxText>
      </SectionAboutMe>
    </motion.div>
  );
};
