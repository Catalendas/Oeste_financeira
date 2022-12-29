import { AbountContainer, FooterContainer, FooterContent } from "./styled";
import Logo from '../../assets/logo.png'
import { InfoAbout } from "./infoAbout";
import { EnvelopeOpen, MapPin, Phone } from "phosphor-react";

export function Footer() {
    return (
        <FooterContainer >
            <FooterContent className="container">
                <AbountContainer>
                    <img src={Logo}/>

                    <InfoAbout icon={<MapPin size={20} weight="fill"/>} abaut="Rua Floriano Peixoto-625, Centro, Santa Bárbara D'Oeste-Sp"/>
                    <InfoAbout icon={<Phone size={20} weight="fill"/>} abaut="(19) 994355018"/>
                    <InfoAbout icon={<EnvelopeOpen size={20} weight="fill"/>} abaut="oeste@exemplo.com"/>
                    <InfoAbout abaut="Oeste promotora servicos cadastrais 242342352352532/0001-84"/>
                </AbountContainer>
            </FooterContent>
        </FooterContainer>
    )
}