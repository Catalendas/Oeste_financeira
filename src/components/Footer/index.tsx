import { FacebookLogo, InstagramLogo, MapPin, WhatsappLogo } from "phosphor-react";
import { BussinesInformation, ContactComponent, FooterContainer, FooterContent, FooterDirectSecuryt, FooterLinks, SocialLinks } from "./styled";
import Logo from "../../assets/logo-icon.png"
import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <FooterContainer >
            <FooterContent>

                <FooterLinks className="container">
                        <ContactComponent href="https://api.whatsapp.com/send?phone=5519993178152&text=Vi%20o%20site%20e%20gostaria%20de%20fazer%20uma%20simula%C3%A7%C3%A3o">
                                <div>
                                    <WhatsappLogo size={32} />
                                    <h2>WhatsApp da Oeste</h2>
                                </div>
                                <div>
                                    <span>Atendimento, faturas e duvidas</span>
                                </div>
                        </ContactComponent>

                        <ContactComponent href="https://goo.gl/maps/x16TfTer8BXcASyh9">
                                <div>
                                    <MapPin size={32} />
                                    <h2>Encontre a Oeste</h2>
                                </div>
                                <div>
                                    <span>Onde encontro a Oeste</span>
                                </div>
                        </ContactComponent>

                        <SocialLinks>
                                <span>Siga a Oeste</span>
                                <div>
                                    <a href="">
                                        <InstagramLogo size={40} />
                                    </a>
                                    <a href="">
                                        <FacebookLogo size={40} />
                                    </a>
                                </div>
                        </SocialLinks>
                </FooterLinks>
                <BussinesInformation className="container">
                  <div>
                    <img src={Logo} alt="Logo" />
                    <div>
                        <span>@ 2023 Oestecred. CNPJ xxxxxxxxxxx/xxx</span>
                        <span>R. Floriano Peixoto, 625 - Centro, Santa Bárbara d'Oeste - SP, 13450-023</span>
                    </div>
                  </div>

                    <FooterDirectSecuryt>
                        <NavLink to="#">
                            Politicas de privacidade
                        </NavLink>

                        <NavLink to="#">
                            Código de defesa do consumidor
                        </NavLink>

                        <NavLink to="#">
                            Política de segurança
                        </NavLink>
                    </FooterDirectSecuryt>
                </BussinesInformation>
               
            </FooterContent>
        </FooterContainer>
    )
}