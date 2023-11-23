import React from 'react'
import { Backdrop } from '@mui/material'
import close from "../assets/images/icon-close-menu.svg"

const Sidemenu = ({open, setOpen}) => {
  return (
    <Backdrop open={open}  className='relative'> 
      <Menu setOpen={setOpen}/>
    </Backdrop>
  )
}



const Menu = ({setOpen})=>{
  return (
    <div className='w-[60%] md:hidden h-full bg-white absolute right-0 z-20 rounded-tl-2xl rounded-bl-2xl'>
      <span onClick={()=>setOpen()}><img src={close} alt="close button" className=' absolute right-10 top-8 w-6 h-6' /></span>

    </div>
  )
}



export default Sidemenu