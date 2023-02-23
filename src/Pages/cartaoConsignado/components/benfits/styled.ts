import styled from "styled-components";

export const BenefitisContainer = styled.div`
    margin-top: 5rem;
    display: flex;
    gap: 5rem;

    color: ${({ theme }) => theme.colors["base-grey"]};

    div {

        display: flex;
        flex-direction: column;
        gap: 5rem;

        width: 29rem;

        h2 {
            font-size: 3rem;
            font-weight: 400;
        }
    }

    img {
        width: 30rem;
    }

    @media(max-width: 520px) {

        padding: 1rem;

        img {
            display: none;
        }
    }
`