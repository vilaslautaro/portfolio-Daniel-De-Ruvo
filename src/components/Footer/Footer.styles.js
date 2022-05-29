import styled from "styled-components";

export const FooterStyle = styled.footer`
    margin-top: 150px;
    display: flex;
    flex-flow: column;
    align-items: center;
    & > img {
        cursor: pointer;
        margin-bottom: 50px;
        &:hover {
            transition: 0.3s ease all;
            filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
        }
    } 
    & > h3 {
        color: #155F60
    }
`;
    
export const FooterLinks = styled.div`
    & > a {
        text-decoration: none;
        margin-right: 20px;
        font-size: 1.5rem;
        color: #fff;
        transition: 0.3s ease all;
        &:hover {
            transition: 0.3s ease all;
            filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
        }
    }
`;