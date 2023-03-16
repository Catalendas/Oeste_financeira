import { AboutFGTSContainer, AboutFGTSContent } from "./styled";

export function About() {
    return (
        <AboutFGTSContainer className="container">
            <AboutFGTSContent>
                <h2>Como funciona a Antecipação do Saque Aniversário do FGTS?</h2>
                <p>Se você tem saldo no FGTS e optou pela modalidade Saque Aniversário, não precisa esperar para resgatar o que você tem direito: A Oestecred libera agora o seu dinheiro! Você nem precisa se preocupar com o pagamento, porque o valor é debitado diretamente do seu fundo de garantia.</p>
                <p>Pra quem precisa de dinheiro rápido e sem burocracia, sem dúvida essa é a melhor opção. Você pode receber antecipado até 10 anos do seu Saque Aniversário por uma taxa imperdível.</p>
            </AboutFGTSContent>

            <AboutFGTSContent>
                <h2>Eu também posso antecipar meu Saque Aniversário?</h2>
                <p>Sim! Para aproveitar essa oportunidade, você não precisa sair da sua casa. Basta ter saldo no FGTS, ter feito a opção pelo Saque Aniversário e você receberá a antecipação na sua conta, no banco de sua preferência.</p>
            </AboutFGTSContent>
        </AboutFGTSContainer>
    )
}