import styled from "styled-components";

export const AboutContainer = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
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
`


export const AboutContent = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;

    gap: 3rem;
    
    div {
        width: 20rem;
        display: flex;
        flex-direction: column;
        gap: .75rem;

        h2 {
            font-size: 2rem;
            color: ${({ theme }) => theme.colors["base-blue"]};
        }
    }

    img {
        width: 30rem;
        height: 100%;
    }

`