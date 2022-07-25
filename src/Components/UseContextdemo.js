import React, { createContext, useState,useContext } from 'react'
const userContext=createContext();
const UseContextdemo = () => {
    const [user,setUser]=useState("Aradhana Sharma")
    
  return (
    <>
<userContext.Provider value={user}>
    <h1>{`Hello ${user}`}</h1>
    <Component2 />
</userContext.Provider>
    </>
  )
}

export default UseContextdemo
const Component2=()=>{
    return(
        <>
       <h1>Component2</h1> 
        <Component3/>
        </>
    )
}

const Component3=()=>{
return(
    <>
    <h1>Component3</h1>
    <Component4/>
    </>
)
}
const Component4=()=>{
    const user=useContext(userContext);
return(
    <>
    <h1>Component4</h1>
   <h1>{`Welcome back ${user}`}</h1> 
    </>
)
}