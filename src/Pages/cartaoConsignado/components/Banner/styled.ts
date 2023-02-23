import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: ${({ theme }) => theme.colors["base-blue"]};
    
    > div {
        display: flex;
        justify-content: space-between;
    }

    img {
        width: 30rem;
    }

    @media(max-width: 520px) {

        padding: 1rem;

        img {
            display: none;
        }
    }
`

export const BannerTitle = styled.div`
    width: 20rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    color: ${({ theme }) => theme.colors["base-white"]};

    h2 {
        font-size: 3rem;
    }

    span {
        font-size: 2rem;
    }
`