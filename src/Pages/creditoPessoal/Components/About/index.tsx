import { SimulationButton } from "../../../../components/SimulationButton";
import { AboutContainer, AboutOptions, AboutTitleDescription } from "./styled";

export function About() {
    return (
        <AboutContainer className="container">
            <AboutTitleDescription>
                <h2>O que é o empréstimo pessoal</h2>

                <p>Essa modalidade de crédito é perfeita para quem precisa de dinheiro com urgência. Com uma conta de energia em seu nome, fornecimento elétrico ativo no endereço e uma conta bancária no nome do titular da conta de energia;
                Além disso, você terá mais facilidade para quitar seu empréstimo, pois as parcelas são debitadas direto na conta de energia. Assim você pode ter mais controle sobre suas contas e não corre o risco de pagar taxas por atraso nas parcelas. </p>
            </AboutTitleDescription>

            <AboutOptions>
                <div>
                    <strong>Menos dor de cabeça</strong>
                    <span>sem alienação de bens.</span>
                </div>

                <div>
                    <strong>Boleto?</strong>
                    <span>Se você precisa de crédito para realizar um sonho, o empréstimo no boleto é uma alternativa.</span>
                </div>

                <div>
                    <strong>Dinheiro Rapido na conta</strong>
                    <span>Tenha o dinheiro na conta em 24h úteis.</span>
                </div>

                <div>
                    <strong>Cliente Oeste contrata o empréstimo pessoal online</strong>
                    <span>Tudo Feito via WhatsApp sem saiar de casa</span>
                </div>
            </AboutOptions>

            <a href="https://wa.me/5519994508753"><SimulationButton text="Simular agora" size={20} color="blue"/></a>
        </AboutContainer>
    )
}