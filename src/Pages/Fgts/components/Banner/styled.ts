import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: ${({ theme }) => theme.colors["base-blue"]};
    
    > div {
        display: flex;
        justify-content: space-between;

        img {
            width: 30rem;
            height: 30rem;
        }
    }

   

    @media(max-width: 520px) {
        
        > div {
            flex-direction: column;
            align-items: center;
            padding: 1rem;

            img {
                width: 22rem;
                display: none;
            }  
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
`