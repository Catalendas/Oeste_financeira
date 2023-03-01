import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media(max-width: 520px) {
        padding: 0 1rem;
    }
`

export const AboutTitleDescription = styled.div`
    width: 100%;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
        font-weight: 400;
        color: ${({ theme }) => theme.colors["base-grey"]};
        font-size: 3rem;
    }

    @media(max-width: 520px) {
        
        padding: 1rem;
    }
`

export const AboutOptions = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;
    grid-row-gap: 1rem;
    margin-bottom: 3rem;

    div {

        display: flex;
        flex-direction: column;
        gap: 1rem;
        

        strong {
            font-size: 1.5rem;
            font-weight: 400;
            color: ${({ theme }) => theme.colors["base-grey"]};
        }

        &::after {
            content: "";
            height: 7px;
            margin-top: .75rem;
            border-radius: 3px;
            width: 2rem;
            background-color: ${({ theme }) => theme.colors["base-blue"]};
            display: block;
        }
    }

    @media(max-width: 520px) {
        
        padding: 1rem;
        grid-template-columns: repeat(1, 1fr);
    }
`