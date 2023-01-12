import styled from "styled-components";

interface ButtonContainerProsp {
    size?: number
    color?: string
}

export const ButtonContainer = styled.button<ButtonContainerProsp>`
    width: 100%;
    border-radius: 1rem;
    height: 3rem;
    border: none;

    font-weight: bold;

    background: ${({ theme, color }) => theme.colors[`base-${color}`]};
    color: ${({ theme }) => theme.colors["base-white"]};
    transition: .4s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;


    &:hover {
        background: ${({ theme, color }) => theme.colors[`base-${color}-black`]};
    }

    &:disabled {
        background: ${({ theme }) => theme.colors["base-hover"]};
    }
`