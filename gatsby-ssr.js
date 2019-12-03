const React = require("react")
const GlobalContextProvider = require("./src/components/context-components/GlobalContextProvider")
    .default

exports.wrapRootElement = ({ element }) => {
    return <GlobalContextProvider>{element}</GlobalContextProvider>
}
