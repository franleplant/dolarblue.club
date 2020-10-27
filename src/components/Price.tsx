import React, { useEffect, useState } from "react"
import { getPrice, IPrice } from "../dal/price"

export default function Price(props) {
  const { price, isLoading, error } = usePrice()

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

interface IUsePrice {
  price: IPrice
  isLoading: boolean
  error: any
}

function usePrice(): IUsePrice {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<any>()
  const [price, setPrice] = useState<IPrice | undefined>()

  useEffect(() => {
    async function fetchData(): Promise<void> {
      setIsLoading(true)
      try {
        const price = await getPrice()
        setPrice(price)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return {
    price,
    isLoading,
    error,
  }
}
