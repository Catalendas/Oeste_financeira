import { Banner } from "./Components/Banner";
import { AboutForyou } from "./Components/AboutForyou";
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
            <AboutForyou />
            <HowItWorks/>
        </HomeContainer>
    )
}