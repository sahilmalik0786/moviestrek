
import React, { createContext, useEffect, useState } from "react";


export const searchTerm = createContext()

function Context(props) {
 const [input, setinput] = useState('')
 const [loading , setloading] = useState(null)
  const [data , setData] = useState([])
 const [inp, setinp] = useState('')

 





   return (
     <searchTerm.Provider value={[input, setinput, data , setData ,loading , setloading ,inp ,setinp]}>
       {props.children}
     </searchTerm.Provider>
   );
}

export default Context