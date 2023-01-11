import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog"

export const Overlay = styled(AlertDialog.Overlay)`
    background: rgba(0, 0, 0, .75);
    position: fixed;
    height: 100vh;
    width: 100vw;
    inset: 0;
`

export const RegisterModalContent = styled(AlertDialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${({ theme }) => theme.colors["base-label"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input, textarea {
            border-radius: 6px;
            border: 0;
            background: ${({ theme }) => theme.colors["hover"]};
            color: ${({ theme }) => theme.colors["base-text"]};
            padding: 1rem;

            &::placeholder {
                color: ${({ theme }) => theme.colors["base-text"]};
            }
        }
    }
`