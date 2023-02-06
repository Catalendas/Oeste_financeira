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
            </NavigatorContainer>
        </>
    )
}