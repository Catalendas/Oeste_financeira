import * as AlertDialog from "@radix-ui/react-alert-dialog";
import styled from "styled-components";


export const CreditoConsignadoContainer = styled.section`
    width: 100%;
`

export const BannerPage = styled.div`
    background: ${({ theme }) => theme.colors["base-blue"]};
    
    width: 100%;
    

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

    }

    

    color: ${({ theme }) => theme.colors["base-white"]};

    h2 {
        font-size: 3rem;
    }
    

    @media(max-width: 520px) {
        height: 100%;
        background-size: cover;
        text-align: center;
        flex-direction: column;
    }
`

export const TilteContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 23rem;
        span {
            font-size: 2rem;
        }
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28rem;

    img {
            width: 25rem;
            height: 25rem;
        }
`



