import { ReactNode } from "react";
import { InfoAboutContainer } from "./styled";

interface InfoAboutProps {
    icon?: ReactNode
    abaut: string
}

export function InfoAbout({ icon, abaut}: InfoAboutProps) {
    return (
        <InfoAboutContainer>
            {icon}<p>{abaut}</p>
        </InfoAboutContainer>
    )
}