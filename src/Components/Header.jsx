import React from 'react'
import "../assets/Style/Mystyle.css"
import { NavLink, useNavigate } from 'react-router-dom'

function Header() {
  let Visiter=useNavigate()
  return (
    <>
      <div className="header-part">
            <div className="logo" onClick={()=>{Visiter("/home")}}>
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="search">
                <form action="">
                    <input type="text" placeholder='Enter Product Name'/>
                    <button>Search</button>
                </form>

            </div>
            <div className="btns">
                    <button className='login' onClick={()=>{Visiter('/')}}>Logout</button>
                    <button className='cart' onClick={()=>{Visiter('/cart')}}>Cart</button>
                    {/* <NavLink to='/cart'>Cart</NavLink> */}
            </div>
      </div>
    </>
  )
}

export default Header
