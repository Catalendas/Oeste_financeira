import { AboutContainer, FooterContainer, FooterContent } from "./styled";
import Logo from '../../assets/logo.png'
import { InfoAbout } from "./infoAbout";
import { EnvelopeOpen, FacebookLogo, InstagramLogo, MapPin, Phone } from "phosphor-react";

export function Footer() {
    return (
        <FooterContainer >
            <FooterContent className="container">
                <AboutContainer>
                    <img src={Logo}/>

                    <InfoAbout icon={<MapPin size={20} weight="fill"/>} abaut="Rua Floriano Peixoto-625, Centro, Santa Bárbara D'Oeste-Sp"/>
                    <InfoAbout icon={<Phone size={20} weight="fill"/>} abaut="(19) 994355018"/>
                    <InfoAbout icon={<EnvelopeOpen size={20} weight="fill"/>} abaut="oeste@exemplo.com"/>
                    <InfoAbout abaut="Oeste promotora servicos cadastrais 242342352352532/0001-84"/>
                </AboutContainer>

                <AboutContainer>
                    <InfoAbout abaut="Inicio"/>
                    <InfoAbout abaut="Sobre nós"/>
                    <InfoAbout abaut="Duvidas frequentes"/>
                    <InfoAbout abaut="Termos e condições"/>
                </AboutContainer>

                <AboutContainer>
                    <h3>Nossas redes sociais</h3>
                    <InfoAbout icon={<InstagramLogo size={20} weight="fill" />} abaut="Intagran" />
                    <InfoAbout icon={<FacebookLogo size={20} weight="fill" />} abaut="Facebook" />
                </AboutContainer>
            </FooterContent>
        </FooterContainer>
    )
}