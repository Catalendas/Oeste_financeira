import styled from "styled-components";

export const SucessSubmitingContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        gap: 1rem;

        svg {
            color: ${({ theme }) => theme.colors["base-green"]};
        }
    }

    p {
        line-height: 1.5rem;
    }

    @media(max-width: 520px) {
        div {
            
            h2 {
                font-size: 1rem;
            }
        }
    }
`