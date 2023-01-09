import { XCircle } from 'phosphor-react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, MenuMobileLinks } from './style'

interface MenuMobileProps {
    menuIsVisible: boolean
    setMenuIsVisible: (state:boolean) => void
}

export function MenuBobile({menuIsVisible, setMenuIsVisible}: MenuMobileProps) {
    
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? "hidden" : "auto"
    }, [menuIsVisible])
    
    return (
        <Container isVisible={menuIsVisible}>

            <XCircle size={45} onClick={() => setMenuIsVisible(false)}/>

            <MenuMobileLinks isVisible={menuIsVisible}>
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
                </MenuMobileLinks>
        </Container>
    )
}