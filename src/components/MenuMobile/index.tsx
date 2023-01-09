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
                            <NavLink to="/" onClick={() => setMenuIsVisible(false)}>
                                Inicio
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink to="/fgts" onClick={() => setMenuIsVisible(false)}>
                                FGTS
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink to="/creditoconsignado" onClick={() => setMenuIsVisible(false)}>
                                Crédito consignado
                            </NavLink>
                        </ul>
                        <ul>
                        <NavLink to="/creditopessoal" onClick={() => setMenuIsVisible(false)}>
                                Crédito Pessoal
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink to="/cartaoconsignado" onClick={() => setMenuIsVisible(false)}>
                                Cartão de Crédito Consignado
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink to="/sobrenos" onClick={() => setMenuIsVisible(false)}>
                                Sobre nós
                            </NavLink>
                        </ul>
                    </li>
                </MenuMobileLinks>
        </Container>
    )
}