import { FooterStyle, FooterLinks } from "./Footer.styles";

export const Footer = () => {
    
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <FooterStyle>
            <img 
            alt="Logo Daniel" 
            aria-label="Logo Daniel" 
            src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653404223/portfolio%20daniel/LOGO_DR_six97a.svg"
            width="200px"
            height="180px"
            onClick={() => goToTop()}
            />
            <FooterLinks>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <img
                    alt="Twitter"
                    src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653408217/portfolio%20daniel/logot_wbqrk8.svg"
                    width="65px"
                    height="60px"
                    />
                </a>
                <a href="https://github.com/deruvodaniel" target="_blank" rel="noreferrer">
                    <img
                    alt="GitHub"
                    src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653408217/portfolio%20daniel/logog_udsccl.svg"
                    width="65px"
                    height="60px"
                    />
                </a>
                <a href="https://www.linkedin.com/in/deruvodaniel/" target="_blank" rel="noreferrer">
                    <img
                    alt="Linkedin"
                    src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653403777/portfolio%20daniel/logoin_brxiyb.svg"
                    width="65px"
                    height="60px"
                    />
                </a>
            </FooterLinks>
            <h3>2022 All rights reserved</h3>
        </FooterStyle>
    )
}