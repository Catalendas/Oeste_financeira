import { HeaderContainer, HeaderLinks } from "./styled";
import Logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
import { TextAlignRight } from "phosphor-react";

interface HeaderProps {
    setMenuIsVisible: (state:boolean) => void
}

export function Header({ setMenuIsVisible }: HeaderProps) {
    return (
        <HeaderContainer >
            <div className="container">
                <div>
                    <NavLink to="/" >
                        <img src={Logo} alt="Logo"/>
                        <span>Oeste Financeira</span>
                    </NavLink>
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

                <TextAlignRight size={50} onClick={() => setMenuIsVisible(true)}/>
            </div>
        </HeaderContainer>
    )
}