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
import { addRegister } from "../../../services/dataAcess/registerAcess"

interface RegisterModalProps {
    range: number[]
    rate: number
}

const RegisterModalSchema = z.object({
    Name: z.string().min(1, { message: "Digite seu nome completo"}),
    Cpf: z.string().min(1, { message: "Informe o CPF"}).max(14, {message: "Formato invalido"}),
    Tel: z.string().min(1, { message: "Informe seu numero de Celular"}),
    Type: z.string().min(1, { message: "Escolha uma opção valida"}),
    Policy: z.boolean(),
    Coment: z.string()
})

type RegisterModalFormInputs = z.infer<typeof RegisterModalSchema>

export function RegisterModal({ range, rate}:RegisterModalProps) {

    const { register, handleSubmit, formState: {errors, isSubmitSuccessful} } = useForm<RegisterModalFormInputs>( {
        resolver: zodResolver(RegisterModalSchema)
    })

    function handleRegister(data: RegisterModalFormInputs) {
        addRegister(
            {   content: data.Coment, 
                cpf: data.Cpf, 
                name: data.Name, 
                policy: data.Policy, 
                tel: data.Tel, 
                type: data.Type,
                simutaledValue: range,
                rate: rate
            })
        console.log(data)
    }   

   
    

    return (
        <AlertDialog.Portal>
            <Overlay/>

            <RegisterModalContent >  

                <CloseButton>
                    <X size={26}/>
                </CloseButton>

                {!isSubmitSuccessful ? 
                    <div>
                    <AlertDialog.Title>Cadastro de emprentimo</AlertDialog.Title>

                    <form onSubmit={handleSubmit(handleRegister)}>

                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Nome Completo"  {...register("Name")}/>
                        {errors && <p>{errors.Name?.message}</p>}

                        <label htmlFor="">CPF</label>
                        <input type="text" placeholder="CPF 000.000.000-00"  {...register("Cpf")} pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"/>
                        {errors && <p>{errors.Cpf?.message}</p>}

                        <label htmlFor="">Celular</label>
                        <input type="tel" placeholder="Celular (00)00000000"  {...register("Tel")}/>
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
                            <input type="checkbox"  {...register("Policy")} required/>
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
            
                : <SucessSubmiting/>}

                
                   
            </RegisterModalContent>
        </AlertDialog.Portal>
    )
}