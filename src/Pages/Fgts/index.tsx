import { BannerPage, CardContainer, FgtsContainer } from "./styled";
import FGTS from '../../assets/fgts.png'
import { InfoCredt } from "../../components/InfoCredt";
import { Card } from "../../components/Card";

export function Fgts() {
    return (
        <FgtsContainer>
            <BannerPage>   
                <h2>Antecipação do FGTS</h2>
                <span>No memos dia em sua conta</span>
            </BannerPage>


            <InfoCredt/>
            

            <CardContainer className="container">
                <h2>Outras soluções que podem ajudar você</h2>

                <div>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </CardContainer>
            
        </FgtsContainer>
    )
}