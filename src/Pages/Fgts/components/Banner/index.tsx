import { WhatsappLogo } from "phosphor-react";
import { SimulationButton } from "../../../../components/SimulationButton";
import { BannerContainer, BannerTitle } from "./styled";
import Homen from "../../../../assets/homenJovem.webp"

export function Banner() {
    return (
        <BannerContainer>
            <div className="container">
                <BannerTitle>
                    <div>
                        <h2>Antecipação Saque Aniversário FGTS</h2>
                        <span>Precisa de dinheiro? Com a antecipação do Saque-Aniversário você não compromete sua renda mensal e o dinheiro cai na conta via Pix.</span>
                        <a target="_blank" href="https://wa.me/5519994508753"><SimulationButton icon={<WhatsappLogo size={30}/>} text="Falar com um especialista"  color="green" size={20}/></a>
                        <a target="_blank" href="https://contrate.oestecredemprestimos.com.br/"><SimulationButton text="Auto contratação"  color="blue-black" size={20}/></a>
                    </div>
                </BannerTitle>

                <img src={Homen} alt="Homen no celular" />
            </div>
        </BannerContainer>
    )
}