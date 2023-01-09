import styled from "styled-components";
import Fgts from '../../assets/fgts.webp'


export const FgtsContainer = styled.section`
    width: 100%;
`

export const BannerPage = styled.div`
    background: ${({ theme }) => `url(${Fgts})  no-repeat center`};
    background-size: 100%;
    width: 100%;
    height: 30rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .75rem;

    color: ${({ theme }) => theme.colors["base-white"]};

    h2 {
        font-size: 3rem;
    }

    @media(max-width: 520px) {
        background-size: cover;
        text-align: center;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;

    margin-bottom: 4rem;

    > h2 {
        font-size: 2rem;
        margin-bottom: 4rem;
    }

    div {
        display: flex;
        gap: 2rem;
    }

    @media(max-width: 520px) {

        > h2 {
            font-size: 1.5rem;
            text-align: center;
        }

        div {
            flex-direction: column;
        }
    }
`