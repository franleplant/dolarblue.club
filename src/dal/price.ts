import { useQuery, QueryResult, QueryConfig } from "react-query"

export interface IPrice {
  // "184,00"
  compra: string
  venta: string
  // "26\/10\/2020 - 16:21"
  fecha: string
  // "-2,56%"
  variacion: string
  // this replaces compra y venta when there's no compra o vent
  valor?: string
  //"down"
  "class-variacion": "up" | "down" | string
}

const url = "https://mercados.ambito.com//dolar/informal/variacion"

export function useGetPrice(config?: QueryConfig<IPrice>): QueryResult<IPrice> {
  return useQuery<IPrice>({
    queryKey: "price:dolarblue",
    queryFn: async () => {
      const res = await fetch(url)
      const body = await res.json()
      return body
    },
    config,
  })
}
