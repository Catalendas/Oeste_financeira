import { HeaderContainer, HeaderLinks } from "./styled";
import Logo from "../../assets/logo.png"

export function Header() {
    return (
        <HeaderContainer >
            <div className="container">
                <div>
                    <img src={Logo}/>
                    <span>Oeste Financeira</span>
                </div>

                <HeaderLinks>
                    <li>
                        <ul>FGTS</ul>
                        <ul>Crédito consignado</ul>
                    </li>
                </HeaderLinks>
            </div>
        </HeaderContainer>
    )
}