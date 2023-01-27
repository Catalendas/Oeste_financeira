import { BannerPage, CardContainer, CartaoConsignadoContainer} from "./styled";
import Fgts from "../../assets/fgts.webp"
import Pessoal from "../../assets/creditopessoalbanner.webp"
import Cartao from "../../assets/consignadobanner.webp"
import { InfoCredt } from "../../components/InfoCredt";
import { Card } from "../../components/Card";
import { Simulator } from "../../components/Simulator";

export function CartaoConsignado() {
    return (
        <CartaoConsignadoContainer>
            <BannerPage>   
                <h2>Cartão de crédito consignado</h2>
                <span>Mais crédito para você!!</span>
            </BannerPage>


            <InfoCredt
                text="O cartão de crédito consignado funciona como um cartão normal, que pode ser utilizado em compra em comércios, saques ou para pagar serviços.  A diferença é que, do mesmo modo que o empréstimo consignado, a fatura é descontada diretamente do holerite ou conta bancária de quem contrata o produto."
                title="Cartão de crédito consignado"
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
                        title="Crédito Consignado"
                        description="É a modalidade mais eficiente e segura de conseguir um empréstimo! Ela usa o salário como garantia, tem as melhores taxas e as parcelas são descontadas direto na folha de pagamento."
                        img={Cartao}
                    />
                </div>
            </CardContainer>

        <Simulator />
            
        </CartaoConsignadoContainer>
    )
}