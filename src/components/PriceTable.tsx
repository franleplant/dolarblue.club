import React, { useState } from "react"
import "./PriceTable.css"

const initialState = [
  {
    type: "Dolar Turista",
    compra: "$200.05",
    venta: "$200.05",
    fecha: "26/10/2020 - 16:21",
    variacion: "-10,56% 👎",
    valor: "14.05",
    "class-variacion": "up",
  },
  {
    type: "Dolar Blue",
    compra: "14.05",
    venta: "14.05",
    fecha: "26/10/2020 - 16:21",
    variacion: "-2,56%",
    valor: "14.05",
    "class-variacion": "up",
  },
  {
    type: "Contado con Liqui",
    compra: "14.05",
    venta: "14.05",
    fecha: "26/10/2020 - 16:21",
    variacion: "-2,56%",
    valor: "14.05",
    "class-variacion": "up",
  },
  {
    type: "MEP",
    compra: "14.05",
    venta: "14.05",
    fecha: "26/10/2020 - 16:21",
    variacion: "-2,56%",
    valor: "14.05",
    "class-variacion": "up",
  },
  {
    type: "Oficial",
    compra: "14.05",
    venta: "14.05",
    fecha: "26/10/2020 - 16:21",
    variacion: "-2,56%",
    valor: "14.05",
    "class-variacion": "up",
  },
  {
    type: "Dolar Futuro",
    compra: "14.05",
    venta: "14.05",
    fecha: "26/10/2020 - 16:21",
    variacion: "-2,56%",
    valor: "14.05",
    "class-variacion": "up",
  },
  {
    type: "Mayorista",
    compra: "14.05",
    venta: "14.05",
    fecha: "26/10/2020 - 16:21",
    variacion: "-2,56%",
    valor: "14.05",
    "class-variacion": "up",
  },
]

export default function PriceTable() {
  const [rows, setRows] = useState(initialState)
  return (
    <table className="price-table">
      <thead>
        <tr>
          <th>tipo</th>
          <th>compra</th>
          <th>venta</th>
          <th>variacion</th>
          <th>fecha</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.type}>
            <td className="small">{row.type}</td>
            <td>{row.compra}</td>
            <td>{row.venta}</td>
            <td>{row.variacion}</td>
            <td className="small">{row.fecha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
