import { InfoCredtContainer, InfoCredtContent, InfoCredtText } from "./styled";
import Fgts from "../../assets/contratofgts.webp"

export function InfoCredt() {
    return (
        <InfoCredtContainer className="container">
            <InfoCredtContent>
                <InfoCredtText>
                    <h2>Antecipação do FGTS</h2>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti tenetur temporibus pariatur, architecto excepturi aut eum odit labore quas laudantium corporis et magni expedita minus perferendis maxime natus exercitationem voluptate.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi at laudantium placeat voluptates magnam inventore, doloribus quis voluptatem facilis harum, eius porro minima veritatis nemo dolores eos temporibus voluptate?
                    </p>

                    <button>Fale Conosco</button>
                </InfoCredtText>

                <img src={Fgts}/>
            </InfoCredtContent>

            
        </InfoCredtContainer>
    )
}