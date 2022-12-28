import { useState } from "react";
import { SimulatoContainer } from "./styled";
import girl from "../../../../assets/girlSimulation.png"

export function Simulator() {
    const [ rangeValue, setRengeValue] = useState(20000)
    const [ loanAmount, setLoanAmont] = useState(0)

    function HandleSum(event: any) {
        const rangeEventValue = event.target.value
        const LoanAmount = 0

        const Total = rangeEventValue + LoanAmount  

        setRengeValue(rangeEventValue)
        setLoanAmont(Total)
    }

    return (
        <SimulatoContainer className="container">
            <img src={girl} />

            <div>
                De quanto você precisa?
                <span>{rangeValue}</span> 
                <input type="range" onChange={HandleSum} value={rangeValue} min="20000" max="100000"/>
            </div>
           
        </SimulatoContainer>
    )
}