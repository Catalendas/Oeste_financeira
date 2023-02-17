import styled from "styled-components";

export const AdvantageContainer = styled.div`
    margin-top:4rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors['base-blue']};
    color: ${({ theme }) => theme.colors["base-white"]};
    

    > div {

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        justify-content: space-between;
        padding: 3rem 0;

        h2 {
            font-size: 2rem;
            font-weight: 400;  
        }
        
       
        > div {
            display: flex;
            justify-content: space-between;
            margin-top: 3rem;
        }
    }

    @media(max-width: 520px) {
        padding: 1rem;

        > div {

            > div {
                flex-direction: column;
                gap: 2rem;
            }
        }
    }
`

export const AdvantageOption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    strong {
        font-size: 1.2rem;
    }
`