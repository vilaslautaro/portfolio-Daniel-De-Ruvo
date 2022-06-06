import { useRefs } from "context/refsContext";
import {
  ContainerTechnologies,
  ImgTechnologies,
  SectionTechnologies,
} from "./technologies.styles";
import { motion } from "framer-motion";
import useWidth from "hooks/useWidth";
import { technologies } from "arrays/arrayTechnologies";

export const Technologies = () => {
  const { refTechnologies } = useRefs();
  const {width} = useWidth()
  const initial = width > 700 ? -500 : 0 

  return (
    <motion.div
      initial={{ opacity: 0, x: initial }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionTechnologies ref={refTechnologies}>
        <h2>Technologies</h2>
        <ContainerTechnologies>
          {technologies.map(({ id, img, text }) => {
            return (
              <ImgTechnologies
                key={id}
                src={img}
                title={text}
                height="150px"
                width="125px"
              />
            );
          })}
        </ContainerTechnologies>
      </SectionTechnologies>
    </motion.div>
  );
};
