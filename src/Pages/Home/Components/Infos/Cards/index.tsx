import { Money } from "phosphor-react";
import { ReactNode } from "react";
import { CardContainerr } from "./styled";

interface CardsProps {
    icon: ReactNode
    title: string
    description: string
}

export function Cards({icon, title, description}: CardsProps) {
    return (
        <CardContainerr>
            {icon}
            <h2>{title}</h2>
            <p>{description}</p>
        </CardContainerr>
    )
}