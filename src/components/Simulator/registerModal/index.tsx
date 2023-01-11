import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { Overlay, RegisterModalContent } from "./style"

export function RegisterModal() {
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

                    <input type="checkbox" />
                    <label htmlFor="">Li e aceito os termos de condições</label>
                    <textarea name="" id="" placeholder="Comentario(opcional)"></textarea>
                </form>
            </RegisterModalContent>
        </AlertDialog.Portal>
    )
}