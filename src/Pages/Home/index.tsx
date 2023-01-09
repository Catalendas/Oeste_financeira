import { Banner } from "./Components/Banner";
import { CommonQuestions } from "./Components/CommonQuestions";
import { HowItWorks } from "./Components/HowItWorks";
import { Info } from "./Components/Infos";
import { Simulator } from "../../components/Simulator";
import { HomeContainer} from "./styled";
import { MenuBobile } from "../../components/MenuMobile";
import { useState } from "react";


export function Home() {
    

    return(
        <HomeContainer>
            <Banner/>
            <Info/>
            <HowItWorks/>
            <Simulator/>
            <CommonQuestions />
        </HomeContainer>
    )
}