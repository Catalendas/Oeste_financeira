import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: ${({ theme}) => theme.colors["base-blue"]};
    height: 30rem;
    display: flex;
    align-items: flex-end;

    > div {
        display: flex;
        height: 420px;
        
    }

    img {
        height: 100%;
    }

    @media(max-width: 520px) {
        
        img {
            display: none;
        }
    }
`

export const BannerTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.colors["base-white"]};

    div {

        display: flex;
        flex-direction: column;
        gap: 2rem;

        h2 {
            font-size: 3rem;
        }

        span {
            font-size: 2rem;
        }
    }

    @media(max-width: 520px) {
        
        padding: 1rem;
    }
`