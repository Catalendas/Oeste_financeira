import { Acordion } from "../../components/Acordion";
import { Navigator } from "../creditoConsignado/components/NavigatorContainer";
import { About } from "./components/About";
import { Advantage } from "./components/Advantage";
import { Banner } from "./components/Banner";
import { Contrate } from "./components/Contrate";
import { AcordionContainer, FgtsContainer } from "./styled";


export function Fgts() {
    return (
       <FgtsContainer>
            <Banner/>
            <Navigator/>
            <About/>
            <Advantage/>
            <Contrate />

            <AcordionContainer className="container">
                <h2>Tire suas dúvidas</h2>
                <Acordion title="Quem tem direito à antecipação do saque-aniversário?" content="
                Todos os trabalhadores com carteira assinada ou que um dia tiveram e possuem contas inativas do FGTS que optarem pelo saque-aniversário podem solicitar esta modalidade de crédito, inclusive aqueles que possuem restrições no SPC/Serasa."/>

                <Acordion title="Como eu sei qual valor está disponível para antecipar?" content="
                Entrando em contato com a gente, é possível simular quanto você receberá na antecipação de acordo com o saldo do FGTS. Para isso, será preciso informar o seu saldo total do FGTS e a sua data de nascimento."/>

                <Acordion title="Qual a diferença entre Saque-Aniversário e Antecipação Saque-Aniversário?" content="
                O Saque-Aniversário é uma modalidade de saque do FGTS. Já a Antecipação do Saque-Aniversário é a possibilidade de obter crédito tendo como garantia o saldo do FGTS." />  

                <Acordion title="Quantas parcelas posso antecipar?" content="
                Com a meutudo você pode antecipar até 10 parcelas anuais do seu Saque-Aniversário."  />    

                <Acordion title="Usei meu FGTS para comprar imóvel, posso fazer Antecipação Saque-Aniversário?" content="
                A contratação da Antecipação Saque-Aniversário consiste no bloqueio proporcional ou total do saldo do FGTS como garantia para contratar crédito. Se já houver sido utilizado o FGTS para financiar um imóvel, o saldo ficará comprometido e não será possível realizar outra contratação usando o Fundo de Garantia." />       
              
            </AcordionContainer>
       </FgtsContainer>
    )
}