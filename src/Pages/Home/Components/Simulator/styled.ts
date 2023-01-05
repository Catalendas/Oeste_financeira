import styled from "styled-components";

export const SimulatorContainer = styled.div`
    width: 53rem;
    height: 30rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    margin-bottom: 4rem;
    

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const SimulatorTitleContainer = styled.div`
    width: 30rem;

    h2 {
        font-size: 5rem;
        color: ${({ theme }) => theme.colors["base-blue"]};
    }
`

export const CardSimulator = styled.div`
        display: flex;
        align-items: center;
`

export const SimulatorContent = styled.div`
        width: 20rem;
        height: 20rem;

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
            font-weight: 600;
        }

        h2 {
            border-bottom: 1px solid gray;
            border-radius: 3px;
        }

        input[type="range"] {
            width: 200px;
        }

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.25rem;

            margin-top: 3rem;
            
            span {
                font-size: 2rem;
                font-weight: 300;
            }
        }
`