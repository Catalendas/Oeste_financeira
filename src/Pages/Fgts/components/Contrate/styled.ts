import styled from "styled-components";

export const ContrateContainer = styled.div`
    width: 100%;
    margin-top: 10rem;
    display: flex;
    gap: 3rem;

    img {
        width: 35rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
            font-size: 3rem;
            font-weight: 400;
            color: ${({ theme }) => theme.colors["base-grey"]};
        }
    }

    @media(max-width: 520px) {
        flex-direction: column;
        padding: 1rem;

        img {
            width: 22rem;
        }

        > div {
            gap: 2rem;
        }
    }
`

export const ContrateOptions = styled.div`  
    display: flex;
    flex-direction: column;
    gap: 1rem;

`

export const ContrateOption = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors["base-grey"]};

    span {
        font-weight: 400;
        
    }
`