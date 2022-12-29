export function formatedMoney(value: number) {
    return value.toLocaleString("pt-BR", {maximumFractionDigits: 2})
}