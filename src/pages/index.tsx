import React, { useEffect, useState } from "react"
import { PageProps, Link, graphql } from "gatsby"
import Price from "../components/Price"
import Layout from "../components/layout"

export interface IData {
  data: {
    site: {
      buildTime: string
    }
  }
}

export default function Index(props: PageProps<IData>) {
  return (
    <Layout>
      <Price />
    </Layout>
  )
}

export const query = graphql`
  query buildTime {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
