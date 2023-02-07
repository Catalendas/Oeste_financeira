import { CaretRight, ChatDots, CurrencyDollarSimple, WarningCircle } from "phosphor-react";
import { AlertContainer, NavigatorContainer, NavigatorLink, } from "./styled";

export function Navigator() {
    return (
        <>
             <AlertContainer className="container">
                <WarningCircle size={32} />
                <strong>Para a sua segurança</strong>
                <span>A Oestecred não solicita nenhum pagamento antecipado pra liberar o seu empréstimo</span>
            </AlertContainer>

            <NavigatorContainer>
                <div className="container">
                    <h3>O que você precisa?</h3>
                    <div >          
                        <NavigatorLink activeClass="active" to="information" spy={true} smooth={true} offset={50} duration={500}>
                            <WarningCircle size={20} />
                            <span> Mais informações</span>
                            <CaretRight size={20} />
                        </NavigatorLink>

                        <NavigatorLink activeClass="active" to="cost" spy={true} smooth={true} offset={50} duration={500}>
                            <CurrencyDollarSimple size={20} />
                            <span>Simular e contratar</span>
                            <CaretRight size={20} />
                        </NavigatorLink>
                        <NavigatorLink activeClass="active" to="refin" spy={true} smooth={true} offset={50} duration={500}>
                            <ChatDots size={20} />
                            <span>Atendimento</span>
                            <CaretRight size={20} />
                        </NavigatorLink>

                    </div>
                </div>
            </NavigatorContainer>
        </>
    )
}