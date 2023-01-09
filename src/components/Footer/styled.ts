import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 100%;
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
    height: 30rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

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

export const AboutContainer = styled.div`
    width: 20rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    border: 1px solid green;

    @media(max-width: 520px) {
        & + div {
            margin-bottom: 2rem;
        }
    }
`

export const InfoAboutContainer = styled.div`
    display: flex;
    gap: .75rem;

    
`