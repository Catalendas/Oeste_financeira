import styled from "styled-components";

export const SimulatoContainer = styled.div`
    width: 53rem;
    height: 30rem;
    border: 1px solid green;
    display: flex;
    align-items: center;
    justify-content: center;


    > div {
        display: flex;
        flex-direction: column;        
        justify-content: center;
        text-align: center;

        gap: .75rem;
        padding: 0 1rem;
    
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 1rem;

        svg, p {
            color: ${({ theme }) => theme.colors["base-blue"]};
        }

        p {
            font-weight: 700;
        }

        width: 20rem;
        height: 20rem;

        input[type="range"] {
            width: 500px;
        }
    }
`