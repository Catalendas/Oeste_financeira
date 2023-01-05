import { useState } from "react";
import { SimulatorContainer, CardSimulator, SimulatorContent, SimulatorTitleContainer, FormSimulator, OptionsContainer} from "./styled";
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

                        <FormSimulator>
                            

                            <div>         
                                    <p>De quanto você precisa?</p>
                                    <span>R$ {rangeValue}</span> 
                                    <input type="range" onChange={HandleSum}  min="20000" max="100000"/>
                            </div>

                            <OptionsContainer>
                                <button type="button">1</button>
                                <button type="button">1</button>
                                <button type="button">1</button>
                                <button type="button">1</button>
                                <button type="button">1</button>
                                <button type="button">1</button>
                                <button type="button">1</button>
                                <button type="button">1</button>
                            </OptionsContainer>

                        </FormSimulator>
                        
                    </SimulatorContent>
                </CardSimulator>
            </div>
           
        </SimulatorContainer>
    )
}