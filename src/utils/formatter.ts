export const dateFormmater = new Intl.DateTimeFormat('pt-BR')

export const priceFormmater = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
