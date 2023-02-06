import { BannerPage, CreditoConsignadoContainer,  ImageContainer,  TilteContainer } from "./styled";
import homen from "../../assets/homen.webp"
import { ButtonSimulator } from "../../components/Simulator/styled";
import { Navigator } from "./components/NavigatorContainer";
import { AboutProduct } from "./components/AboutProductContainer";
import { MultStep } from "./components/MultStep";
import { Cost } from "./components/Cost";
import { Table } from "./components/Table";
import { Refin } from "./components/Refin";

 
export function CreditoConsignado() {
    return (
        <CreditoConsignadoContainer>
            <BannerPage >   
                <div className="container">
                    <TilteContainer>
                        <h2>Empréstimo Consignado</h2>
                        <span>O benefício aumentou, sua margem também! Sujeito à análise e condições do produto.</span>
                        <ButtonSimulator color="green">Fale com um especialista</ButtonSimulator>
                    </TilteContainer>
                    <ImageContainer>
                        <img src={homen} alt="" />
                    </ImageContainer>
                </div>
            </BannerPage>

            <Navigator />
            <AboutProduct />
            <MultStep />
            <Cost />
            <Table />
            <Refin />
   
        </CreditoConsignadoContainer>
    )
}