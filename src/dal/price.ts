const url = "https://mercados.ambito.com//dolar/informal/variacion"

interface IPrice {
  // "184,00"
  compra: string
  venta: string
  // "26\/10\/2020 - 16:21"
  fecha: string
  // "-2,56%"
  variacion: string
  //"down"
  "class-variacion": string
}

export async function getPrice(): Promise<IPrice> {
  const res = await fetch(url)
  const body = await res.json()
  return body
}
