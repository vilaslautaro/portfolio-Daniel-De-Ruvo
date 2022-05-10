import {
  Container,
  ContainerBoxImg,
  ContainerImg,
  ContainerProjects,
  ContainerTexts,
  ProjectButton,
  ProjectDescription,
  ProjectSubtitle,
  ProjectTitle,
  SectionProjects,
} from "./projects.styles";

export const Projects = ({ refProjects }) => {
  const projects = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1651164685/sample.jpg",
      title: "Lorem ipsum is simply dummy",
      subtitle: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
      link: "https://www.example.com",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1651164685/sample.jpg",
      title: "Lorem ipsum is simply dummy",
      subtitle: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
      link: "https://www.example.com",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1651164685/sample.jpg",
      title: "Lorem ipsum is simply dummy",
      subtitle: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
      link: "https://www.example.com",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1651164685/sample.jpg",
      title: "Lorem ipsum is simply dummy",
      subtitle: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
      link: "https://www.example.com",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1651164685/sample.jpg",
      title: "Lorem ipsum is simply dummy",
      subtitle: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
      link: "https://www.example.com",
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1651164685/sample.jpg",
      title: "Lorem ipsum is simply dummy",
      subtitle: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
      link: "https://www.example.com",
    },
  ];

  return (
    <SectionProjects ref={refProjects}>
      <h2>PROJECTS</h2>
      <ContainerProjects>
        {projects.map(({ id, img, title, subtitle, text, link }) => {
          return (
            <Container key={id}>
              <ContainerBoxImg >
                <ContainerImg>
                  <img src={img} alt={title} />
                </ContainerImg>
              </ContainerBoxImg>
              <ContainerTexts>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectSubtitle>{subtitle}</ProjectSubtitle>
                <ProjectDescription>{text}</ProjectDescription>
                <ProjectButton title={link}>PREVIEW</ProjectButton>
              </ContainerTexts>
            </Container>
          );
        })}
      </ContainerProjects>
    </SectionProjects>
  );
};
