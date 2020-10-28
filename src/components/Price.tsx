import React, { useEffect, useState } from "react"
import { useGetPrice, IPrice } from "../dal/price"

export default function Price(props: any) {
  const { data: price, isLoading, error } = useGetPrice()

  console.log("props", props)
  console.log("astads", price)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>error.</div>
  }

  return <div>{JSON.stringify(price)}</div>
}
