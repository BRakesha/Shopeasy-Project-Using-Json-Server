import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Viewmore() {


    let [oneproduct,setOneproduct]=useState({})

    let params=useParams()
    let productid=params.id

    let gohome=useNavigate()

    let fechapidata=async()=>{
        let response=await axios.get(`http://localhost:4000/products/${productid}`)
        let jsdata=response.data
        setOneproduct(jsdata);
    
    }
    useEffect(()=>{
        fechapidata()
    },[])    
    console.log(oneproduct);
    let {title,id,price,description,category,image,rating}=oneproduct
    // let {rate,count}=rating


    // Delete The Card
    let handledelete=()=>{
        let bool=window.confirm("Do You Want Delete This Product")
        if (bool){
            axios.delete(`http://localhost:4000/products/${productid}`)
            toast.error("Product Is Deleted")
            gohome("/home")
        }
        else{
            toast.success("Product Is Not Deleted")
        }
    }

    // Add to The Cart

    let addcart=()=>{
        let bool=window.confirm("Do you Want Add product Into Cart")
        if (bool){
        axios.post(`http://localhost:4000/cartitems`,oneproduct)
        toast.success("Product Is Added To Cart")
        gohome("/cart")
        }
    }
  return (
    <>
     <div className="viewmore">
        <div className="container">
            <div className="left">
                    <img src={image} alt="" />
            </div>
            <div className="rigth">
                <div className="title">
                   <h3><span>Product Name:</span>{title}</h3>
                </div>
                <div className="desc">
                    <p>
                       <span>Product Description :</span>{description}
                    </p>
                </div>
                <div className="price">
                  <span>Price:</span>{Math.floor(price*93)}.00
                </div>
                <div className="category">
                    <span>Product category :</span>{category}
                </div>
                <div className="rating">
                    <div className="rate"><span>Rating :</span>{rating?.rate}</div>
                    <div className="count"><span>Count :</span>{rating?.count}</div>
                </div>
                <div className="btns">
                    <button onClick={addcart}>Add to Cart</button>
                    <button onClick={handledelete}>Delete</button>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Viewmore
