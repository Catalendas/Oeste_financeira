import styled from "styled-components";

export const AutoContractContainer = styled.div`
    margin-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 30rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h2 {
            font-size: 4rem;
        }

        span {
            font-size: 2rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }
`