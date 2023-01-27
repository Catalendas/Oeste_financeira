import { BannerPage, CardContainer, CreditoPessoalContainer } from "./styled";
import Fgts from "../../assets/fgts.webp"
import Consignado from "../../assets/consignadobanner.webp"
import Cartao from "../../assets/cartaoconsignadobanner.webp"
import { InfoCredt } from "../../components/InfoCredt";
import { Card } from "../../components/Card";
import { Simulator } from "../../components/Simulator";

export function CreditoPessoal() {
    return (
        <CreditoPessoalContainer>
            <BannerPage>   
                <h2>Credito Pessoal</h2>
                <span>Em ate 24horas em sua conta</span>
            </BannerPage>


            <InfoCredt
                title="Empréstimo Pessoal"
                text=" Empréstimo na conta da luz é uma alternativa para quem precisa de dinheiro urgente, no valor de R$ 200 a R$ 1000. Para solicitá-lo, não é necessário comprovar renda e o dinheiro é liberado em até 24 horas após a aprovação do crédito. O parcelamento pode ser feito em até 18 vezes."
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
                        title="Crédito Consignado"
                        description="É a modalidade mais eficiente e segura de conseguir um empréstimo! Ela usa o salário como garantia, tem as melhores taxas e as parcelas são descontadas direto na folha de pagamento."
                        img={Consignado}
                    />
                    <Card
                        title="Cartão de Crédito Consignado"
                        description="Mais facilidade para você, aposentado e servidor de órgãos conveniados, fazer compras e saques, à vista ou parcelados. Parte da fatura é descontada diretamente do seu benefício/salário, e é você quem autoriza esse percentual."
                        img={Cartao}
                    />
                </div>
            </CardContainer>

        <Simulator />
            
        </CreditoPessoalContainer>
    )
}