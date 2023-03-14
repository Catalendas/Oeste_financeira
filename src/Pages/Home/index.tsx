import { Banner } from "./Components/Banner";
import { AboutForyou } from "./Components/AboutForyou";
import { HowItWorks } from "./Components/HowItWorks";
import { Info } from "./Components/Infos";
import { Simulator } from "../../components/Simulator";
import { AcordionContainer, HomeContainer} from "./styled";
import { MenuBobile } from "../../components/MenuMobile";
import { Benefits } from "./Components/Benefits";
import { AutoContract } from "./Components/AutoContract";
import { Acordion } from "../../components/Acordion";



export function Home() {
    

    return(
        <HomeContainer>
            <Banner/>
            <Info/>
            <AboutForyou />
            <Benefits />
            <AutoContract/>
            <AcordionContainer className="container">
                <h2>Tire suas dúvidas</h2>
                <Acordion title="Como entro em contato com a equipe de atendimento?" content="
                WhatsApp: 19 99450-8753,
                "/>

                <Acordion title="O que é Consulta de margem consignável?" content="
                É o limite do valor das parcelas que serão descontadas do salário ou benefício, por meio da contratação de um crédito consignado. Ou seja, a margem consignável representa o quanto do seu salário, aposentadoria, pensão ou benefício pode ser comprometido para o pagamento de empréstimos."/>

                <Acordion title="A contratação digital é segura?" content="
                Sim, ela é segura, nosso sistema usa um processo de verificação de segurança." />  

                <Acordion title="Quando posso fazer o emprestimo?" content="
                Você pode entrar em contato com agente há qualquer horário que temos uma equipe pronta para atender você."  />    

                <Acordion title="Cobramos para realização do emprestimo?" content="
                Não! Serviço é feiot de forma gratuita tanto pelo digital como pelo presencial." />       
              
            </AcordionContainer>
        </HomeContainer>
    )
}