import React, { useState } from 'react'

const Propsdrilling = () => {
    const [user,setUser]=useState("Aradhana Sharma");
  return (
    <div><h1>{`Hello  ${user}`}</h1>
    <Component2 user={user}/>
    </div>
  )
}
export default Propsdrilling

const Component2=({user})=>{
return(
    <>
    <h1> Component2</h1>
    <Component3 user={user}/>
    </>
)
}
const Component3=({user})=>{
    return(
        <>
        <h1>Component3</h1>
        <Component4 user={user}/>
        </>
    )
}
const Component4=({user})=>{
return(
    <>
<h1>Component4</h1>
<Component5 user={user}/>
    </>
)
}

const Component5=({user})=>{
    return(
        <>
        <h1>Component5</h1>
        <h1>{`Welcome back ${user}`}</h1>
        </>
    )
}