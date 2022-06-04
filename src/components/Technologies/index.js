import { useRefs } from "context/refsContext";
import {
  ContainerTechnologies,
  ImgTechnologies,
  SectionTechnologies,
} from "./technologies.styles";
import { motion } from "framer-motion";
import useWidth from "hooks/useWidth";

const technologies = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652197835/portfolio%20daniel/Vector-1_obwlvo.png",
    text: "html5",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652197835/portfolio%20daniel/Vector_r9q079.png",
    text: "CSS3",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652197835/portfolio%20daniel/Vector-3_gwkauk.png",
    text: "JAVASCRIPT",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652197835/portfolio%20daniel/Vector-2_faxixr.png",
    text: "SASS",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652197835/portfolio%20daniel/Vector-4_j80kk7.png",
    text: "VUEJS",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653403406/portfolio%20daniel/logoB_hiikom.svg",
    text: "BOOTSTRAP",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652197836/portfolio%20daniel/Vector-5_bgz8l6.png",
    text: "DOCKER",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652197836/portfolio%20daniel/Vector-6_yessvx.png",
    text: "NODEJS",
  },
];

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
