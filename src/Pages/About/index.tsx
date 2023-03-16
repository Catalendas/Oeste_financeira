import { AboutContainer, AboutContent, CardContainer, ImageContainer } from "./styled";
import Team from "../../assets/Oeste.webp"
import { Handshake, Money } from "phosphor-react";

export function About() {
    return (
        <AboutContainer>
            
            <AboutContent>
                <div>
                    <h2>NOSSA MISSÃO</h2>
                    <p>Gerar valor e satisfazer nossos clientes, prezamos pela evolução de nossos colaboradores e parceiros, atingindo a excelência na maneira de atender e se relacionar como empresa.</p>

                    <h2>Quem somos nós?</h2>
                    <p>Fundada em 2007 a Oeste é uma empresa que atua no ramo imobiliário e também no mercado de empréstimo, ela atua na administração e intermediação de compra e venda de imóveis, a Oeste também é especializada em oferecer crédito descomplicado, rápido e fácil para nossos clientes, com as menores taxas do mercado.</p>
                </div>
                
                <div>
                    <img src={Team} />
                </div>
            </AboutContent>

            
            <CardContainer>
               
            </CardContainer>
        </AboutContainer>
    )
}