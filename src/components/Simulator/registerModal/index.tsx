import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { X } from "phosphor-react"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import { priceFormatter } from "../../../utils/formatedMoney"
import { SimulationButton } from "../../SimulationButton"
import { CloseButton, Overlay, RegisterModalContent, SimulatedValues } from "./style"

interface RegisterModalProps {
    range: number[]
    rate: number
}

export function RegisterModal({ range, rate}:RegisterModalProps) {
    const {register, handleSubmit, formState: {isSubmitted}} = useForm()

    function handleRegister(data: any) {
        console.log(data)
    }   

    return (
        <AlertDialog.Portal>
            <Overlay/>

            <RegisterModalContent>  

                <CloseButton>
                    <X size={26}/>
                </CloseButton>
                
                {!isSubmitted ? 
                    <>
                        <AlertDialog.Title>Cadastro de emprentimo</AlertDialog.Title>

                        <form onSubmit={handleSubmit(handleRegister)}>
                            <label htmlFor="">Nome</label>
                            <input type="text" placeholder="Nome" required {...register("Name")}/>
                            <label htmlFor="">CPF</label>
                            <input type="cpf" placeholder="CPF" required {...register("CPF")}/>
                            <label htmlFor="">Telefone</label>
                            <input type="tel" placeholder="Telefone (00) 00000000" required {...register("Telefone")}/>

                            <select {...register("Tipo")}>
                                <option value="">Selecione uma opção</option>
                                <option value="fgts">FGTS</option>
                                <option value="credito consignado">Crédito sonsignado</option>
                                <option value="cartao consignado">Cartão consignado</option>
                                <option value="creditopessoal">Crédito Pessoal</option>
                            </select>

                            <div>
                                <input type="checkbox" required {...register("Politica")}/>
                                <label htmlFor="">Li e aceito as <NavLink to="/politicadeprivacidade">politicas de privacidade</NavLink></label>
                            </div>
                            <textarea id="" placeholder="Comentario(opcional)" {...register("Comentario")}></textarea>

                            <SimulatedValues>
                                <span>Valor simulado: {priceFormatter.format((Number(range)))}</span>

                                <span>Valor da parcela: {priceFormatter.format(((rate)))}</span>
                            </SimulatedValues>

                            <SimulationButton type="submit" text="Simular" color="blue" isInteractile={false}/>
                        </form>
                    </>
                : <>Sucesso</>}
            </RegisterModalContent>
        </AlertDialog.Portal>
    )
}