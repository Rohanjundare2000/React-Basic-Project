import React, { useState } from "react";
import Usercontext from "./UserContext";

const UserContextProvider=({children})=>{
    const [user,setUser] =useState(null)
    return(
        <Usercontext.Provider Value={{user,setUser}}>
            {children}
        </Usercontext.Provider>
    )
}
export default UserContextProvider