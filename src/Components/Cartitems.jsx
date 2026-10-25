import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Cart() {
  const [cartitems, setcartitems] = useState([]);

  const fetchapi = async () => {
    let response = await axios.get("http://localhost:4000/cartitems");
    setcartitems(response.data);
  };

  let nav=useNavigate()

  useEffect(() => {
    fetchapi();
  }, [cartitems]);

  const totalAmount = cartitems.reduce(
  (total, item) => total + Number(item.price),
  0
);

let handledelete=(id)=>{
    let bool=confirm("Are You Sure Want To Remove From Cart")
    if (bool){
      axios.delete(`http://localhost:4000/cartitems/${id}`)
      toast.success("Product Removed From Cart")
      nav("/cart")
      
    }
    else{
      toast.error("Product Not Deleted ")
    }
}

  return (
    <>
    <div className="cart-container">
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
         {cartitems.map((item,index)=>{
          console.log(item);
          
          return(
            <tr>
             <td>
                <img src={item.image} width="80" alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{Math.floor(item.price*93)}.00/-</td>
              <td>{item.rating.rate} </td>
              <td><button onClick={()=>{handledelete(item.id)}}>Delete</button></td>
            </tr>
          )
         })}
        </tbody>
      </table>

      <h2>Total Amount: {Math.floor(totalAmount*93)}.00/-</h2>
      </div>
    </>
  );
}

export default Cart;