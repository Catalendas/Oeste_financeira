import { BannerPage, CardContainer, CreditoConsignadoContainer} from "./styled";
import Fgts from "../../assets/fgts.webp"
import Pessoal from "../../assets/creditopessoalbanner.webp"
import Cartao from "../../assets/cartaoconsignadobanner.webp"
import { InfoCredt } from "../../components/InfoCredt";
import { Card } from "../../components/Card";
import { Simulator } from "../../components/Simulator";

export function CreditoConsignado() {
    return (
        <CreditoConsignadoContainer>
            <BannerPage>   
                <h2>Crédito Consignado</h2>
                <span>No memos dia em sua conta</span>
            </BannerPage>


            <InfoCredt 
            
                title="Credito Consignado"  
                text="
                O crédito consignado é uma modalidade de crédito onde as parcelas são descontadas diretamente na folha de pagamento, somente servidores públicos, aposentados e pensionistas do INSS conseguem fazer essa modalidade de empréstimo, ele é ideal para quem está precisando dá quele dinheirinho extra."
            />
            

            <CardContainer className="container">
                <h2>Outras soluções que podem ajudar você</h2>

                <div>
                    <Card 
                        title="Antecipação do FGTS"
                        description="Com a antecipação do saque aniversário, você dá o saldo do seu FGTS como garantia e os valores são descontados anualmente desse fundo e de maneira automática no mês do seu aniversário."
                        img={Fgts}
                    />
                    <Card
                        title="Crédito Pessoal"
                        description=" Para solicitá-lo, não é necessário comprovar renda e o dinheiro é liberado em até 24 horas após a aprovação do crédito. O parcelamento pode ser feito em até 18 vezes"
                        img={Pessoal}
                    />
                    <Card
                        title="Cartão de Crédito Consignado"
                        description="Mais facilidade para você, aposentado e servidor de órgãos conveniados, fazer compras e saques, à vista ou parcelados. Parte da fatura é descontada diretamente do seu benefício/salário, e é você quem autoriza esse percentual."
                        img={Cartao}
                    />
                </div>
            </CardContainer>

        <Simulator />
            
        </CreditoConsignadoContainer>
    )
}