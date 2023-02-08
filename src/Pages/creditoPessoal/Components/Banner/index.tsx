import { BannerContainer, BannerTitle } from "./styled";
import Homen from "../../../../assets/homen.webp"
import { SimulationButton } from "../../../../components/SimulationButton";
import { WhatsappLogo } from "phosphor-react";

export function Banner() {
    return (
        <BannerContainer>
            <BannerTitle>
                <div>
                    <h2>Empréstimo pessoal</h2>
                    <span>Teve um imprevisto? Conte com a Oeste. É dinheiro na mão sem burocracia.</span>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=551934552541&text=Sou%20servidor%20publico%20e%20gostaria%20de%20fazer%20o%20empr%C3%A9stimo%20consignado"><SimulationButton icon={<WhatsappLogo size={30}/>} text="Falar com um especialista"  color="green" size={20}/></a>
                </div>
            </BannerTitle>

            <img src={Homen} alt="Homen" />
        </BannerContainer>
    )
}