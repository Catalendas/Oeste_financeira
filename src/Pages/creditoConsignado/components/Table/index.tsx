import { WhatsappLogo } from "phosphor-react";
import { SimulationButton } from "../../../../components/SimulationButton";
import { ContracHere, TableContainer } from "./styled";
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { RegisterModal } from "../../../../components/Simulator/registerModal";
import { ButtonSimulator } from "../../../../components/Simulator/styled";

export function Table(){

    const ratePrice = 0
    const rangeValue: [] = []

    return (
        <div className="container">
            <TableContainer >
                <thead>
                    <th>
                        <td><strong>Custos detalhados</strong></td>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>Valor solicitador</td>
                        <td>R$ 5.000,00</td>
                    </tr>
                    <tr>
                        <td>Quantidade de parcelas</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Taxa de juros</td>
                        <td>1,80% a.m. e 23,87% a.a.</td>
                    </tr>
                    <tr>
                        <td>Custo efetivo total</td>
                        <td>2,01% a.m. e 27,45% a.a.</td>
                    </tr>
                    <tr>
                        <td>IOF</td>
                        <td>2,1%</td>
                    </tr>
                </tbody>
            </TableContainer>

            <ContracHere>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=551934552541&text=Sou%20servidor%20publico%20e%20gostaria%20de%20fazer%20o%20empr%C3%A9stimo%20consignado">É servidor publico? ligue para (19)3455-2541</a>

                <AlertDialog.Root>
                    <AlertDialog.Trigger asChild>
                        <ButtonSimulator color="blue">Contrate agora</ButtonSimulator>
                    </AlertDialog.Trigger>

                    <RegisterModal rate={ratePrice} range={rangeValue}/>
                </AlertDialog.Root>

                
                <div>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=551934552541&text=Sou%20servidor%20publico%20e%20gostaria%20de%20fazer%20o%20empr%C3%A9stimo%20consignado"><SimulationButton icon={<WhatsappLogo size={30}/>} text="Entre em contato agora"  color="green" size={20}/></a>  
                </div>  
            </ContracHere>
        </div>
    )
}