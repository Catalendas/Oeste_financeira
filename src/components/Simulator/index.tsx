import { useEffect, useState } from "react";
import { 
    SimulatorContainer, 
    CardSimulator, 
    SimulatorCard, 
    SimulatorTitleContainer, 
    FormSimulator, 
    OptionsContainer, 
    OptionsButton,
    SimulatorContent,
    Results,
    ButtonSimulator
} from "./styled";
import girl from "../../assets/girlsimulation.webp"
import { priceFormatter } from "../../utils/formatedMoney";
import { SimulationButton } from "../SimulationButton";
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { RegisterModal } from "./registerModal";

export function Simulator() {
    const [ rangeValue, setRengeValue] = useState([2000])
    const [ ratePrice, setRatePrice] = useState(0)

    function handlePlus(event: any) {
        const radioValue = event.target.value

        const results = Number(rangeValue) * radioValue

        setRatePrice(results)
    }
    
    function HandleSum(event: any) {
        const rangeEventValue = event.target.value

        setRengeValue(rangeEventValue)
        setRatePrice(0)
    }

    return (
        <SimulatorContainer className="container">
            <h2>Simular agora</h2>
            
            <SimulatorContent>
                
                <SimulatorTitleContainer>
                    <h2>Qual o tamanho do seu sonho?</h2>
                </SimulatorTitleContainer>            

                <CardSimulator>
                    <img src={girl} alt="Avatar da pagina"/>

                    <SimulatorCard>

                        <FormSimulator>
                            
                            <section>         
                                    <p>De quanto você precisa?</p>
                                    <span>{priceFormatter.format( Number(rangeValue))}</span> 
                                    <input type="range" onChange={HandleSum}  min="2000" max="30000"/>
                            </section>

                            <OptionsContainer>
                                <OptionsButton value="0.097" onClick={handlePlus}>12</OptionsButton>
                                <OptionsButton value="0.054" onClick={handlePlus}>24</OptionsButton>
                                <OptionsButton value="0.042" onClick={handlePlus}>36</OptionsButton>
                                <OptionsButton value="0.035" onClick={handlePlus}>48</OptionsButton>
                                <OptionsButton value="0.031" onClick={handlePlus}>60</OptionsButton>
                                <OptionsButton value="0.028" onClick={handlePlus}>72</OptionsButton>
                                <OptionsButton value="0.027" onClick={handlePlus}>84</OptionsButton>
                                <OptionsButton value="0.026" onClick={handlePlus}>96</OptionsButton>
                            </OptionsContainer>

                            <Results>
                                <span>Valor aprocimado da parcela/mês</span>
                                <p>{priceFormatter.format( Number(ratePrice))}</p>
                                <span>Os valores podem variar de acordo com o convênio</span>
                            </Results>
                            
                            <AlertDialog.Root>
                                <AlertDialog.Trigger asChild>
                                    {ratePrice == 0 ? <ButtonSimulator disabled type="button" color="blue">Simular</ButtonSimulator> : <ButtonSimulator type="button" color="blue">Simular</ButtonSimulator> }
                                </AlertDialog.Trigger>

                                <RegisterModal rate={ratePrice} range={rangeValue}/>
                            </AlertDialog.Root>
                            

                        </FormSimulator>
                        
                    </SimulatorCard>
                </CardSimulator>
            </SimulatorContent>
           
        </SimulatorContainer>
    )
}