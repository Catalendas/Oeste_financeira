
import { CheckCircle, ClockClockwise, Money } from "phosphor-react";
import { Cards } from "./Cards";
import { InfoConteiner, TitleContent } from "./styled";

export function Info() {
    return(
        <InfoConteiner className="container">
            <TitleContent>Conheça as vantagens do crédito consignado Oeste</TitleContent>
            <div>
                <Cards 
                    icon={<Money size={30}/>} 
                    title="Cabe no bolso" 
                    description="Até 3x menos taxas comparado aos empréstimos comuns. Pague em até 84x."
                />

                <Cards 
                    icon={<ClockClockwise size={30}/>} 
                    title="Sem pegar filas" 
                    description="Contrate 100% online, pelo site ou aplicativo."
                />

                <Cards 
                    icon={<CheckCircle size={30}/>} 
                    title="Sem pegar filas" 
                    description="As parcelas são descontadas diretamente da sua folha de pagamento"
                />
            </div>
        </InfoConteiner>
    )   
}