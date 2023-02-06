import { AboutProducContet, AboutProductCard, AboutProductContainer, AboutProductTitle, AlertDialogContainer, Cancel, Description, Overlay, Trigger } from "./styled";
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { SimulationButton } from "../../../../components/SimulationButton";
import { X } from "phosphor-react";

export function AboutProduct() {
    return (
        <>
            <AboutProductContainer className="container">
                <AboutProductTitle>
                    <h2>O que é empréstimo consignado?</h2>
                    <SimulationButton link="https://api.whatsapp.com/send?phone=5519993178152" text="Contrate agora" color="blue"/>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=551934552541">É Servidor publico? ligue para (19)3455-2541</a>
                </AboutProductTitle>
                <AboutProducContet>
                    <AboutProductCard>
                        <strong>Para aposentados, pensionistas do INSS e servidores públicos </strong>

                        <AlertDialog.Root>
                            <Trigger>
                                <span>Confira a lista de convênios</span>
                            </Trigger>
                            <Overlay/>

                            
                            <AlertDialogContainer>
                                <Cancel>
                                    <X/>
                                </Cancel>
                                <AlertDialog.Title>Convênios ativos para empréstimo consignado</AlertDialog.Title>
                                <Description>
                                    <ul>
                                        <li>INSS</li>
                                        <li>SIAPE</li>
                                        <li>Gov.MG</li>
                                        <li>CBMMG</li>
                                        <li>PMMG</li>
                                        <li>IPSM</li>
                                        <li>IPSEMG</li>
                                    </ul>
                                </Description>
                            </AlertDialogContainer>
                        
                        </AlertDialog.Root>
                    </AboutProductCard>
                    <AboutProductCard>
                        <strong>Desconto direto na folha de pagamento</strong>
                        <span>Segurança pra te oferecer taxas mais vantajosas</span>
                    </AboutProductCard>
                    <AboutProductCard>
                        <strong>Juros de 1,80% ao mês e 23,87% ao ano</strong>
                        <span>Consulte previamente antes de efetivar a contratação</span>
                    </AboutProductCard>
                    <AboutProductCard>
                        <strong>Pagamento em até 84 parcelas ou quite quando quiser</strong>
                        <span>Você tem 7 dias para cancelar</span>
                    </AboutProductCard>
                </AboutProducContet>
            </AboutProductContainer>
        </>
    )
}