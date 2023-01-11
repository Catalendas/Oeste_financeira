import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { InfoAboutContainer } from "./styled";

interface InfoAboutProps {
    icon?: ReactNode
    abaut: string
    link?: string
}

export function InfoAbout({ icon, abaut, link}: InfoAboutProps) {
    return (
        <InfoAboutContainer>
            {icon}<a href={link}>{abaut}</a>
        </InfoAboutContainer>
    )
}