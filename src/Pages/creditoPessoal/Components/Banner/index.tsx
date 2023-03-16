import { BannerContainer, BannerTitle } from "./styled";
import Homen from "../../../../assets/homen.webp"
import { SimulationButton } from "../../../../components/SimulationButton";
import { WhatsappLogo } from "phosphor-react";

export function Banner() {
    return (
        <BannerContainer>
            <div className="container">
                <BannerTitle>
                    <div>
                        <h2>Empréstimo pessoal</h2>
                        <span>Teve um imprevisto? Conte com a Oestecred. É dinheiro na mão sem burocracia.</span>
                        <a href="https://wa.me/5519994508753"><SimulationButton icon={<WhatsappLogo size={30}/>} text="Falar com um especialista"  color="green" size={20}/></a>
                    </div>
                </BannerTitle>

                <img src={Homen} alt="Homen" />
            </div>
        </BannerContainer>
    )
}