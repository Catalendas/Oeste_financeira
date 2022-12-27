import styled from "styled-components";

export const HowItWorksContainer = styled.section`
    width: 100%;
    height: 40rem;
    background-color: ${({ theme }) => theme.colors["base-blue"]};

    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
   }

`

export const Description = styled.div`
        display: flex;
        flex-direction: column;

        h2 {
            color: ${({ theme }) => theme.colors["base-white"]};
            font-size: 3rem;
            
        }

        span {
            font-size: 1.5rem;
            color: ${({ theme }) => theme.colors["base-blue-dark"]};
            margin-bottom: 1rem;
        }
`

export const IntructionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
    gap: 1rem;

    > span {
        height: 112px;
        min-width: 120px;
        border-radius: 50%;

        background: ${({ theme }) => theme.colors["base-blue-dark"]};
        color: ${({ theme }) => theme.colors["base-white"]};

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 3.5rem;

    }

   > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .75rem;
        color: ${({ theme }) => theme.colors["base-white"]};

        strong {
            font-size: 2rem;
        }
   }

   & + div {
    margin-top: 2rem    ;
   }
`