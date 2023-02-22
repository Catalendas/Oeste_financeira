import { BenefitisContainer } from "./styled";
import Moca from "../../../../assets/farmaceutica.webp"
import { SimulationButton } from "../../../../components/SimulationButton";

export function Benefitis() {
    return (
        <BenefitisContainer className="container">
            <div>
                <h2>Descontos exclusivos em farmácias com o cartão</h2>
                <p>Use o cartão presencialmente nas farmácias da Drogaria São Paulo e Drogaria Pacheco para aproveitar mais esse benefício.</p>
                <SimulationButton text="Quero meu cartão agora" color="blue"/>
            </div>

            <img src={Moca} alt="" />
        </BenefitisContainer>
    )
}