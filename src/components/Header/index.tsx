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
                    <ul>
                        <li>
                            <NavLink to="/">
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/fgts">
                                FGTS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/creditoconsignado">
                                Crédito consignado
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to="/creditopessoal">
                                Crédito Pessoal
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cartaoconsignado">
                                Cartão de Crédito Consignado
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobrenos">
                                Sobre nós
                            </NavLink>
                        </li>
                    </ul>
                </HeaderLinks>

                <TextAlignRight size={50} onClick={() => setMenuIsVisible(true)}/>
            </div>
        </HeaderContainer>
    )
}