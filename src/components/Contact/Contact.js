import MyForm from "components/Form/Form";
import {
  SectionContact,
  ContactTitle,
  ContactText,
  ContactInfo,
  ContactLinks,
  BoxContactInfo,
} from "./Contact.styles";

export const Contact = ({ refContact }) => {
  return (
    <>
      <ContactTitle>CONTACT</ContactTitle>
      <SectionContact ref={refContact}>
        <BoxContactInfo>
          <ContactText>Do you have a project in mind? Let's talk!</ContactText>
          <ContactInfo>
            <p>XXX@gmail.com</p>
            <p>+54 9 XX XXX XXX</p>
          </ContactInfo>
          <ContactLinks>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
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
    </>
  );
};
