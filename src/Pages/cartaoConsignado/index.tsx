import { Abaut } from "./components/About";
import { Banner } from "./components/Banner";
import { Benefitis } from "./components/benfits";
import { Layer } from "./components/Layer";
import { CartaoConsignadoBanner } from "./styled";


export function CartaoConsignado() {
    return (
        <CartaoConsignadoBanner>
            <Banner/>
            <Abaut />
            <Layer />
            <Benefitis />
        </CartaoConsignadoBanner>
    )
}