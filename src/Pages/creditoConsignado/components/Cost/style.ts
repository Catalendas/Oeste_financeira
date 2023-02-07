import styled from "styled-components";

export const CostContainer = styled.div `
    margin-top: 3rem;
`

export const CostTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;

    h2 {
        font-size: 3rem;
        color: ${({ theme }) => theme.colors["base-grey"]};
        font-weight: 400;
    }

    p {
        font-size: 1.2rem;
    }

    @media(max-width: 520px) {

        h2 {
            font-size: 2rem;
        }
    }
`

export const CostValue = styled.div`
    width: 100%;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        height: 20rem;


        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-bottom: 3px dashed;
        }
    }
`

interface ValueProps {
    color: "blue" | "grey"
}

export const Value = styled.span<ValueProps>`
    width: 15rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;

    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    background-color: ${({ theme, color }) => theme.colors[`base-${color}`]};
    border-radius: 1rem;

    @media(max-width: 520px) {
        width: 10rem
    }
`

export const CostTable = styled.table`

`