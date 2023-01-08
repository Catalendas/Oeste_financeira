import styled from "styled-components";
import * as Accordion from "@radix-ui/react-accordion"

export const CommonQuestionsContainer = styled.div`
    background: ${({ theme }) => theme.colors["base-blue"]};
    width: 100%;
    height: 40rem;
    display: flex;
    align-items: center;
    flex-direction: column; 


    h2 {
        margin-bottom: 2rem;
        margin-top: 2rem;
        color: ${({ theme }) => theme.colors["base-white"]};
        font-size: 3rem;
    }

    > div {
        display: flex;
        gap: 2rem;
    }
`

export const CommonQuestionsContent = styled.div`
    display: flex;
    align-items: center;


    @media(max-width: 520px){
        width: 100%;

        div {
            img {
                display: none;
            }
        }
    }
`

export const AccordionRoot = styled(Accordion.Root) `
    border: 1px solid green;
    border-radius: 6px;
    width: 30rem;
    background: ${({ theme}) => theme.colors["base-white"]};

    @media(max-width: 520px) {
        width: 100%;
    }
`

export const AccordionItem = styled(Accordion.Item)`
    overflow: hidden;

    &:first-child {
        margin-top: 0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    &:focus-within {
        position: relative;
        z-index: 1;
    }
`

export const AccordionHeader = styled(Accordion.Header)`
    display: flex;
`

export const AccordionTrigger = styled(Accordion.Trigger)`
    font-family: inherit;
    background-color: transparent;
    padding: 20px;
    height: 45;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.75rem;
    line-height: 1;
    border: 0;  
    background-color: white;


    &:hover {
        background-color: gray;
        color: ${({ theme }) => theme.colors["base-white"]};
        transition: .6s;
    }

    &[data-state="open"] {
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

`

export const AccordionContent = styled(Accordion.Content)`
    overflow: hidden;
    font-size: 1rem;
    color: black;
    padding: 1rem;

    &[data-state="open"] {
        animation: slideDown 800ms ;
    }

    &[data-state="close"] {
        animation: slideUp 800ms;
    }

    @keyframes slideDown {
        from {
            height: 0;
        }

        to {
            height: var(--radix-accordion-content-height);
        }
    }

    @keyframes slideUp {
        from {
            height: var(--radix-accordion-content-height);
        }

        to {
            height: 0;
        }
    }

`