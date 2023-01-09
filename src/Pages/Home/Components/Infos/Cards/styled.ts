import styled from "styled-components";

export const CardContainerr = styled.div`
    width: 22.5rem;
    height: 10rem;
    gap: .75rem;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;

    svg, p {
        color: ${({ theme }) => theme.colors["base-blue"]};
    }

    p {
        font-weight: 700;
    }

    @media(max-width: 520px) {
        width: 100%;
    }
`