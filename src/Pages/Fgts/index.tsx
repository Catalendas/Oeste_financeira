import { BannerPage, CardContainer, FgtsContainer } from "./styled";
import Consignado from "../../assets/consignadobanner.webp"
import Pessoal from "../../assets/creditopessoalbanner.webp"
import Cartao from "../../assets/cartaoconsignadobanner.webp"
import { InfoCredt } from "../../components/InfoCredt";
import { Card } from "../../components/Card";
import { Simulator } from "../../components/Simulator";

export function Fgts() {
    return (
        <FgtsContainer>
            <BannerPage>   
                <h2>Antecipação do FGTS</h2>
                <span>No memos dia em sua conta</span>
            </BannerPage>
            
            <InfoCredt
                title="Antecipação do FGTS"
                text="Ative a modalidade de Saque-Aniversário e autorize a Oeste a te ajudar. Você faz isso no app oficial do FGTS ou no site da Caixa. Você simula o empréstimo, revisa os termos e faz a contratação diretamente com a Oeste. Você não precisa fazer mais nada após a liberação do crédito."
            />
            

            <CardContainer className="container">
                <h2>Outras soluções que podem ajudar você</h2>

                <div>
                    <Card 
                        title="Crédito Consignado"
                        description="É a modalidade mais eficiente e segura de conseguir um empréstimo! Ela usa o salário como garantia, tem as melhores taxas e as parcelas são descontadas direto na folha de pagamento."
                        img={Consignado}
                    />
                    <Card
                        title="Crédito Pessoal"
                        description="Para solicitá-lo, não é necessário comprovar renda e o dinheiro é liberado em até 24 horas após a aprovação do crédito. O parcelamento pode ser feito em até 18 vezes"
                        img={Pessoal}
                    />
                    <Card
                        title="Cartão de Crédito Consignado"
                        description="Mais facilidade para você, aposentado e servidor de órgãos conveniados, fazer compras e saques, à vista ou parcelados. Parte da fatura é descontada diretamente do seu benefício/salário, e é você quem autoriza esse percentual. Sua fatura é mensal, de acordo com a utilização do seu cartão."
                        img={Cartao}
                    />
                </div>
            </CardContainer>

        <Simulator />
            
        </FgtsContainer>
    )
}