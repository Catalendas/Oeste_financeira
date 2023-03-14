import { HeaderContainer, HeaderLinks } from "./styled";
import Logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
import { FacebookLogo, InstagramLogo, TextAlignRight } from "phosphor-react";

interface HeaderProps {
    setMenuIsVisible: (state:boolean) => void
}

export function Header({ setMenuIsVisible }: HeaderProps) {
    return (
        <HeaderContainer >
            <div className="container">
                <div>
                    <NavLink to="/" >
                        <img src={Logo} alt="" />
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
                                Cartão Consignado
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobrenos">
                                Sobre nós
                            </NavLink>
                        </li>
                        <li>|</li>
                        <li>
                            <a href="https://www.facebook.com/OestecredPromotora" target="_blank"><FacebookLogo size={20}/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/OestecredPromotora/" target="_blank"><InstagramLogo size={20}/></a>
                        </li>
                    </ul>
                </HeaderLinks>

                <div >
                    <TextAlignRight size={50} onClick={() => setMenuIsVisible(true)}/>
                </div>
            </div>
        </HeaderContainer>
    )
}