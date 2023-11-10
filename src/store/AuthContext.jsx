import { createContext } from "react";

const AuthContext = createContext({
    authenticate: () => {}
})

const authenticate = () => {
    //get the token from local storage
    //authenticate token from local storage by useing an axios call to the server
    return true
}

export const AuthContextProvider = (props) => {
    const contextValue = {
        authenticate
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext