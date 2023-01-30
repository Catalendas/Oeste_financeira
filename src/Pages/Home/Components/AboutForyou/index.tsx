import { Calendar, Clock,  Receipt, User, Wallet } from 'phosphor-react'
import {  AboutForyouContainer, Options, SimulationOptions, TextContainer } from './styled'

export function AboutForyou() {
    return (
        <AboutForyouContainer>
                <div className='container'>
                    <TextContainer>
                        <User size={40} />
                        <h2>É fácil, é rápido e é para você</h2>
                        <p>Seja para dar entrada no seu carro, na casa própria ou para montar um negócio, se as suas realizações precisam de grana para acontecer, conte com a Oestecred pra facilitar esse encontro!</p>
                        <p>Nossas opções de empréstimo pessoal oferecem taxas de juros que cabem no seu bolso, com até 60 dias para começar a pagar. São condições especiais de crédito* rápido e fácil. Simule agora sem sair de casa e faça contratações sem precisar ir à uma agência.</p>
                    </TextContainer>

                    <SimulationOptions>
                        <h2>É fácil, é rápido e é para você</h2>
                        <div>
                            <Options>
                                <Calendar size={40}  />
                                <div>
                                    <strong>Até 60 dias para começar a pagar</strong>
                                    <span>Negocie o seu empréstimo hoje e comece a pagar somente daqui a 2 meses.</span>
                                </div>
                            </Options>
                            <Options>
                                <Clock size={40}  /> 
                                <div>
                                    <strong>Simule a hora que quiser</strong>
                                    <span>Através do nosso App é possível fazer a simulação a hora que quiser </span>
                                </div>   
                            </Options>
                            <Options>
                                <Wallet size={40} />
                                <div>
                                    <strong>Simule sem sair de casa</strong>
                                    <span>Você escolhe: simule pelo App Oestecred ou pelo autoatendimento no computador.</span>
                                </div>
                            </Options>
                            <Options>
                                <Receipt size={32} />
                                <div>
                                    <strong>Simule pelo WhatsApp</strong>
                                    <span>Você pode simular e contratar pelo seu WhatsApp Oestecredi.</span>
                                </div>
                            </Options>
                        </div>
                    </SimulationOptions>
                </div>
          
        </AboutForyouContainer>
    )
}