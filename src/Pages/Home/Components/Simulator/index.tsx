import { useState } from "react";
import { 
    SimulatorContainer, 
    CardSimulator, 
    SimulatorCard, 
    SimulatorTitleContainer, 
    FormSimulator, 
    OptionsContainer, 
    OptionsButton,
    SimulatorContent,
    Results
} from "./styled";
import girl from "../../../../assets/girlSimulation.png"
import { priceFormatter } from "../../../../utils/formatedMoney";
import { SimulationButton } from "../../../../components/SimulationButton";
import React from "react";

export function Simulator() {
    const [ rangeValue, setRengeValue] = useState([2000])
    const [ loanAmount, setLoanAmont] = useState(0)

    function HandleSum(event: any) {
        const rangeEventValue = event.target.value


        setRengeValue(rangeEventValue)
    }

    console.log(rangeValue)
    

    return (
        <SimulatorContainer className="container">
            <h2>Crédito consignado</h2>
            
            <SimulatorContent>
                
                <SimulatorTitleContainer>
                    <h2>Qual o tamanho do seu sonho?</h2>
                </SimulatorTitleContainer>            

                <CardSimulator>
                    <img src={girl} />

                    <SimulatorCard>

                        <FormSimulator>
                            

                            <section>         
                                    <p>De quanto você precisa?</p>
                                    <span>{priceFormatter.format( Number(rangeValue))}</span> 
                                    <input type="range" onChange={HandleSum}  min="20000" max="100000"/>
                            </section>

                            <OptionsContainer>
                                <OptionsButton value="0.097">12</OptionsButton>
                                <OptionsButton value="0.054">24</OptionsButton>
                                <OptionsButton value="0.042">36</OptionsButton>
                                <OptionsButton value="0.035">48</OptionsButton>
                                <OptionsButton value="0.031">60</OptionsButton>
                                <OptionsButton value="0.028">72</OptionsButton>
                                <OptionsButton value="0.027">84</OptionsButton>
                                <OptionsButton value="0.026">96</OptionsButton>
                            </OptionsContainer>

                            <Results>
                                <span>Valor aprocimado da parcela/mês</span>
                                <p>R$ 114,00</p>
                                <span>Os valores podem variar de acordo com o convênio</span>
                            </Results>

                            <SimulationButton text="Simular agora" color="blue"/>

                        </FormSimulator>
                        
                    </SimulatorCard>
                </CardSimulator>
            </SimulatorContent>
           
        </SimulatorContainer>
    )
}