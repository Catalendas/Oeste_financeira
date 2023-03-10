import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: ${({ theme }) => theme.colors["base-blue-black"]};
    color: ${({ theme }) => theme.colors["base-white"]};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const FooterContent = styled.div`
    margin-top: 5rem;

    width: 100%;
    

    img {
        height: 5rem;
        width: 5rem;
    }

    @media(max-width: 520px) {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export const FooterLinks = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 4rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid;

        @media(max-width: 520px) {
            display: flex;
            flex-direction: column;
            padding: 2rem;

            
        }
`

export const ContactComponent = styled.a`
    padding: 1rem;

    border: 1px solid;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: .75rem;
    flex-direction: column;
    transition: .4s;
    
    div {
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }

    &:hover {
        border-color: #5B5E62;
        color: #5B5E62;
    }

    @media(max-width: 520px) {
        align-items: flex-start;
    }
`

export const SocialLinks = styled.div`

        display: flex;
        flex-direction: column;
        gap: 1rem;

    div {
        a {
            transition: .2s;

            &:hover {
                color: #5B5E62;
            }
        }
    }
`

export const BussinesInformation = styled.div`
    margin-top: 2rem;
    margin-bottom: 3rem;
    
    > div {
        display: flex;
        align-items: center;

        div {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    @media(max-width: 520px) {
        font-size: .8rem;
    }
`

export const FooterDirectSecuryt = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    a {
        border-bottom: 1px solid;
    }

    @media(max-width: 520px) {
        flex-direction:column ;
        gap: 3em;
    }
`