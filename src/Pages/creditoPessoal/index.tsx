import { BannerPage, CardContainer, FgtsContainer } from "./styled";
import Fgts from "../../assets/fgts.png"
import Consignado from "../../assets/consignadoBanner.png"
import Cartao from "../../assets/cartaoConsignadoBanner.png"
import { InfoCredt } from "../../components/InfoCredt";
import { Card } from "../../components/Card";
import { Simulator } from "../Home/Components/Simulator";

export function CreditoPessoal() {
    return (
        <FgtsContainer>
            <BannerPage>   
                <h2>Credito Pessoal</h2>
                <span>No memos dia em sua conta</span>
            </BannerPage>


            <InfoCredt/>
            

            <CardContainer className="container">
                <h2>Outras soluções que podem ajudar você</h2>

                <div>
                    <Card 
                        title="Antecipação do FGTS"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore vel molestias. Repudiandae alias consequuntur veniam nobis tenetur. Consequuntur unde similique labore nobis laboriosam accusantium corrupti sapiente quo, distinctio quis!"
                        img={Fgts}
                    />
                    <Card
                        title="Crédito Pessoal"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore vel molestias. Repudiandae alias consequuntur veniam nobis tenetur. Consequuntur unde similique labore nobis laboriosam accusantium corrupti sapiente quo, distinctio quis!"
                        img={Consignado}
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