import { ContrateContainer, ContrateOption, ContrateOptions } from "./styled";
import Moca from "../../../../assets/moca.webp"
import { Check } from "phosphor-react";
import { SimulationButton } from "../../../../components/SimulationButton";

export function Contrate() {
    return (
        <ContrateContainer className="container">
            <img src={Moca} alt="FGTS" />

            <div>
                <h2>Quem pode contratar o empréstimo do <strong>Saque-Aniversário?</strong></h2>

                <ContrateOptions>
                    <ContrateOption>
                        <Check size={32} />
                        <span><strong>Maior de 18 anos </strong>ou emancipado.</span>
                    </ContrateOption>

                    <ContrateOption>
                        <Check size={32} />
                        <span>Com <strong>situação regular</strong> com a Receita Federal.</span>
                    </ContrateOption>

                    <ContrateOption>
                        <Check size={32} />
                        <span>Que possua conta <strong>corrente</strong> ou <strong>poupança.</strong></span>
                    </ContrateOption>

                    <ContrateOption>
                        <Check size={32} />
                        <span>Com saldo do FGTS em conta <strong>ativa</strong> ou <strong>inativa.</strong></span>
                    </ContrateOption>

                    <ContrateOption>
                        <Check size={32} />
                        <span>Optante da <strong>modalidade Saque-Aniversário</strong> do FGTS.</span>
                    </ContrateOption>

                </ContrateOptions>

                <a target="_blank" href="https://contrate.oestecredemprestimos.com.br/cadastro/fgts/"><SimulationButton text="Contrate agora"  color="blue-black" size={20}/></a>
            </div>
        </ContrateContainer>
    )
}