import MyForm from "components/Contact/Form/Form";
import { useState, useEffect } from "react";
import { useRefs } from "context/refsContext";
import {
  SectionContact,
  ContactTitle,
  ContactText,
  ContactInfo,
  ContactLinks,
  BoxContactInfo,
  Email,
} from "./Contact.styles";
import { motion } from "framer-motion";

export const Contact = () => {
  const { refContact } = useRefs();
  const [copySuccess, setCopySuccess] = useState(false);

  const copyEmail = (e) => {
    e.target.focus();
    navigator.clipboard.writeText("danielderuvo@gmail.com");
    setCopySuccess("Email copied!");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCopySuccess(false);
    }, 2000);
    return () => clearInterval(interval);
  }, [setCopySuccess]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", duration: 2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <ContactTitle ref={refContact}>CONTACT</ContactTitle>
      <SectionContact>
        <BoxContactInfo>
          <ContactText>Do you have a project in mind? Let's talk!</ContactText>
          <ContactInfo>
            <Email
              onClick={copyEmail}
            >
              {copySuccess ? "Email copied" : "Copy email"}
            </Email>
            <p>+54 9 XX XXX XXX</p>
          </ContactInfo>
          <ContactLinks>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="twitter"
            >
              <img
                alt="Twitter"
                src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logotblanco_pjudi4.svg"
                width="45px"
                height="40px"
              />
            </a>
            <a
              href="https://github.com/deruvodaniel"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="GitHub"
                src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logogblanco_imqksz.svg"
                width="45px"
                height="40px"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/deruvodaniel/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Linkedin"
                src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logoinblanco_isyvzt.svg"
                width="45px"
                height="40px"
              />
            </a>
          </ContactLinks>
        </BoxContactInfo>
        <MyForm />
      </SectionContact>
    </motion.div>
  );
};
