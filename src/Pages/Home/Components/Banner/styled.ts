import styled from "styled-components";

export const BannerContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    margin-top: 2rem;
    
    img {
        object-fit: cover;
    }

`

export const BannerDescription = styled.div`
    color: gray;
    display: flex;
    align-items: flex-start;
    gap: .75rem;
    flex-direction: column;

    width: 30rem;

    h1 {
        font-size: 3.9rem;
    }

    div {
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        line-height: 3rem;
    }
`