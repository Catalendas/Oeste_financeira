import { AutoContractContainer } from "./styled";
import Moca from "../../../../assets/mocaNoCelular.webp"
import { Check } from "phosphor-react";
import { SimulationButton } from "../../../../components/SimulationButton";

export function AutoContract() {
    return (
        <AutoContractContainer className="container">
            <img src={Moca} />
            
            <div>
                <h2>Faça a auto contratação online</h2>
                <span><Check size={30}/>Rapido</span>
                <span><Check size={30}/>Fácil</span>
                <span><Check size={30}/>Sem Burocracia</span>
                <a href="https://contrate.oestecredemprestimos.com.br/" target="_blank"><SimulationButton text="Seguir com auto contratação" color="blue" size={20}/> </a>
            </div>

        </AutoContractContainer>
    )
}