import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { NavLink } from "react-router-dom"
import { priceFormatter } from "../../../utils/formatedMoney"
import { SimulationButton } from "../../SimulationButton"
import { Overlay, RegisterModalContent } from "./style"

interface RegisterModalProps {
    range: number[]
    rate: number
}

export function RegisterModal({ range, rate}:RegisterModalProps) {
    return (
        <AlertDialog.Portal>
            <Overlay/>

            <RegisterModalContent>
                <AlertDialog.Title>Cadastro de emprentimo</AlertDialog.Title>

                <form action="">
                    <label htmlFor="">Nome</label>
                    <input type="text" placeholder="Nome"/>
                    <label htmlFor="">CPF</label>
                    <input type="cpf" placeholder="CPF"/>
                    <label htmlFor="">Telefone</label>
                    <input type="tel" placeholder="Telefone (00) 00000000"/>

                    <select>
                        <option value="">Selecione uma opção</option>
                        <option value="fgts">FGTS</option>
                        <option value="credito consignado">Crédito sonsignado</option>
                        <option value="cartao consignado">Cartão consignado</option>
                        <option value="creditopessoal">Crédito Pessoal</option>
                    </select>

                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Li e aceito as <NavLink to="/politicadeprivacidade">politicas de privacidade</NavLink></label>
                    </div>
                    <textarea name="" id="" placeholder="Comentario(opcional)"></textarea>

                    <div>
                        <span>Valor cimulado: {priceFormatter.format((Number(range)))}</span>
                        <span>Valor da parecla: {priceFormatter.format((Number(rate)))}</span>
                    </div>

                    <SimulationButton text="Simular" color="blue" isInteractile/>
                </form>
            </RegisterModalContent>
        </AlertDialog.Portal>
    )
}