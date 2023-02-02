import styled from "styled-components";
import consignado from '../../assets/consignadobanner.webp'


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

export const AlertContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem;
    color: ${({ theme }) => theme.colors["base-blue"]};
`

export const Navigator = styled.div`
    background-color: ${({ theme }) => theme.colors["base-blue-black"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    
    > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-top: 1rem;
        
        div {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }
    }


    h3 {
        font-weight: 400;
        font-size: 2.5rem;
    }
`

export const NavigatorLink = styled.div`

    color: ${({ theme }) => theme.colors["base-blue-black"]};
    background-color: ${({ theme }) => theme.colors["base-white"]};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem;
    border-radius: 6px;

    width: 19.5rem;
    height: 3.5rem;
`

export const AboutProductContainer = styled.div`

`

export const AboutProduct = styled.div`
    
`
