import styled, { css } from "styled-components";
interface ContainerProps {
    isVisible: boolean
}

export const Container = styled.section<ContainerProps>`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgb(0,5,255);
    background: linear-gradient(0deg, rgba(0,5,255,0.12080806443671221) 0%, rgba(93,89,89,0.8210881764815301) 100%);
    color: ${({ theme }) => theme.colors["base-white"]};

    opacity: 0;
    pointer-events: none;

    transition: .2s;
    transform: translateY(50px);

    
    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: .7s;
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);

        > svg {
            transform: rotate(0deg);
        }

        nav {
            transform: scale(1);
        }
    `}

`

export const MenuMobileLinks = styled.nav<ContainerProps>`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.7);
    transition: .4s;
    

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

    ${({ isVisible }) => isVisible && css`

        nav {
            transform: scale(1);
        }
    `}
`