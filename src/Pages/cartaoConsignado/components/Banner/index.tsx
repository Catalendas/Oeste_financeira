import { SimulationButton } from "../../../../components/SimulationButton";
import { BannerContainer, BannerTitle } from "./styled";
import Idosa from "../../../../assets/idosa.webp"

export function Banner() {
    return (
        <BannerContainer>
            <div className="container">
                <BannerTitle>
                    <h2>Cartão consignado</h2>
                    <span>Cartão exclusivo para aposentados, pensionistas do INSS</span>
                    <SimulationButton text="Contrate agora" color="blue-black"/>
                </BannerTitle>

                <img src={Idosa} alt="" />
            </div>
        </BannerContainer>
    )
}