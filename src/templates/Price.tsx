import React, { useEffect, useState } from "react"
import { PageProps, Link, graphql } from "gatsby"

import { getPrice, IPrice } from "../dal/price"

export default function Price(props: PageProps) {
  const [price, setPrice] = useState<IPrice | undefined>()

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const price = await getPrice()
      setPrice(price)
    }

    fetchData()
  }, [])

  console.log("props", props)
  console.log("astads", price)

  return <div>FUCK</div>
}
