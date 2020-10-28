import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { QueryCache, ReactQueryCacheProvider } from "react-query"

import "./base.css"
import "./main.css"

const queryCache = new QueryCache()

export default function Layout({ children }: any) {
  return (
    <>
      <div>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <main>{children}</main>
        </ReactQueryCacheProvider>
        <footer> </footer>
      </div>
    </>
  )
}
