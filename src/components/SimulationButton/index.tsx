import { WhatsappLogo } from "phosphor-react";
import { ReactNode } from "react";
import { ButtonContainer } from "./style";

interface SimulationButtonProps {
    icon?: ReactNode
    text: string
    color?: string
    size?: number
}

export function SimulationButton({icon, text, color, size}: SimulationButtonProps) {
    return (
        <ButtonContainer color={color}>
            {icon}{text}
        </ButtonContainer>
    )
}