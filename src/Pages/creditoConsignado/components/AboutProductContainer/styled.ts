import styled from "styled-components"
import * as AlertDialog from "@radix-ui/react-alert-dialog"

export const AboutProductContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 5rem;
margin-bottom: 10rem;
`

export const AboutProductTitle = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
width: 18rem;

h2 {
    font-weight: 400;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors["base-grey"]};
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