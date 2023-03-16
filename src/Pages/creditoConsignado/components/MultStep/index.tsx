import { Multstep, Option } from "./style";

export function MultStep() {
    return (
        <>
            <Multstep className="container">
                <h2>Empréstimo consignado: como simular os valores e contratar?</h2>
                <p>Para sua segurança e pela privacidade da análise, solicitamos a confirmação dos seus dados por formalização eletrônica.</p>

                <div>
                    <Option>
                       <div>
                        <h3>1. Escolha por onde prefere ser atendido</h3>
                        <p>Se você é <strong>aposentado ou pensionista do INSS</strong>, aproveite nossas vantagens <strong>Contratando Online</strong>  agora mesmo! Se preferir, você pode contratar através do nosso <strong>WhatsApp</strong>. Se você é <strong>servidor público</strong>, ligue para <strong>, Ligue para 19994508753.</strong></p>
                        </div>
                    </Option>
                    <Option>
                        <div>
                            <h3>2. Confira as ofertas disponíveis e escolha seu empréstimo ideal</h3>
                            <p>Gostou da simulação e quer contratar? Siga o passo a passo e conclua sua solicitação na tela de finalização.</p>
                        </div>
                    </Option>
                    <Option>
                        <div>
                            <h3>3. Faça a formalização eletrônica</h3>
                            <p>Com a selfie e a foto da sua CNH ou RG nossa tecnologia de segurança consegue confirmar sua autenticidade e concluir a solicitação.</p>
                        </div>
                    </Option>
                </div>
                
            </Multstep>
        </>
    )
}