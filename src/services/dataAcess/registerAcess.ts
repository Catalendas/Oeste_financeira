import { db } from "../../firebaseConfig"
import { RegisterType } from "../../interfaces/registerInterface"

const planReference = db.collection("usuarios")

export async function addRegister(body: RegisterType) {
    const registerObject: RegisterType = {
        content: body.content,
        cpf: body.cpf,
        name: body.name,
        policy: body.policy,
        tel: body.tel,
        type: body.type,
        simutaledValue: body.simutaledValue,
        rate: body.rate,
    }

    const response = await planReference.add(registerObject)

    return response
} 