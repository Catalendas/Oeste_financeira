import { AboutContainer, FooterContainer, FooterContent } from "./styled";
import Logo from '../../assets/logo.png'
import { InfoAbout } from "./infoAbout";
import { EnvelopeOpen, FacebookLogo, InstagramLogo, MapPin, Phone } from "phosphor-react";

export function Footer() {
    return (
        <FooterContainer >
            <FooterContent className="container">
                <AboutContainer>
                    <img src={Logo} alt="Logo"/>

                    <InfoAbout icon={<MapPin size={20} weight="fill"/>} abaut="Rua Floriano Peixoto-625, Centro, Santa Bárbara D'Oeste-Sp" link="https://goo.gl/maps/ZJLpT9568Sfozea56"/>
                    <InfoAbout icon={<Phone size={20} weight="fill"/>} abaut="(19) 994355018" link="https://wa.me/5519994355018"/>
                    <InfoAbout icon={<EnvelopeOpen size={20} weight="fill"/>} abaut="oeste@exemplo.com"/>
                    <InfoAbout abaut="Oeste promotora servicos cadastrais 242342352352532/0001-84"/>
                </AboutContainer>

                <AboutContainer>
                    <InfoAbout abaut="Inicio" link="/"/>
                    <InfoAbout abaut="Sobre nós" link="/sobrenos"/>
                    <InfoAbout abaut="Politica de Privacidade" link="/politicadeprivacidade"/>
                </AboutContainer>

                <AboutContainer>
                    <h3>Nossas redes sociais</h3>
                    <InfoAbout icon={<InstagramLogo size={20} weight="fill" />} abaut="Intagran" link="https://www.instagram.com/oestecredpromotora"/>
                    <InfoAbout icon={<FacebookLogo size={20} weight="fill" />} abaut="Facebook" link="https://www.facebook.com/OestecredPromotora"/>
                </AboutContainer>
            </FooterContent>
        </FooterContainer>
    )
}