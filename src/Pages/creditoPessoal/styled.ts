import styled from "styled-components";
import Pessoal from '../../assets/creditopessoalbanner.webp'


export const CreditoPessoalContainer = styled.section`
    width: 100%;
`

export const CardContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;

    margin-bottom: 4rem;

    > h2 {
        font-size: 2rem;
        margin-bottom: 4rem;
    }

    div {
        display: flex;
        gap: 2rem;
    }

    @media(max-width: 520px) {

        > h2 {
            font-size: 1.5rem;
            text-align: center;
        }

        div {
            flex-direction: column;
        }
    }
`