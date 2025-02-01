import React from "react";
import userContext from "./userContext";

const userContextProvide = ({ children }) => {
    const [user , setUser]  = React.useState(null)
    return (
    <userContext.Provide value={{user, setUser}}>
        {children}
    </userContext.Provide>
    )

}

export default userContextProvide