import styled from "styled-components";

export const CartaoConsignadoBanner = styled.div`

`

export const AcordionContainer = styled.div`
    margin-top: 7rem;
    margin-bottom: 7rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    h2 {
        font-weight: 400;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors["base-grey"]};
    }

    @media(max-width: 520px) {
        padding: 0 1rem;
    }
`