import { useState } from "react";
import { SimulatorContainer, CardSimulator, SimulatorContent, SimulatorTitleContainer} from "./styled";
import girl from "../../../../assets/girlSimulation.png"
import { formatedMoney } from "../../../../utils/formatedMoney";
import { SimulationButton } from "../../../../components/SimulationButton";

export function Simulator() {
    const [ rangeValue, setRengeValue] = useState([2000])
    const [ loanAmount, setLoanAmont] = useState(0)

    function HandleSum(event: any) {
        const rangeEventValue = event.target.value

        const formated = formatedMoney(rangeEventValue)

        setRengeValue(rangeEventValue)
    }

    console.log(rangeValue)
    

    return (
        <SimulatorContainer className="container">
            <h2>Crédito consignado</h2>
            
            <div>
                
                <SimulatorTitleContainer>
                    <h2>Qual o tamanho do seu sonho?</h2>
                </SimulatorTitleContainer>            

                <CardSimulator>
                    <img src={girl} />

                    <SimulatorContent>
                        <p>Faça a simulação do credito consignado</p>
                        <h2>De quanto você precisa?</h2>

                    <div>         
                            <span>R$ {rangeValue}</span> 
                            <input type="range" onChange={HandleSum}  min="20000" max="100000"/>

                    </div>

                    
                    </SimulatorContent>
                </CardSimulator>
            </div>
           
        </SimulatorContainer>
    )
}