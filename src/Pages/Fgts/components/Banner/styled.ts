import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: ${({ theme }) => theme.colors["base-blue"]};
    
    display: flex;
    justify-content: space-between;
    padding: 0 10rem;

    img {
        width: 30rem;
        height: 30rem;
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