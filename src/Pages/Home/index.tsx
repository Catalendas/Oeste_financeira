import { Banner } from "./Components/Banner";
import { HowItWorks } from "./Components/HowItWorks";
import { Info } from "./Components/Infos";
import { Simulator } from "./Components/Simulator";
import { HomeContainer} from "./styled";


export function Home() {
    return(
        <HomeContainer>
            <Banner/>
            <Info/>
            <HowItWorks/>
            <Simulator/>
        </HomeContainer>
    )
}