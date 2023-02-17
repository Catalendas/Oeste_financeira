import styled from "styled-components";

export const AboutFGTSContainer = styled.div`
margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const AboutFGTSContent = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        font-weight: 400;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors["base-grey"]};
    }

    p {
        font-size: 1.2rem;
    }

    @media(max-width: 520px) {
        padding: 1rem;
    }
`