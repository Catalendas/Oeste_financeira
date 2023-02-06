import styled from "styled-components"

export const Multstep = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
        font-size: 3rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors["base-grey"]};
    }

    > p {
        font-size: 1.5rem;
    }

    
    > div {
        display: flex;
        align-items: center ;
        justify-content: space-between;
        margin-top: 3rem;
        width: 100%;

        &::after {
            content: "";
            background-color: ${({ theme }) => theme.colors["base-blue"]};
            width: 50rem;
            height: 3px;
            margin-top: .75rem;
            margin-bottom: .75rem;
            position: absolute;
        
         }
    }

    
`

export const Option = styled.div`
    width: 21rem;
    display: flex;
    justify-content: space-between;
    align-items: center;        
    color: ${({ theme }) => theme.colors["base-grey"]};
    background-color: ${({ theme }) => theme.colors["base-white"]};
    z-index: 1;
    padding: 1rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    /* &::after {
        content: "";
        background-color: ${({ theme }) => theme.colors["base-blue"]};
        width: 100%;
        height: 3px;
        margin-top: .75rem;
        margin-bottom: .75rem;
       
    } */

    &:last-child::after {
        display: none;
    }
    
`