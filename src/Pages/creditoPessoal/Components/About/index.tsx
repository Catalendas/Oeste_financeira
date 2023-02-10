import { AboutContainer, AboutOptions, AboutTitleDescription } from "./styled";

export function About() {
    return (
        <AboutContainer className="container">
            <AboutTitleDescription>
                <h2>O que é o empréstimo pessoal</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro praesentium dignissimos facilis eligendi modi atque quas, dicta ducimus quasi adipisci error illo natus eos nesciunt eum ipsa voluptatem veritatis!</p>
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
                    <span>Tudo Feiot via WhatsApp sem saiar de casa</span>
                </div>
            </AboutOptions>

            
        </AboutContainer>
    )
}