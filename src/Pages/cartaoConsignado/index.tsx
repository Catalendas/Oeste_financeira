import { Acordion } from "../../components/Acordion";
import { Abaut } from "./components/About";
import { Banner } from "./components/Banner";
import { Benefitis } from "./components/benfits";
import { Layer } from "./components/Layer";
import { AcordionContainer, CartaoConsignadoBanner } from "./styled";


export function CartaoConsignado() {
    return (
        <CartaoConsignadoBanner>
            <Banner/>
            <Abaut />
            <Layer />
            <Benefitis />
            <AcordionContainer className="container">
                <h2>Tire suas dúvidas</h2>
                <Acordion title="O que é Cartão de Crédito Consignado?" content="
                O cartão consignado é semelhante a um cartão de crédito comum. A grande diferença é que o valor mínimo da fatura do cartão é descontado automaticamente do benefício ou do contracheque, reduzindo as chances de inadimplência."/>

                <Acordion title="Quais as taxas do cartão de crédito consignado?" content="
                A taxa de juros do cartão de crédito consignado, na modalidade do rotativo, é de 3,06% ao mês. Mesmo sendo uma taxa menor do que a dos cartões de crédito comuns, recomendamos que você sempre pague o valor total da fatura, após o desconto do valor mínimo."/>

                <Acordion title="Quem pode contratar o cartão de crédito consignado?" content="
                Aposentados e pensionistas do INSS, bem como servidores públicos de instituições que tenham convênio com o BMG, desde que tenham margem consignável disponível." />  

                <Acordion title="Onde posso usar o cartão consignado?" content="
                O cartão de crédito consignado pode ser usado em estabelecimentos credenciados à bandeira Mastercard, nacionais ou internacionais, de forma online ou presencial, para realização de compras e pagamento de serviços. Você também pode utilizá-lo para realização de saques* de parte do limite de crédito do cartão (*sujeito à incidência de encargos, consulte condições)."  />    

                <Acordion title="Vocês cobram algum valor para a liberação do cartão?" content="
                Para emissão de primeira e segunda via do cartão pode haver um pequeno custo, conforme sejam as condições do seu convênio. Em caso de cobrança, você será avisado antes de contratar, fique tranquilo!" />       
              
            </AcordionContainer>
        </CartaoConsignadoBanner>
    )
}