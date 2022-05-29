import MyForm from 'components/Form/Form';
import { SectionContact, ContactTitle, ContactText, ContactInfo, ContactLinks } from './Contact.styles';

export const Contact = ({ refContact }) => {

    return (

        <SectionContact ref={refContact}>
        <div>   
            <ContactTitle>CONTACT</ContactTitle>
            <ContactText>Do you have a project in mind? Let's talk!</ContactText>
            <ContactInfo>
                <p>XXX@gmail.com</p>
                <p>+54 9 XX XXX XXX</p>
            </ContactInfo> 
            <ContactLinks>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <img
                    alt="Twitter"
                    src="https://res.cloudinary.com/gicloud1433/image/upload/v1653814223/twt_d3mrkv.png"
                    width="45px"
                    height="40px"
                    />
                </a>
                <a href="https://github.com/deruvodaniel" target="_blank" rel="noreferrer">
                    <img
                    alt="GitHub"
                    src="https://res.cloudinary.com/gicloud1433/image/upload/v1653814223/ghb_rtqfqq.png"
                    width="45px"
                    height="40px"
                    />
                </a>
                <a href="https://www.linkedin.com/in/deruvodaniel/" target="_blank" rel="noreferrer">
                    <img
                    alt="Linkedin"
                    src="https://res.cloudinary.com/gicloud1433/image/upload/v1653814518/lkn_defkoe.png"
                    width="45px"
                    height="40px"
                    />
                </a>
            </ContactLinks>
        </div>
        <MyForm />
        </SectionContact>
        
        )

    }
