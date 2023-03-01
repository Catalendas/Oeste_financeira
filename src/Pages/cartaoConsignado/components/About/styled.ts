import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    gap: 5rem;
    margin-top: 2rem;

    @media(max-width: 520px) {
        padding: 1rem;
        flex-direction: column;
        padding: 1rem;
    }
`

export const VantageContainer = styled.div`
    width: 35rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${({ theme }) => theme.colors["base-grey"]};

    h2 {
        font-size: 2rem;
        font-weight: 400;      
    }

    @media(max-width: 520px) {
        width: 100%;
        padding: 1rem;
    }
`

export const Caracteristic = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media(max-width: 520px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 1rem;
    }
`

export const CaracteristicOptions = styled.div`
    grid-row-gap: 1rem;
    margin-bottom: 3rem;

    div {

        display: flex;
        flex-direction: column;
        gap: 1rem;
        

        strong {
            font-size: 1.5rem;
            font-weight: 400;
            color: ${({ theme }) => theme.colors["base-grey"]};
        }

        &::after {
            content: "";
            height: 7px;
            margin-top: .75rem;
            border-radius: 3px;
            width: 2rem;
            background-color: ${({ theme }) => theme.colors["base-blue"]};
            display: block;
        }
    }
`