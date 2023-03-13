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
    Results,
    ButtonSimulator
} from "./styled";
import { priceFormatter } from "../../utils/formatedMoney";
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { RegisterModal } from "./registerModal";
import { AirplaneTilt, HouseLine, NewspaperClipping, PlusCircle } from "phosphor-react";

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
            
            <SimulatorContent>
                
                <SimulatorTitleContainer>
                    <h2>Empréstimo consignado fácil e rápido é com a Oestecred!</h2>
                    <p>O nosso empréstimo pessoal para os servidores públicos federais e militares foi feito para você fazer tudo o que precisa.</p>
                    <div>
                        <span><NewspaperClipping size={32} /> Pagar as contas</span>
                        <span><HouseLine size={32} /> Construir a casa</span>
                        <span><AirplaneTilt size={32} /> Viajar</span>
                        <span><PlusCircle size={32} /> E muito mais</span>
                    </div>
                </SimulatorTitleContainer>            

                <CardSimulator>

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