import React, { useEffect, useState } from "react"
import moment from "moment"
import "moment/locale/es"
import { useGetPrice, IPrice } from "../dal/price"
import Loading from "./Loading"
import { QueryResult } from "react-query"

export default function PriceLayout(props: any) {
  const queryResult = useGetPrice({
    refetchInterval: 5 * 60 * 1000,
    refetchIntervalInBackground: true,
  })
  return (
    <div
      className={`[ card ] [ wrapper flow ] [ ${
        queryResult.isLoading ? "card__box_animation" : ""
      } ]`}
    >
      <Price {...queryResult} />
    </div>
  )
}

interface IProps extends QueryResult<IPrice> {}
//TODO brecha!
// TODO otros dolares
export function Price({ data: price, isLoading, error }: IProps) {
  if (isLoading && !price) {
    return <Loading style={{ fontSize: "3rem" }} />
  }

  if (error) {
    return <>error.</>
  }

  const sellPrice = formatPrice(price.venta)
  const buyPrice = formatPrice(price.compra)
  moment.locale("es")
  const date = moment(price.fecha, "DD/MM/YYYY - HH:mm")

  let trendIndicator = ""
  switch (price["class-variacion"]) {
    case "up": {
      trendIndicator = "👍"
      break
    }
    case "down": {
      trendIndicator = "👎"
      break
    }
  }

  return (
    <>
      <div>
        <h3 className="text-center">Dolar Blue {trendIndicator}</h3>
        <div className="price__hero">{sellPrice}</div>
        <div className="[ price__details ] [ flex-box-row ]">
          <div className="[ price__mini ] [ text-center ]">
            <h6>Compra</h6>
            <div className="price__price_item">{sellPrice}</div>
          </div>
          <div className="[ price__mini ] [ text-center ]">
            <h6 className={price["class-variacion"]}>Variacion</h6>
            <div className="price__price_item">{price.variacion}</div>
          </div>
          <div className="[ price__mini ] [ text-center ]">
            <h6>Venta</h6>
            <div className="price__price_item">{buyPrice}</div>
          </div>
        </div>
      </div>

      <div className="card__footer text-center">{date.fromNow()} </div>
    </>
  )
}

const intl = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
})

export function formatPrice(val: string): string {
  if (!val) {
    return "$-"
  }

  // replace the decimal delimiter
  const num = Number(val.replace(",", "."))

  return intl.format(num)
}
