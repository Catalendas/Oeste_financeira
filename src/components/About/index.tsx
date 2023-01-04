import { AboutContainer, AboutContent } from "./style";
import Team from "../../assets/team.webp"

export function About() {
    return (
        <AboutContainer>
            <h2>Quem somos nós</h2>
            <AboutContent>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum debitis delectus sapiente accusantium! Explicabo voluptas possimus impedit dolor recusandae dolore voluptatem repellat atque, ut molestiae numquam, velit ea at voluptates.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non deserunt accusantium quis provident consequatur at, libero ratione doloribus obcaecati! Voluptatibus ullam quasi impedit incidunt vel magni. Dignissimos, quae at!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolores hic, animi quaerat modi rerum quis sed iure accusamus molestias deleniti ea consequuntur odio maxime ullam quo optio cupiditate exercitationem?</p>
                </div>
                
                <img src={Team} />
            </AboutContent>
        </AboutContainer>
    )
}