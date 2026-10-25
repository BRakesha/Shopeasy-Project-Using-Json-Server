import React, { useState } from 'react'

function PrintData() {
    let [formdata,setFormdata]=useState({
        fname:"",
        lname:""
    })
    let [userdate,Setuserdata]=useState("")
    let handlesybmit=(e)=>{
        e.preventDefault()
       console.log(formdata)
       let {fname , lname} = formdata
        Setuserdata(`My name is ${fname} ${lname}`)
    }

    let handlechange=(e)=>{
        e.preventDefault()
        let key=e.target.name
        let value=e.target.value
        console.log(key,value);
        setFormdata({...formdata,[key]:value})
    }
  return (
    <>
      <form action="" onSubmit={handlesybmit}>
        <input type="text" name="fname" onChange={handlechange}/>
        <input type="text" name='lname' onChange={handlechange}/>
        <button>Print</button>
      </form>
      <h1>{userdate}</h1>
    </>
  )
}

export default PrintData
