import styled from "styled-components"

export const AlertContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem;
    color: ${({ theme }) => theme.colors["base-blue"]};
`

export const NavigatorContainer = styled.div`
    background-color: ${({ theme }) => theme.colors["base-blue-black"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    
    > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-top: 1rem;
        
        div {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }
    }


    h3 {
        font-weight: 400;
        font-size: 2.5rem;
    }
`

export const NavigatorLink = styled.div`

    color: ${({ theme }) => theme.colors["base-blue-black"]};
    background-color: ${({ theme }) => theme.colors["base-white"]};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem;
    border-radius: 6px;

    width: 19.5rem;
    height: 3.5rem;
`