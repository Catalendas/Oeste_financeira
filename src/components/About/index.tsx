import { AboutContainer, AboutContent, CardContainer } from "./styled";
import Team from "../../assets/Oeste.webp"
import { Card } from "../Card";

import Fgts from "../../assets/fgts.webp"
import Pessoal from "../../assets/creditopessoalbanner.webp"
import Cartao from "../../assets/cartaoconsignadobanner.webp"
import { Simulator } from "../../Pages/Home/Components/Simulator";

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
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore vel molestias. Repudiandae alias consequuntur veniam nobis tenetur. Consequuntur unde similique labore nobis laboriosam accusantium corrupti sapiente quo, distinctio quis!"
                        img={Fgts}
                    />
                    <Card
                        title="Crédito Pessoal"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore vel molestias. Repudiandae alias consequuntur veniam nobis tenetur. Consequuntur unde similique labore nobis laboriosam accusantium corrupti sapiente quo, distinctio quis!"
                        img={Pessoal}
                    />
                    <Card
                        title="Cartão de Crédito Consignado"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore vel molestias. Repudiandae alias consequuntur veniam nobis tenetur. Consequuntur unde similique labore nobis laboriosam accusantium corrupti sapiente quo, distinctio quis!"
                        img={Cartao}
                    />    
                </div>        
            </CardContainer>

            <Simulator/>
        </AboutContainer>
    )
}