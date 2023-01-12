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
        gap: 1rem;

        input, textarea {
            border-radius: 6px;
            border: 0;
            background: ${({ theme }) => theme.colors["base-hover"]};
            color: ${({ theme }) => theme.colors["base-text"]};
            padding: .75rem;

            &::placeholder {
                color: ${({ theme }) => theme.colors["base-text"]};
            }
        }

        div {
            display: flex;
            align-items: center;
            gap: .75rem;

            a {
                text-decoration: underline;
                color: ${({ theme }) => theme.colors["base-blue"]};
            }
        }
    }

    @media(max-width: 520px) {
        min-width: 320px;
    }
`