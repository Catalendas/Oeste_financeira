import { CostContainer, CostTitle, CostValue, Value, CostTable } from "./style";

export function Cost() {
    return (
        <CostContainer className="container">
            <CostTitle>
                <h2>Seu empréstimo consignado vai custar quanto?</h2>
                <p>Transparência é com a gente! Consulte previamente todas as condições do seu consignado antes de fechar o acordo. As informações estão descritas no contrato. Veja um exemplo da aplicação de taxas:</p>
            </CostTitle>

            <CostValue>
                <div>
                    <div>
                        <Value color="grey">
                            R$ 5.000,00
                        </Value>
                        <strong>Valor contratado</strong>
                    </div>
                    <div>
                        <Value color="blue">R$ 5.749,00</Value>
                        <strong>Custo efetivo total</strong>
                    </div>
                </div>
            </CostValue>

            <CostTable>
                <tbody>
                    <tr></tr>
                </tbody>
            </CostTable>
        </CostContainer>
    )
}