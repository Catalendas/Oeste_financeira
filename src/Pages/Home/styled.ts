import styled from "styled-components";
import { TitleText } from "../../components/Typograph";

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
