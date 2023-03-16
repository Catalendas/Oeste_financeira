import styled from "styled-components";
import Background from "../../../../assets/background.webp"

export const AboutForyouContainer = styled.div`
    background: url(${Background}) no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;



    display: flex;
    align-items: center;
    flex-direction: column;
    

    padding: 2rem 0;
    font-size: 1.3rem;

    > div {
        display: flex;
        gap: 2rem;
        align-items: center;
    }
    


    h2 {
        color: ${({ theme }) => theme.colors["base-white"]};
        font-size: 3rem;
        font-weight: 400;
        border-bottom: 1px solid white;
        padding-bottom: 1rem;
    }

    @media(max-width: 520px) {

        justify-content: center;

        > div {
            flex-direction: column;
            gap: 0;
        }

        h2 {
            font-size: 2rem;
        }


    }
`

export const TextContainer = styled.div`

        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        width: 35rem;
        gap: 2rem;
        color: ${({ theme }) => theme.colors["base-white"]};


        svg {
            color: ${({ theme }) => theme.colors["base-white"]};
        }

        @media(max-width: 520px) {
            width: 100%;
            padding: 1rem;
        }
`

export const SimulationOptions = styled.div`
    margin-top: 7.1rem;
    width: 35rem;
    
    > div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-top: 2rem;
    }

    @media(max-width: 520px) {
            width: 100%;
            padding: 1rem;
            
            > div {
                grid-template-columns: repeat(1, 1fr);
            }
    }
`

export const Options = styled.div`
    display: flex;
    gap: 1rem;
    color: ${({ theme }) => theme.colors["base-white"]};

    div {
        display: flex;
        flex-direction: column;

        span {
            font-size: 1rem;
            margin-top: .5rem;
        }
    }

`







