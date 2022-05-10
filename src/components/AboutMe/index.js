import {
  AboutMeBoxImg,
  AboutMeBoxLinks,
  AboutMeBoxText,
  AboutMeTitle,
  SectionAboutMe,
} from "./aboutMe.styles";

export const AboutMe = ({ refAboutMe }) => {
  return (
    <SectionAboutMe ref={refAboutMe}>
      <AboutMeBoxImg>
        <div></div>
        <img
          alt="imagen de daniel"
          src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652197836/portfolio%20daniel/Screenshot_1_1_zqekwl.png"
        />
      </AboutMeBoxImg>
      <AboutMeBoxText>
        <AboutMeTitle>About me</AboutMeTitle>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          voluptatem repudiandae, cupiditate minima ullam sed exercitationem
          quis, perspiciatis facilis impedit ipsam quam odio repellat,
          praesentium eum numquam eius qui hic!
        </p>
        <AboutMeBoxLinks>
          <a href="https://www.twitter.com">
            <img
              alt="Twitter"
              src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652199516/portfolio%20daniel/icon2_ng720i.png"
            />
          </a>
          <a href="https://www.github.com">
            <img
              alt="GitHub"
              src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652199516/portfolio%20daniel/icon1_wcwmju.png"
            />
          </a>
          <a href="https://www.linkedin.com">
            <img
              alt="Linkedin"
              src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652199516/portfolio%20daniel/icon3_igvtkx.png"
            />
          </a>
        </AboutMeBoxLinks>
      </AboutMeBoxText>
    </SectionAboutMe>
  );
};
