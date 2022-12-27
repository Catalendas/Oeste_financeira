import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${({ theme }) => theme.colors["base-blue"]};

    display: flex;
    align-items: center;

    font-weight: bold;
    color: ${({ theme }) => theme.colors["base-white"]};

    list-style: none;

    div {

        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            width: 5rem;
            height: 5rem;
        }        
    }
`

export const HeaderLinks = styled.nav`
    li  {
        display: flex;
        gap: 0.75rem;
    }
`