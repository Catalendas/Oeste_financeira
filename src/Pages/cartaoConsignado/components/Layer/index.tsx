import { Globe, Receipt } from "phosphor-react";
import { LayerContainer, LayerOptions } from "./styled";

export function Layer() {
    return (
        <LayerContainer>
            <div className="container">
                <h2>Como usar seu cartão consignado</h2>

                <LayerOptions>
                    <Globe size={36}/>
                    <div>
                        <strong>Compras no Brasil e no exterior</strong>
                    </div>
                </LayerOptions>

                <LayerOptions>
                    <Receipt size={36}/>
                    <div>
                        <strong>Compras no Brasil e no exterior</strong>
                    </div>
                </LayerOptions>
            </div>
        </LayerContainer>
    )
}