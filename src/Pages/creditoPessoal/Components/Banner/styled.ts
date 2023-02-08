import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: ${({ theme}) => theme.colors["base-blue"]};

    display: flex;
    justify-content: space-between;
    padding: 0 10rem;
    height: 420px;

    img {
        width: 37rem;
        height: 100%;
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
`