import { Check } from "phosphor-react";
import { SucessSubmitingContainer } from "./style";

export function SucessSubmiting() {
    return (
        <SucessSubmitingContainer>
            <div>
                <Check size={26} weight="fill"/>
                <h2>Sua proposta foi enviada com sucesso</h2>
            </div>
            <p>Obrigado por entrar em contato com a equipe Oeste logo retornaremos seu contato.</p>
        </SucessSubmitingContainer>
    )
}