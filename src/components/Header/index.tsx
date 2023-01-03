import { HeaderContainer, HeaderLinks } from "./styled";
import Logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";

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
                        <ul>
                            <NavLink to="/">
                                Inicio
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink to="/fgts">
                                FGTS
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink to="/creditoconsignado">
                                Crédito consignado
                            </NavLink>
                        </ul>
                        <ul>
                        <NavLink to="/creditopessoal">
                                Crédito Pessoal
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink to="/cartaoconsignado">
                                Cartão de Crédito Consignado
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink to="/sobrenos">
                                Sobre nós
                            </NavLink>
                        </ul>
                    </li>
                </HeaderLinks>
            </div>
        </HeaderContainer>
    )
}