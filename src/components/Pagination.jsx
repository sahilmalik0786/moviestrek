import React from 'react'

function Pagination(props) {
    const {data , pages , page} = props
    const btnct = []
    for(let i = 1 ; i <= Math.ceil(data.length/10); i++) {
            btnct.push(i)
    }
    
   
  return (
    btnct.map((elem , i)=>{
        return <button key={i}  onClick={()=> pages(elem)} className = {`px-3 py-1   font-bold rounded cursor-pointer  ${(page === elem) ? "bg-accent1 text-slate-800": "bg-neutral scale-105 text-white"}`} >{elem}</button>
    })
  )
}

export default Pagination