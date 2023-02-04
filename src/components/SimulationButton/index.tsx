import { WhatsappLogo } from "phosphor-react";
import { ReactNode } from "react";
import { ButtonContainer } from "./style";

interface SimulationButtonProps {
    icon?: ReactNode
    text: string
    color?: string
    size?: number
    type?: "submit" | "button" 
    isInteractile?: boolean
    link?: string
}

export function SimulationButton({icon, text, color, size, type, isInteractile, link }: SimulationButtonProps) {
    return (
        <ButtonContainer type={type ? type : "button"} color={color} disabled={isInteractile}>
            {icon}{text}        
        </ButtonContainer>
    )
}