import { InfoCredtContainer, InfoCredtContent, InfoCredtText } from "./styled";
import Fgts from "../../assets/contratofgts.webp"
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { RegisterModal } from "../Simulator/registerModal";

export function InfoCredt() {
    return (
        <InfoCredtContainer className="container">
            <InfoCredtContent>
                <InfoCredtText>
                    <h2>Antecipação do FGTS</h2>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti tenetur temporibus pariatur, architecto excepturi aut eum odit labore quas laudantium corporis et magni expedita minus perferendis maxime natus exercitationem voluptate.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi at laudantium placeat voluptates magnam inventore, doloribus quis voluptatem facilis harum, eius porro minima veritatis nemo dolores eos temporibus voluptate?
                    </p>

                    
                    <AlertDialog.Root>
                                <AlertDialog.Trigger asChild>
                                    <button>Fale Conosco</button>
                                </AlertDialog.Trigger>

                                <RegisterModal rate={0} range={[0]}/>
                            </AlertDialog.Root>
                </InfoCredtText>

                <img src={Fgts}/>
            </InfoCredtContent>

            
        </InfoCredtContainer>
    )
}