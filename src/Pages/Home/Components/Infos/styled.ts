import styled from "styled-components";

export const InfoConteiner = styled.div`
    
    margin-top: 5rem;
    margin-bottom: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    > div {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    @media(max-width: 520px) {
    
        padding: 1rem;
        width: 100%;
        justify-content: center;

        > div {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export const TitleContent = styled.h2`
    height: 5rem;
    font-size: 2rem;

    @media(max-width: 520px) {
        text-align: center;
    }
`