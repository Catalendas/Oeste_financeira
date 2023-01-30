import { Description, HowItWorksContainer } from "./styled";
import GirlEngine from '../../../../assets/girlEngine.webp'
import { Instruction } from "./Instruction";

export function HowItWorks(){
    return (
        <HowItWorksContainer >
            <div className="container">

                <Description>
                    <h2>Como Funciona?</h2>
                    <span>Passo a Passo</span>
                    
                    <Instruction 
                        number="1" 
                        title="Cabe no bolso" 
                        description="Clique em “Quero um empréstimo” e com os seus documentos em mãos, preencha o formulário para simular o valor que você tem disponível para empréstimo."
                    />
                    <Instruction 
                        number="2" 
                        title="Análise" 
                        description="Vamos consultar seu benefício e encontraremos a melhor proposta de crédito consignado para você."
                    />
                    <Instruction 
                        number="3" 
                        title="Aprovação" 
                        description="Analisamos a sua solicitação e aguardamos aprovação do seu convênio. Isso leva de 2 a 5 dias úteis."
                    />
                </Description>
            </div>
        </HowItWorksContainer>
    )
}