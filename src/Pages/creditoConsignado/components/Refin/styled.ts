import styled from "styled-components";
import Bg from "../../../../assets/background.webp"

export const RefinContainer = styled.div`
    margin-top: 7rem;
    margin-bottom: 7rem;
    background: url(${Bg});
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    color: ${({ theme }) => theme.colors["base-white"]};

    div {

        width: 26rem;
        padding: 1rem;

        h2 {
            font-weight: 400;
            font-size: 2rem;
        }

        p {
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }

    img {
        width: 30rem;
        height: 20rem;
    }

    @media(max-width: 520px) {
        flex-direction: column;
    }

    img {
        width: 100%;
        height: 20rem;
    }
`