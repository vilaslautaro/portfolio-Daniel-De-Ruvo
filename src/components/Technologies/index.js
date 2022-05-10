import { ContainerTechnologies, SectionTechnologies } from "./technologies.styles";

export const Technologies = () => {
  const technologies = [
    {id: 1, img:"html5", text:"html5"},
    {id: 2, img:"css3", text:"css3"},
    {id: 3, img:"js", text:"js"},
    {id: 4, img:"sass", text:"sass"},
    {id: 5, img:"vuejs", text:"vuejs"},
    {id: 6, img:"bootstrap", text:"bootstrap"},
    {id: 7, img:"docker", text:"docker"},
    {id: 8, img:"nodejs", text:"nodejs"},
  ];

  return (
    <SectionTechnologies>
      <h2>Technologies</h2>
      <ContainerTechnologies>
        {technologies.map(({id, img, text}) => {
          return <p key={id} title={text}>{img}</p>;
        })}
      </ContainerTechnologies>
    </SectionTechnologies>
  );
};
