import { useQuery, QueryResult } from "react-query"

export interface IPrice {
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

const url = "https://mercados.ambito.com//dolar/informal/variacion"

export function useGetPrice(): QueryResult<IPrice> {
  return useQuery<IPrice>("price:dolarblue", async () => {
    const res = await fetch(url)
    const body = await res.json()
    return body
  })
}
