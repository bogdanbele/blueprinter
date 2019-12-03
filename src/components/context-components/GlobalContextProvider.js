import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

let initialState = {
    theme: 'light'
}

// Disabled the code from running on the server
if (typeof window !== 'undefined') {
    initialState = {
        theme: localStorage.getItem('theme') !== null ? setInLocalStorage("light") :  localStorage.getItem('theme'),
    }
}

function setInLocalStorage(themeColor) {
    localStorage.setItem('theme', themeColor)
    return themeColor
}


function reducer(state, action) {
    localStorage.getItem('theme');

    switch (action.type) {
        case "TOGGLE_THEME": {
            return {
                ...state,
                theme: state.theme === "light" ? setInLocalStorage("dark") : setInLocalStorage("light"),
            }
        }
        default:
            throw new Error("Bad Action Type")
    }
}

const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}

export default GlobalContextProvider
