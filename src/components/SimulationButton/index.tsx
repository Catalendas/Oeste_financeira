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
}

export function SimulationButton({icon, text, color, size, type, isInteractile }: SimulationButtonProps) {
    return (
        <ButtonContainer type={type ? type : "button"} color={color} disabled={isInteractile}>
            {icon}{text}
        </ButtonContainer>
    )
}