import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Landingpage() {


  let navigate=useNavigate()

  let viewmore=(id)=>{
    navigate(`/viewmore/${id}`)
  }

  let [apidata,setapidata]=useState([])

  let fechapi= async()=>{
    let response=await axios.get("http://localhost:4000/products")
    setapidata(response.data)
  }
  useEffect(()=>{
    fechapi()
  },[])

  let all_catogory=["All","men's clothing","women's clothing","electronics","jewelery"]

  let [arraycat,Setarraycat]=useState([])

  let handlecatogory=(e)=>{
    let cat=e.target.innerText
    console.log(cat);
    
    if (cat=="All"){
      Setarraycat(apidata)
    }
    else{
      let res=apidata.filter(elem=>elem.category===cat)
      Setarraycat(res);
  }
    }

     useEffect(()=>{
    Setarraycat(apidata)
  },[apidata])

  return (
    <div>
      <div className="products">
        <div className="category">
          <ul>
            {all_catogory.map((elem,index)=>{
              return(
                <li key={index}><button onClick={handlecatogory}>{elem}</button></li>
              )
            })}
          </ul>
        </div>
        <div className="container">
          {arraycat.map((elem,index)=>{
            let {title,image,id,price}=elem            
            return(
              <div className="card" onClick={()=>{viewmore(id)}} key={index}>
                  <div className="image">
                    <img src={image} alt="" />
                  </div>
                  <div className="title">
                    {title}
                  </div>
                  <div className="price">
                   <span> {Math.floor(price*93)}.00</span>
                  </div>
                  <div className="btn">
                    <button onClick={()=>{viewmore(id)}}>
                      View More
                    </button>
                  </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Landingpage
