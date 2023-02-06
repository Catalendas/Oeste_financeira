import { RefinContainer } from "./styled";
import  idoso  from "../../../../assets/IdosoCelular.webp"
import { SimulationButton } from "../../../../components/SimulationButton";
import { WhatsappLogo } from "phosphor-react";

export function Refin() {
    return (
        <RefinContainer className="container">
            <div>
                <h2>Refinancie seu empréstimo consignado</h2>
                <p>Precisa de uma folga no orçamento? Com o refinanciamento, você quita os empréstimos anteriores e consegue acesso a mais crédito.</p>
                <SimulationButton icon={<WhatsappLogo size={30}/>} text="Entre em contato agora"  color="green" size={20}/>
            </div>

            <img src={idoso} alt="Idoso no Celular" />
        </RefinContainer>
    )
}