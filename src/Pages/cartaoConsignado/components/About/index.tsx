import { WhatsappLogo } from "phosphor-react";
import { SimulationButton } from "../../../../components/SimulationButton";
import { AboutContainer, Caracteristic, CaracteristicOptions, VantageContainer } from "./styled";

export function Abaut() {
    return (
        <AboutContainer className="container">
            <VantageContainer>
                <h2>Conheça as vantagens do Cartão de Crédito Consignado</h2>
                <p>É um cartão exclusivo para aposentados, pensionistas do INSS e servidores públicos com taxas de juros muito mais baixas do que um cartão de crédito comum.</p>
                <SimulationButton text="Contrate agora" color="blue"/>
                <SimulationButton text="Peça pelo WhatsApp" icon={<WhatsappLogo size={36}/>} color="green"/>
            </VantageContainer>

            <Caracteristic>
                <CaracteristicOptions>
                    <div>
                        <strong>Limite de até 1.6x o seu benefício</strong>
                    </div>
                </CaracteristicOptions>

                <CaracteristicOptions>
                    <div>
                        <strong>Pagamento mínimo descontado na folha de pagamento</strong>
                    </div>
                </CaracteristicOptions>

                <CaracteristicOptions>
                    <div>
                        <strong>Sem anuidade e taxas escondidas</strong>
                    </div>
                </CaracteristicOptions>
            </Caracteristic>
        </AboutContainer>
    )
}