import * as AlertDialog from "@radix-ui/react-alert-dialog";
import styled from "styled-components";


export const CreditoConsignadoContainer = styled.section`
    width: 100%;
`

export const BannerPage = styled.div`
    background: ${({ theme }) => theme.colors["base-blue"]};
    
    width: 100%;
    height: 30rem;
    

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
        justify-content: center;
        flex-direction: column;

        div {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
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

    @media(max-width: 520px) {
        display: flex;
        justify-content: center;
        align-items: center;
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

        @media(max-width: 520px) {
            
            img {
                width: 23rem;
                height: 23rem;
            }
        }
`

export const AcordionContainer = styled.div`
    margin-bottom: 7rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    h2 {
        font-weight: 400;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors["base-grey"]};
    }

    @media(max-width: 520px) {
        padding: 0 1rem;
    }
`

