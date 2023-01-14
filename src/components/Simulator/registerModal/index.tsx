import * as AlertDialog from "@radix-ui/react-alert-dialog"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { X } from "phosphor-react"

import { useForm } from "react-hook-form"

import { NavLink } from "react-router-dom"

import { priceFormatter } from "../../../utils/formatedMoney"
import { SimulationButton } from "../../SimulationButton"

import { CloseButton, Overlay, RegisterModalContent, SimulatedValues} from "./style"

import { SucessSubmiting } from "./SucessSubmiting/inde"

interface RegisterModalProps {
    range: number[]
    rate: number
}

const RegisterModalSchema = z.object({
    Name: z.string().min(1, { message: "Digite seu nome completo"}),
    Cpf: z.string().min(1, { message: "Informe o CPF"}),
    Tel: z.number().min(1, { message: "Informe seu numero de Celular"}),
    Type: z.string().min(1, { message: ""}),
    Policy: z.string().min(1, {message: ""}),
    Coment: z.string()
})

type RegisterModalFormInputs = z.infer<typeof RegisterModalSchema>

export function RegisterModal({ range, rate}:RegisterModalProps) {

    const { register, handleSubmit, formState: {errors} } = useForm<RegisterModalFormInputs>( {
        resolver: zodResolver(RegisterModalSchema)
    })

    function handleRegister(data: RegisterModalFormInputs) {
        console.log(data)
    }   

    console.log(errors)

    

    return (
        <AlertDialog.Portal>
            <Overlay/>

            <RegisterModalContent >  

                <CloseButton>
                    <X size={26}/>
                </CloseButton>

                <div>
                    <AlertDialog.Title>Cadastro de emprentimo</AlertDialog.Title>

                    <form onSubmit={handleSubmit(handleRegister)}>

                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Nome"  {...register("Name")}/>
                        {errors && <p>{errors.Name?.message}</p>}

                        <label htmlFor="">CPF</label>
                        <input type="cpf" placeholder="CPF"  {...register("Cpf")}/>
                        {errors && <p>{errors.Cpf?.message}</p>}

                        <label htmlFor="">Celular</label>
                        <input type="tel" placeholder="Celular (00) 00000000"  {...register("Tel")}/>
                        {errors && <p>{errors.Tel?.message}</p>}

                        <select {...register("Type")}>
                            <option value="">Selecione uma opção</option>
                            <option value="fgts">FGTS</option>
                            <option value="credito consignado">Crédito sonsignado</option>
                            <option value="cartao consignado">Cartão consignado</option>
                            <option value="creditopessoal">Crédito Pessoal</option>
                        </select>
                        {errors && <p>{errors.Type?.message}</p>}

                        <div>
                            <input type="checkbox"  {...register("Policy")}/>
                            <label htmlFor="">Li e aceito as <NavLink to="/politicadeprivacidade">politicas de privacidade</NavLink></label>
                        </div>
                        {errors && <p>{errors.Policy?.message}</p>}

                        
                        <textarea id="" placeholder="Comentario(opcional)" {...register("Coment")}></textarea>

                        <SimulatedValues>

                            <span>Valor simulado: {priceFormatter.format((Number(range)))}</span>

                            <span>Valor da parcela: {priceFormatter.format(rate)}</span>

                        </SimulatedValues>

                        <SimulationButton type="submit" text="Simular" color="blue" isInteractile={false}/>

                    </form>

                </div>
                {/* {isSubmitted && <SucessSubmiting />} */}
            </RegisterModalContent>
        </AlertDialog.Portal>
    )
}