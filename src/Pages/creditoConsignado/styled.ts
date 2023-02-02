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
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    margin-bottom: 10rem;
`

export const AboutProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 18rem;

    h2 {
        font-weight: 400;
        font-size: 2rem;
    }

    a {
        align-items: center;
    }

`

export const AboutProducContet = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    width: 40rem;
`

export const AboutProductCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
    width: 12rem;

    span {

        &::after {
            content: "";
            height: 7px;
            margin-top: .75rem;
            border-radius: 3px;
            width: 2rem;
            background-color: ${({ theme }) => theme.colors["base-blue"]};
            display: block;
        }
    }
`

export const Trigger = styled(AlertDialog.Trigger)`
    border: 0;
    background-color: ${({ theme }) => theme.colors["base-white"]};
    text-align: initial;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors["base-blue"]};
`

export const Overlay = styled(AlertDialog.Overlay)`
    background: rgba(0, 0, 0, .75);
    position: fixed;
    height: 100vh;
    width: 100vw;
    inset: 0;
`

export const AlertDialogContainer = styled(AlertDialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2rem 3rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: ${({ theme }) => theme.colors["base-white"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Cancel = styled(AlertDialog.Cancel)`
    background-color: ${({ theme }) => theme.colors["base-white"]};
    border: 0;

    position: absolute;
    right: 10px;
    top: 10px;
`

export const Description = styled(AlertDialog.Description)`
    margin: 1rem;
`

export const Carrosel = styled.div`
    
    > div {
        display: flex;
        flex-direction: column;

        
    }
    
`

export const Option = styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::after {
        content: "";
        background-color: ${({ theme }) => theme.colors["base-blue"]};
        width: 3px;
        height: 10rem;
    }

    &:last-child::after {
        display: none;
    }
    
`