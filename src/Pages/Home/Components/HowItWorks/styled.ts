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
        justify-content: flex-end;
   }

   @media(max-width: 520px) {

        width: 100%;
         div {

            img {
                display: none;
            }
         }
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
            color: ${({ theme }) => theme.colors["base-blue-black"]};
            margin-bottom: 1rem;
        }

        @media(max-width: 520px) {
            justify-content: center;
            align-items: center;
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

        background: ${({ theme }) => theme.colors["base-blue-black"]};
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

   @media(max-width: 520px) {
        padding: 1rem;

        span {
            height: 70px;
            min-width: 66px;
            font-size: 3rem;
        }
   }
`