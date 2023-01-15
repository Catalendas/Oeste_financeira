import { addRegister } from "../registerAcess";

export async function addRegisterAction(body: any) {
    const response = await addRegister(body)
    return response.id
}