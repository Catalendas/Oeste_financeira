import { AboutContainer, AboutContent, CardContainer } from "./styled";
import Team from "../../assets/Oeste.webp"
import { Card } from "../../components/Card";

import Fgts from "../../assets/fgts.webp"
import Pessoal from "../../assets/creditopessoalbanner.webp"
import Cartao from "../../assets/cartaoconsignadobanner.webp"
import { Simulator } from "../../components/Simulator";

export function About() {
    return (
        <AboutContainer>
            
            <AboutContent>
                <div>
                    <h2>Quem somos nós</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum debitis delectus sapiente accusantium! Explicabo voluptas possimus impedit dolor recusandae dolore voluptatem repellat atque, ut molestiae numquam, velit ea at voluptates.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non deserunt accusantium quis provident consequatur at, libero ratione doloribus obcaecati! Voluptatibus ullam quasi impedit incidunt vel magni. Dignissimos, quae at!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolores hic, animi quaerat modi rerum quis sed iure accusamus molestias deleniti ea consequuntur odio maxime ullam quo optio cupiditate exercitationem?</p>
                </div>
                
                <img src={Team} />
            </AboutContent>

            
            <CardContainer>
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

            <Simulator/>
        </AboutContainer>
    )
}