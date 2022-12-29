import styled from "styled-components";

interface ButtonContainerProsp {
    size: number
    color: string
}

export const ButtonContainer = styled.button`
    width: 100%;
    border-radius: 1rem;
    height: 3rem;
    border: none;

    font-weight: bold;

    background: ${({ theme }) => theme.colors["base-green"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    transition: .4s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;


    &:hover {
        background: ${({ theme }) => theme.colors["base-green-black"]};
    }
`