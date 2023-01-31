import { AlertContainer, BannerPage, CreditoConsignadoContainer, ImageContainer, Navigator, NavigatorLink, TilteContainer} from "./styled";
import homen from "../../assets/homen.webp"
import { ButtonSimulator } from "../../components/Simulator/styled";
import { CaretRight, ChatDots, CurrencyDollarSimple, WarningCircle } from "phosphor-react";
 
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

            <div>
                faf
            </div>
            
        </CreditoConsignadoContainer>
    )
}