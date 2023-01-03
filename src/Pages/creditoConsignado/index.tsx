import { BannerPage, CardContainer, FgtsContainer } from "./styled";
import Consignado from "../../assets/consignado.png"
import Pessoal from "../../assets/creditoPessoal.png"
import Cartao from "../../assets/cartaoConsignado.png"
import { InfoCredt } from "../../components/InfoCredt";
import { Card } from "../../components/Card";
import { Simulator } from "../Home/Components/Simulator";

export function CreditoConsignado() {
    return (
        <FgtsContainer>
            <BannerPage>   
                <h2>Crédito Consignado</h2>
                <span>No memos dia em sua conta</span>
            </BannerPage>


            <InfoCredt/>
            

            <CardContainer className="container">
                <h2>Outras soluções que podem ajudar você</h2>

                <div>
                    <Card 
                        title="Crédito Consignado"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore vel molestias. Repudiandae alias consequuntur veniam nobis tenetur. Consequuntur unde similique labore nobis laboriosam accusantium corrupti sapiente quo, distinctio quis!"
                        img={Consignado}
                    />
                    <Card
                        title="Crédito Pessoal"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore vel molestias. Repudiandae alias consequuntur veniam nobis tenetur. Consequuntur unde similique labore nobis laboriosam accusantium corrupti sapiente quo, distinctio quis!"
                        img={Pessoal}
                    />
                    <Card
                        title="Cartão de Crédito Consignado"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore vel molestias. Repudiandae alias consequuntur veniam nobis tenetur. Consequuntur unde similique labore nobis laboriosam accusantium corrupti sapiente quo, distinctio quis!"
                        img={Cartao}
                    />
                </div>
            </CardContainer>

        <Simulator />
            
        </FgtsContainer>
    )
}