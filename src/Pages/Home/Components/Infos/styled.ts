import styled from "styled-components";

export const InfoConteiner = styled.div`
    width: 100%;
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
`

export const TitleContent = styled.h2`
    height: 5rem;
    font-size: 2rem;
`