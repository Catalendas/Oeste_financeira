import { Navigator } from "../creditoConsignado/components/NavigatorContainer";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { FgtsContainer } from "./styled";


export function Fgts() {
    return (
       <FgtsContainer>
            <Banner/>
            <Navigator/>
            <About/>
       </FgtsContainer>
    )
}