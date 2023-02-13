import { WhatsappLogo } from "phosphor-react";
import { SimulationButton } from "../../../../components/SimulationButton";
import { BannerContainer, BannerTitle } from "./styled";
import Homen from "../../../../assets/homenJovem.webp"

export function Banner() {
    return (
        <BannerContainer>
            <BannerTitle>
                <div>
                    <h2>Antecipação Saque Aniversário FGTS</h2>
                    <span>Precisa de dinheiro? Com a antecipação do Saque-Aniversário você não compromete sua renda mensal e o dinheiro cai na conta via Pix.</span>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=551934552541&text=Sou%20servidor%20publico%20e%20gostaria%20de%20fazer%20o%20empr%C3%A9stimo%20consignado"><SimulationButton icon={<WhatsappLogo size={30}/>} text="Falar com um especialista"  color="green" size={20}/></a>
                    <a target="_blank" href="https://contrate.oestecredemprestimos.com.br/cadastro/fgts/"><SimulationButton text="Auto contratação"  color="blue-black" size={20}/></a>
                </div>
            </BannerTitle>

            <img src={Homen} alt="Homen no celular" />
        </BannerContainer>
    )
}