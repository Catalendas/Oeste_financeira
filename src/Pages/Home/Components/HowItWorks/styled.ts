import styled from "styled-components";

export const HowItWorksContainer = styled.section`
    height: 40rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors["base-blue"]};

    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
   }


`

export const Description = styled.div`
        display: flex;
        flex-direction: column;

        h2 {
            color: ${({ theme }) => theme.colors["base-white"]};
            font-size: 3rem;       
        }

        @media(max-width: 520px) {
            justify-content: center;
            align-items: center;
        }
`

export const StepsContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;    
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors["base-white"]};

    @media(max-width: 520px) {
        flex-direction: column;

        > svg {
            display: none;
        }
    }
`

export const Steps = styled.div`  
    text-align: center;
    background-color: ${({ theme }) => theme.colors["base-blue"]};   
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;

    max-width: 15rem;
    
    strong {
        width: 10rem;
    }

    p {
        font-size: .9rem;
    }

    @media(max-width: 520px) {
       gap: 2rem;
    }
`


