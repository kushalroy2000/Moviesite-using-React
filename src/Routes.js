import React from 'react'
import {NavLink} from 'react-router-dom'

const Menu = () => {
    return(
    <div>
     <div className='Nav'>
         <div className='links'>  
    <NavLink to='/home' activeStyle={{backgroundColor:"purple"}} > Home </NavLink>
    <NavLink to='/Action' activeStyle={{backgroundColor:"purple"}} > Action </NavLink>
    <NavLink to='/Horror' activeStyle={{backgroundColor:"purple"}} > Horror </NavLink>
    <NavLink to='/Documentory' activeStyle={{backgroundColor:"purple"}}> Documentory </NavLink>
    <NavLink to='/About' activeStyle={{backgroundColor:"purple"}}> About </NavLink>
        </div>
     </div>
    </div>
    )
}

export default Menu