import {
  Container,
  ContainerBoxImg,
  ContainerButtons,
  ContainerImg,
  ContainerProjects,
  ContainerTexts,
  Img,
  ProjectButton,
  ProjectDescription,
  ProjectSubtitle,
  ProjectTitle,
  SectionProjects,
} from "./projects.styles";
import useWidth from "hooks/useWidth";
import { useRefs } from "context/refsContext";

const projects = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1654297225/portfolio%20daniel/web_negra_trfagx.jpg",
    title: "Lorem ipsum is simply dummy",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
    link: "https://www.example.com",
    github: "https://www.github.com",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1654297225/portfolio%20daniel/web_negra_trfagx.jpg",
    title: "Lorem ipsum is simply dummy",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
    link: "https://www.example.com",
    github: "https://www.github.com",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1654297225/portfolio%20daniel/web_negra_trfagx.jpg",
    title: "Lorem ipsum is simply dummy",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
    link: "https://www.example.com",
    github: "https://www.github.com",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1654297225/portfolio%20daniel/web_negra_trfagx.jpg",
    title: "Lorem ipsum is simply dummy",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
    link: "https://www.example.com",
    github: "https://www.github.com",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1654297225/portfolio%20daniel/web_negra_trfagx.jpg",
    title: "Lorem ipsum is simply dummy",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
    link: "https://www.example.com",
    github: "https://www.github.com",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1654297225/portfolio%20daniel/web_negra_trfagx.jpg",
    title: "Lorem ipsum is simply dummy",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
    link: "https://www.example.com",
    github: "",
    disabled: true,
  },
];

export const Projects = () => {
  const { width } = useWidth();
  const { refProjects } = useRefs();

  return (
    <>
      <SectionProjects ref={refProjects}>
        <h2>PROJECTS</h2>
        <ContainerProjects>
          {projects.map(
            ({ id, img, title, subtitle, text, link, github, disabled = false }) => {
              return (
                <Container
                  key={id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.7, duration: 1.5 }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  {width > 1138 ? (
                    <ContainerBoxImg>
                      <ContainerImg>
                        <img src={img} alt={title} />
                      </ContainerImg>
                    </ContainerBoxImg>
                  ) : (
                    <Img src={img} alt={title} />
                  )}
                  <ContainerTexts>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectSubtitle>{subtitle}</ProjectSubtitle>
                    <ProjectDescription>{text}</ProjectDescription>
                    <ContainerButtons>
                      <ProjectButton title={link} href={link} target="_blank">
                        PREVIEW
                      </ProjectButton>
                      <ProjectButton
                        title={github}
                        href={github}
                        disabled={disabled}
                        target="_blank"
                      >
                        Github
                      </ProjectButton>
                    </ContainerButtons>
                  </ContainerTexts>
                </Container>
              );
            }
          )}
        </ContainerProjects>
      </SectionProjects>
    </>
  );
};
