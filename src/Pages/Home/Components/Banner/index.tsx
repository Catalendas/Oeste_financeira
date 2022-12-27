import { CheckSquareOffset } from "phosphor-react";
import girl from "../../../../assets/girl1.png";
import { SimulationButton } from "../../../../components/SimulationButton";
import { BannerContainer, BannerDescription } from "./styled";

export function Banner() {
    return (
        <BannerContainer className="container">
            <BannerDescription>
                    <h1>Dinheiro rápido na sua conta</h1>
                    <div>
                        <span><CheckSquareOffset/> Dinheiro rapido na conta</span>
                        <span><CheckSquareOffset/> Taxas de juros mais baixas</span>
                        <span><CheckSquareOffset/> 100% Digital</span>
                    </div>
                    <SimulationButton />
                </BannerDescription>
    
                <img src={girl}/>
        </BannerContainer>
    )
}