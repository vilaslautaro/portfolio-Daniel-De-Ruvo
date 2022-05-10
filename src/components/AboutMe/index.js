import { TitleSection } from "styles";
import { AboutMeBoxImg, AboutMeBoxLinks, AboutMeBoxText, SectionAboutMe } from "./aboutMe.styles";

export const AboutMe = ({ refAboutMe }) => {

  return (
      <SectionAboutMe ref={refAboutMe}>
        <AboutMeBoxImg>
          <div>
            <img alt="imagen de daniel" src="#"></img>
          </div>
        </AboutMeBoxImg>
        <AboutMeBoxText>
          <TitleSection>About me</TitleSection>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium voluptatem repudiandae, cupiditate minima ullam sed
            exercitationem quis, perspiciatis facilis impedit ipsam quam odio
            repellat, praesentium eum numquam eius qui hic!
          </p>
          <AboutMeBoxLinks>
            <a href="twitter.com">
              Twitter
            </a>
            <a href="twitter.com">
              GitHub
            </a>
            <a href="twitter.com">
              Linkedin
            </a>
          </AboutMeBoxLinks>
        </AboutMeBoxText>
      </SectionAboutMe>
  );
};
