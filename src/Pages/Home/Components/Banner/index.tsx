import { CheckSquareOffset, WhatsappLogo } from "phosphor-react";
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
                    <SimulationButton icon={<WhatsappLogo size={30}/>} size={100} text="Simular Agora" color="green"/>
                </BannerDescription>
    
                <img src={girl}/>
        </BannerContainer>
    )
}