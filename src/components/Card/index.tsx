import { CardContainer, CardContent } from "./styled";
import Consignado from "../../assets/consignado.jpg"

export function Card() {
    return (
        <CardContainer className="card">
            <img src={Consignado} />
            <CardContent className="card">
                <h2>Card title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit eum incidunt, perspiciatis deserunt, aspernatur distinctio libero eligendi voluptatem debitis aut quod pariatur quos? Unde aut in velit esse laudantium.</p>

                <button>Entrar em contato</button>
            </CardContent>
        </CardContainer>
    )
}