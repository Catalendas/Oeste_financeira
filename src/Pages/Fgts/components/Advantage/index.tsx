import { CurrencyDollar, Money, ShoppingCart, Smiley } from "phosphor-react";
import { SimulationButton } from "../../../../components/SimulationButton";
import { AdvantageContainer, AdvantageOption } from "./style";

export function Advantage() {
    return (
        <AdvantageContainer >
            <div className="container">
                <h2>Vantagens sobre a
                Antecipação Saque-Aniversário
                com a OesteCred</h2>
                
                <div>
                    <AdvantageOption>
                        
                        <CurrencyDollar size={32} />
                        <strong>Taxas de 1,80% a.m.</strong>
                        <span>Crédito pessoal com as melhores condições no mercado.</span>
                    </AdvantageOption>

                    <AdvantageOption>
                    
                        <Money size={32} />
                    <strong>Contrate a partir de R$ 300,00</strong>
                    <span>Fácil contratação e pagamento rápido na conta, tudo digital.</span> 
                    </AdvantageOption>

                    <AdvantageOption>
                    
                        <Smiley size={32}/>
                    <strong>Sem parcela mensal</strong>
                    <span>O desconto é feito apenas uma vez ao ano, automaticamente do saldo do FGTS.</span> 
                    </AdvantageOption>

                    <AdvantageOption>
                    
                        <ShoppingCart size={32} />
                    <strong>Dinheiro rápido</strong>
                    <span>Pagamento em até 24horas</span> 
                    </AdvantageOption>
                </div>

                <a target="_blank" href="https://contrate.oestecredemprestimos.com.br/cadastro/fgts/"><SimulationButton text="Auto contratação"  color="blue-black" size={20}/></a>
            </div>
        </AdvantageContainer>
    )
}