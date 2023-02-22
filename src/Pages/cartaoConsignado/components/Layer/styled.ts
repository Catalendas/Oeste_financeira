import styled from "styled-components";

export const LayerContainer = styled.div`
    margin-top: 5rem;
    background-color: ${({ theme }) => theme.colors["base-blue-black"]};
    height: 10rem;
    display: flex;
    color: ${({ theme }) => theme.colors["base-white"]};

    > div {
        display: flex;
        align-items: center;

        h2 {
            font-size: 2rem;
            font-weight: 400;

        }
    }
`

export const LayerOptions = styled.div`

    display: flex;
    gap: 2rem;

    div {

        display: flex;
        flex-direction: column;
        gap: 1rem;


        strong {
            font-size: 1.5rem;
            font-weight: 400;
            color: ${({ theme }) => theme.colors["base-white"]};
        }

        &::after {
            content: "";
            height: 7px;
            margin-top: .75rem;
            border-radius: 3px;
            width: 2rem;
            background-color: ${({ theme }) => theme.colors["base-white"]};
            display: block;
        }
    }
`