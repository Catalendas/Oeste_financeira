import { useState } from "react";
import { SimulatoContainer } from "./styled";

export function Simulator() {
    const [ rangeValue, setRengeValue] = useState(0)
    const [ loanAmount, setLoanAmont] = useState(0)

    function HandleSum(event: any) {
        const rangeEventValue = event.target.value
        const LoanAmount = 0

        const Total = LoanAmount + rangeEventValue

        setRengeValue(rangeEventValue)
        setLoanAmont(Total)
    }

    return (
        <SimulatoContainer>
            De quanto você precisa?
            <span>{rangeValue}</span> 
            <input type="range" onChange={HandleSum} value={rangeValue} min="2000" max="100000"/>
            <input type="radio" id="INSS"/>
            <label htmlFor="INSS">INSS</label>
            <br />
            <input type="radio" />
        </SimulatoContainer>
    )
}