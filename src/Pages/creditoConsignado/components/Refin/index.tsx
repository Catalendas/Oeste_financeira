import { RefinContainer } from "./styled";
import  idoso  from "../../../../assets/IdosoCelular.webp"
import { SimulationButton } from "../../../../components/SimulationButton";
import { WhatsappLogo } from "phosphor-react";

export function Refin() {
    return (
        <RefinContainer className="container" id="refin">
            <div>
                <h2>Refinancie seu empréstimo consignado</h2>
                <p>Precisa de uma folga no orçamento? Com o refinanciamento, você quita os empréstimos anteriores e consegue acesso a mais crédito.</p>
                <a target="_blank"  href="https://api.whatsapp.com/send?phone=551934552541&text=Sou%20servidor%20publico%20e%20gostaria%20de%20fazer%20o%20empr%C3%A9stimo%20consignado"><SimulationButton icon={<WhatsappLogo size={30}/>} text="Entre em contato agora"  color="green" size={20}/></a>
            </div>

            <img src={idoso} alt="Idoso no Celular" />
        </RefinContainer>
    )
}