import React from "react"
import GlobalContextProvider from "./src/components/context-components/GlobalContextProvider"

export const wrapRootElement = ({ element }) => {
    return <GlobalContextProvider>{element}</GlobalContextProvider>
}
