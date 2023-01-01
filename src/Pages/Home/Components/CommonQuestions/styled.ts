import styled from "styled-components";
import * as Accordion from '@radix-ui/react-accordion'

export const CommonQuestionsContainer = styled.div`
    background: ${({ theme }) => theme["base-blue"]};
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const AccordionRoot = styled(Accordion.Root) `
    border-radius: 6px;
    width: 40rem;
    background: ${({ theme}) => theme.colors["base-white"]};
    box-shadow: 0 2px 10px black;
`

export const AccordionItem = styled(Accordion.Item)`
    overflow: hidden;
    margin-top: 1px;

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
    border: 0;
    padding: 0 20px;
    height: 45;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.75rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors["base-violet"]};
    box-shadow: 0 1px 0 black;
    background-color: white;
    transition: background-color 0.3s color 0.3s;

    &:hover {
        background-color: gray;
        color: ${({ theme }) => theme.colors["base-white"]};
        
    }

    &:checked {

    }
`

export const AccordionContent = styled(Accordion.Content)`
    overflow: hidden;
    font-size: 1rem;
    color: black;

    &[data-state="open"] {
        animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)
    }

    &[data-state="close"] {
        animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
`