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

  
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 10rem;

    > h2 {
        font-size: 2rem;
    }

    div {
        margin-top: 3rem;
        display: flex;
        gap: 2rem;
    }
`