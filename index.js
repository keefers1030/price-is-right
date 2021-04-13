const calc = (items) => {
    items.total = Number(((items.price * items.quantity) - (items.price * items.quantity * items.discount)).toFixed(2))
    return items
}
const calculateTotal = (items) => {
    const total = items.map(calc)
    return total
}
module.exports = calculateTotal