import { CheckSquare, Handshake, Percent, Scroll,  } from "phosphor-react"
import { BenefitisContainer } from "./styled"

export function Benefits() {
    return (
        <BenefitisContainer className="container">
            <h2>Quem conta com o empréstimo consignado Oeste tem muitas vantagens</h2>

            <div>
                <div>
                    <Percent size={53} />
                    <span>Parcelas que cabem no seu bolso, em até 96x*</span>
                </div>

                <div>
                    <Handshake size={53}/>
                    <span>Sem consulta ao SPC e SERASA, crédito mesmo para negativado</span>
                </div>

                <div>
                    <Scroll size={53} />
                    <span>Para você ficar numa boa e não se preocupar, desconto em folha de pagamento</span>
                </div>

                <div>
                    <CheckSquare size={53}/>
                    <span>Rápido, seguro, digital e descomplicado</span>
                </div>
            </div>
        </BenefitisContainer>
    )
}