import { InfoCredtContainer, InfoCredtContent, InfoCredtText } from "./styled";
import Fgts from "../../assets/contratofgts.webp"
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { RegisterModal } from "../Simulator/registerModal";

interface InfoCreditProps {
    title: string
    text: string
}

export function InfoCredt({title, text}: InfoCreditProps) {
    return (
        <InfoCredtContainer className="container">
            <InfoCredtContent>
                <InfoCredtText>

                    <h2>{title}</h2>
                    <p>{text}</p>   
                           
                    <AlertDialog.Root>
                                <AlertDialog.Trigger asChild>
                                    <button>Fale Conosco</button>
                                </AlertDialog.Trigger>

                                <RegisterModal rate={0} range={[0]}/>
                            </AlertDialog.Root>
                </InfoCredtText>

                <img src={Fgts} alt="Fechando o Contrato"/>
            </InfoCredtContent>

            
        </InfoCredtContainer>
    )
}