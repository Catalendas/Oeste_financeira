import {   CreditoPessoalContainer } from "./styled";
import { Banner } from "./Components/Banner";
import { About } from "./Components/About";
import { Why } from "./Components/Why";

export function CreditoPessoal() {
    return (
        <CreditoPessoalContainer>
            <Banner/>
            <About/>
            <Why/>

        </CreditoPessoalContainer>
    )
}