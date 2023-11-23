import React from 'react'
import { Backdrop } from '@mui/material'
import close from "../assets/images/icon-close-menu.svg"
import {v4 as uuidv4} from 'uuid'
import Dropmenu from './Dropmenu'


export const featureMenu = [
  {
      "id": uuidv4(),
      "name": "Todo List",
      "img": "/images/icon-todo.svg"
     
  },
  {
      "id": uuidv4(),
      "name": "Calendar",
      "img": "/images/icon-calendar.svg",
    
  },
  {
      "id":uuidv4() ,
      "name": "Reminders",
      "img": "/images/icon-reminders.svg"
    
  },
  {
      "id": uuidv4(),
      "name": "Planning",
      "img": "/images/icon-planning.svg"
  }
]

export const companyMenu = [
  {
      "id": uuidv4(),
      "name": "History",
     
  },
  {
      "id": uuidv4(),
      "name": "Our Team",
    
  },
  {
      "id": uuidv4(),
      "name": "Blog",
    
  }
]





const Sidemenu = ({open, setOpen}) => {
  return (
    <Backdrop open={open}  className='relative'> 
      <Menu setOpen={setOpen}/>
    </Backdrop>
  )
}



const Menu = ({setOpen})=>{
  return (
    <div className='w-[65%] md:hidden h-full bg-white absolute right-0 z-20 rounded-tl-xl '>
      <span onClick={()=>setOpen()}><img src={close} alt="close button" className=' absolute right-10 top-8 w-6 h-6' /></span>
      <Dropmenu menuList={featureMenu}/>
      <Dropmenu menuList={companyMenu}/>
     
    </div>
  )
}



export default Sidemenu