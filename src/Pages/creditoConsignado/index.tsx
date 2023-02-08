import { AcordionContainer, BannerPage, CreditoConsignadoContainer,  ImageContainer,  TilteContainer } from "./styled";
import homen from "../../assets/homennocelular.webp"
import { Navigator } from "./components/NavigatorContainer";
import { AboutProduct } from "./components/AboutProductContainer";
import { MultStep } from "./components/MultStep";
import { Cost } from "./components/Cost";
import { Table } from "./components/Table";
import { Refin } from "./components/Refin";
import { Acordion } from "./components/Acordion";
import { SimulationButton } from "../../components/SimulationButton";
import { WhatsappLogo } from "phosphor-react";

 
export function CreditoConsignado() {
    return (
        <CreditoConsignadoContainer>
            <BannerPage >   
                <div className="container">
                    <TilteContainer>
                        <h2>Empréstimo Consignado</h2>
                        <span>O benefício aumentou, sua margem também! Sujeito à análise e condições do produto.</span>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=551934552541&text=Sou%20servidor%20publico%20e%20gostaria%20de%20fazer%20o%20empr%C3%A9stimo%20consignado"><SimulationButton icon={<WhatsappLogo size={30}/>} text="Falar com um especialista"  color="green" size={20}/></a>
                    </TilteContainer>
                    <ImageContainer>
                        <img src={homen} alt="" />
                    </ImageContainer>
                </div>
            </BannerPage>

            <Navigator />
            <AboutProduct />
            <MultStep />
            <Cost />
            <Table />
            <Refin />
            <AcordionContainer className="container">
                <h2>Tire suas dúvidas</h2>
                <Acordion title="Quem tem direito ao empréstimo consignado?" content="
                O empréstimo consignado pode ser solicitado por aposentados, pensionistas do INSS, servidores públicos, militares das forças armadas (conforme convênio) e trabalhadores com carteira assinada, vinculado à empresa que trabalha (consignado privado)."/>

                <Acordion title="O que é margem consignável?" content="
                A margem consignável é estabelecida por lei e define o limite máximo de comprometimento do seu salário/benefício para pagamento das parcelas de um empréstimo consignado. Atualmente, a margem consignável do INSS é de 40%, sendo que até 35% do recebimento mensal pode ser descontado para o pagamento das parcelas do empréstimo consignado, e 5% para o pagamento do cartão de crédito consignado."/>

                <Acordion title="Qual a taxa de juros do consignado?" content="
                Devido a pandemia de Covid-19, a taxa de juros do empréstimo consignado para aposentados e pensionistas do INSS está fixada em 1,80% ao mês; enquanto a taxa de juros para o cartão de crédito consignado está em 3,06% ao mês." />  

                <Acordion title="Estou sem margem no consignado, posso fazer um empréstimo?" content="
                Você pode contratar o Dinheiro Extra, empréstimo pessoal disponível para aposentados, pensionistas do INSS ou servidores públicos que estão sem margem no consignado, mas que precisam de uma ajuda emergencial. Para contratá-lo e verificar a possibilidade de liberação."  />    

                <Acordion title="Por que meu empréstimo pode ser recusado?" content="
                A aprovação de crédito depende da nossa análise interna. Para que você entenda melhor o que aconteceu ou possa realizar uma nova tentativa, entre em contato com o correspondente responsável." />       
              
            </AcordionContainer>
   
        </CreditoConsignadoContainer>
    )
}