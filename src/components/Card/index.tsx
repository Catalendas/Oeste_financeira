import { CardContainer, CardContent } from "./styled";


interface CardProps {
    img: string
    title: string
    description: string
}

export function Card({img, title, description}: CardProps) {
    return (
        <CardContainer className="card">
            <img src={img} alt={img}/>
            <CardContent className="card">
                <h2>{title}</h2>
                <p>{description}</p>
            </CardContent>
        </CardContainer>
    )
}