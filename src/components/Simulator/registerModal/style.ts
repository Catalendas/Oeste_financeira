import styled, { css } from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog"

interface OverlayProps {
    submit?: boolean
}

export const Overlay = styled(AlertDialog.Overlay)`
    background: rgba(0, 0, 0, .75);
    position: fixed;
    height: 100vh;
    width: 100vw;
    inset: 0;

`

export const RegisterModalContent = styled(AlertDialog.Content)<OverlayProps>`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2rem 3rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: ${({ theme }) => theme.colors["base-white"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: .4rem;

        label {
            font-weight: bold;
        }

        > input, textarea {
            border-radius: 6px;
            width: 100%;
            border: 0;
            background: ${({ theme }) => theme.colors["base-hover"]};
            color: ${({ theme }) => theme.colors["base-text"]};
            padding: .75rem;

            &::placeholder {
                color: ${({ theme }) => theme.colors["base-text"]};
            }

        }

        p {
            color: red;
        }

        select {
            width: 15rem;
            border: 1px solid;
        }

        > div {
            display: flex;
            align-items: center;
            gap: .75rem;

            a {
                text-decoration: underline;
                color: ${({ theme }) => theme.colors["base-blue"]};
            }
        }
    }

    .form {
        display: block;
        
        ${(submit) => submit && css`
            display: none;
        `}
    }

    @media(max-width: 520px) {
        min-width: 320px;
    }
`

export const SimulatedValues = styled.div`
    pointer-events: none;
    display: flex;
    color: black;

    input[type="number"] {
        background: none;
        color: black;
        width: 7.5rem;
    }
`

export const CloseButton = styled(AlertDialog.Cancel)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    
    @media(max-width: 520px) {
         svg {
            width: 1.4rem;
         }
    }
`