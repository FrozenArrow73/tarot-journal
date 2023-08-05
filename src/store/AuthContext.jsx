import { createContext } from "react";

const AuthContext = createContext({
    test: "test unsuccessfull"
})

export const AuthContextProvider = (props) => {
    const contextValue = {
        test: "test successfull"
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext