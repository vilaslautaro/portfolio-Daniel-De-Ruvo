import { ContainerImg, SectionProjects } from "./projects.styles";

export const Projects = ({ refProjects }) => {
  const projects = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1651164685/sample.jpg",
      title: "Lorem ipsum is simpy dummy",
      subtitle: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
      link: "https://www.example.com",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1651164685/sample.jpg",
      title: "Lorem ipsum is simpy dummy",
      subtitle: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
      link: "https://www.example.com",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1651164685/sample.jpg",
      title: "Lorem ipsum is simpy dummy",
      subtitle: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quod officia molestias voluptate provident ex veniam atque eligendi tempora, ullam aperiam corporis? Asperiores doloremque molestiae ipsum sed eligendi inventore.",
      link: "https://www.example.com",
    },
  ];

  return (
    <SectionProjects ref={refProjects}>
      <h2>PROJECTS</h2>
      <div>
        {projects.map(({ id, img, title, subtitle, text, link }) => {
          return (
            <div key={id}>
              <ContainerImg>
                <img src={img} alt={title} />
                <div></div>
              </ContainerImg>
              <div>
                <p>{title}</p>
                <p>{subtitle}</p>
                <p>{text}</p>
                <button>{link}</button>
              </div>
            </div>
          );
        })}
      </div>
    </SectionProjects>
  );
};
