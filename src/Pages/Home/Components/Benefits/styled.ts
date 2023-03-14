import styled  from "styled-components"

export const BenefitisContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 2rem;
        margin-top: 5rem;
    }

    > div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 5rem;

        div {
            width: 15rem;
            display: flex;
            flex-direction: column;

            svg {
                border-bottom: 3px solid;
                margin-bottom: 1rem;
                color: ${({ theme }) => theme.colors["base-blue"]};
            }

            span {
                font-size: 1.2rem;
            }
        }
    }

    @media(max-width: 520px) {
        padding: 1rem;

        > div {
            flex-direction: column;
            gap: 3rem;
        }
    }
`