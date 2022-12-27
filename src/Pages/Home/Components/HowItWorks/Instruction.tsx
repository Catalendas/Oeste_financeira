import { IntructionContainer } from "./styled";

interface InstructionProps {
    number: string
    title: string
    description: string
}

export function Instruction({number, title, description}: InstructionProps) {
    return (
        <IntructionContainer>
            <span>{number}</span>

            <div>
                <strong>{title}</strong>
                <p>{description}</p>
            </div>
        </IntructionContainer>
    )
}