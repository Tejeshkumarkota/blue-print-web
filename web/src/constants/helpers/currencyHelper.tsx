export function currencyFormater(amount: any) {
    if (amount && amount !== '' && !isNaN(amount)) {
        amount = parseFloat(amount)
        return amount.toLocaleString(undefined, { maximumFractionDigits: 2 })
    }
    return amount
}