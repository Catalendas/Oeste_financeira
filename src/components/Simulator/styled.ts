import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group"

export const SimulatorContainer = styled.div`    
    height: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;


    margin-bottom: 4rem;

    h2 {
        margin-top: 2rem;
    }

    @media(max-width: 520px) {
        height: 50rem;
    }

    
`

export const SimulatorContent = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media(max-width: 520px) {
            flex-direction: column;
        }
`

export const SimulatorTitleContainer = styled.div`
    width: 30rem;

    h2 {
        font-size: 3rem;
        color: ${({ theme }) => theme.colors["base-white"]};
    }

    p {
        font-size: 1.5rem;
        margin-top: 1rem;
        color: ${({ theme }) => theme.colors["base-white"]};
    }

    div {
        display: flex;
        gap: 1.5rem;
        margin-top: 2rem;

        span {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: .5rem;
            color: ${({ theme }) => theme.colors["base-blue"]};

            svg {
                border-bottom: 1px solid;
                
            }
        }
    }

    @media(max-width: 520px) {
        width: 20rem;
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 6rem;

        h2 {
            font-size: 2rem;
        }
    }
`

export const CardSimulator = styled.div`
        display: flex;
        align-items: center;
`

export const SimulatorCard = styled.div`
        width: 20rem;
        height: 100%;
        border-bottom: 1px solid gray;
        background: ${({ theme }) => theme.colors["base-white"]};

        display: flex;
        flex-direction: column;        
        justify-content: center;
        text-align: center;

        gap: .75rem;
        padding: 1rem;
    
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 0 1rem;    
`

export const FormSimulator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

    gap: 1rem;

    svg, p {
            color: ${({ theme }) => theme.colors["base-blue"]};
    }

    p {
        font-weight: 600;
    }

    h2 {
        border-radius: 3px;
    }

    input[type="range"] {
        width: 200px;
    }

    > section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors["base-hover"]};
        padding: 1rem;
        
        span {
            font-size: 2rem;
            font-weight: 300;
        }
    }
`

export const OptionsContainer = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
`



export const OptionsButton = styled(RadioGroup.Item)`
    border: 1px solid;
    color: ${({theme}) => theme.colors["base-blue"]};
    border-radius: 6px;
    padding: .3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme["gray-700"]};

    &[data-state="unchecked"]:hover {
        transition: background-color 0.2s;
        background: ${({theme}) => theme.colors["base-blue"]};
        color: ${({ theme }) => theme.colors["base-white"]};
    }

    &[data-state="checked"] {
        color: ${({ theme }) => theme.colors["base-white"]};
        background: ${({theme}) => theme.colors["base-blue"]};
    }


`

export const Results = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    font-size: .75rem;
    text-align: center;

    p {
        font-size: 2rem;
    }
`

interface ButtonContainerProsp {
    size?: number
    color?: string
}

export const ButtonSimulator = styled.button<ButtonContainerProsp>`

    width: 100%;
    border-radius: 1rem;
    height: 3rem;
    border: none;

    font-weight: bold;

    background: ${({ theme, color }) => theme.colors[`base-${color}`]};
    color: ${({ theme }) => theme.colors["base-white"]};
    transition: .4s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;


    &:hover {
        background: ${({ theme, color }) => theme.colors[`base-${color}-black`]};
    }

    &:disabled {
        background: ${({ theme }) => theme.colors["base-hover"]};
    }
`