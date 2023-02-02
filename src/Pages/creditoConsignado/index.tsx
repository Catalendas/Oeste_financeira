import { AboutProducContet, AboutProduct, AboutProductCard, AboutProductContainer, AlertContainer, AlertDialogContainer, BannerPage, Cancel, Carrosel, CreditoConsignadoContainer, Description, ImageContainer, Navigator, NavigatorLink, Option, Overlay, TilteContainer, Trigger} from "./styled";
import homen from "../../assets/homen.webp"
import { ButtonSimulator } from "../../components/Simulator/styled";
import { CaretRight, ChatDots, CurrencyDollarSimple, WarningCircle, X } from "phosphor-react";
import { SimulationButton } from "../../components/SimulationButton";
import * as AlertDialog from "@radix-ui/react-alert-dialog"

 
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


            <AlertContainer className="container">
                <WarningCircle size={32} />
                <strong>Para a sua segurança</strong>
                <span>A Oestecred não solicita nenhum pagamento antecipado pra liberar o seu empréstimo</span>
            </AlertContainer>

            <Navigator >
                <div className="container">
                    <h3>O que você precisa?</h3>
                    <div >          
                        <NavigatorLink>
                            <WarningCircle size={20} />
                            <span> Mais informações</span>
                            <CaretRight size={20} />
                        </NavigatorLink>

                        <NavigatorLink>
                            <CurrencyDollarSimple size={20} />
                            <span>Simular e contratar</span>
                            <CaretRight size={20} />
                        </NavigatorLink>
                        <NavigatorLink>
                            <ChatDots size={20} />
                            <span>Atendimento</span>
                            <CaretRight size={20} />
                        </NavigatorLink>

                    </div>
                </div>
            </Navigator>

            <AboutProductContainer className="container">
                <AboutProduct>
                    <h2>O que é empréstimo consignado?</h2>
                    <SimulationButton link="https://api.whatsapp.com/send?phone=5519993178152" text="Contrate agora" color="blue"/>
                    <a href="https://api.whatsapp.com/send?phone=5519993178152">É Servidor publico? ligue para (19)3455-2541</a>
                </AboutProduct>
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

            <Carrosel className="container">
                <h2>Empréstimo consignado: como simular os valores e contratar?</h2>
                <p>Para sua segurança e pela privacidade da análise, solicitamos a confirmação dos seus dados por formalização eletrônica.</p>

                <div>
                    <Option>
                       <h3>1. Escolha por onde prefere ser atendido</h3>
                       <p>Se você é <strong>aposentado ou pensionista do INSS</strong>, aproveite nossas vantagens <strong>Contratando Online</strong>  agora mesmo! Se preferir, você pode contratar através do nosso <strong>WhatsApp</strong>. Se você é <strong>servidor público</strong>, ligue para <strong>, Ligue para 9993178152.</strong></p>
                    </Option>
                    <Option>
                        <h3>2. Confira as ofertas disponíveis e escolha seu empréstimo ideal</h3>
                        <p></p>
                    </Option>
                    <Option>
                        <h3>3. Faça a formalização eletrônica</h3>
                    </Option>
                </div>
                
            </Carrosel>
            
        </CreditoConsignadoContainer>
    )
}