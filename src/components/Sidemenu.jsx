import React,{useState} from 'react'
import { Backdrop } from '@mui/material'
import close from "../assets/images/icon-close-menu.svg"
import {v4 as uuidv4} from 'uuid'
import Dropmenu from './Dropmenu'
import arrowdown from '../assets/images/icon-arrow-down.svg'
import arrowup from '../assets/images/icon-arrow-up.svg'
import useNavmenu from '../hooks/useNavmenu';


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
  const {
    featuresOpen,
    companyOpen,
    handleFeaturesOnClick,
    handleCompanyOnClick,
  } = useNavmenu();
  const [active, setActive] = useState(false);
 
  return (
    <div className='w-[65%] md:hidden h-full bg-white absolute right-0 z-20  '>
      <span onClick={()=>setOpen()}><img src={close} alt="close button" className=' absolute right-10 top-8 w-6 h-6' /></span>
      <ul className='space-y-4 absolute top-20 left-6 text-base text-gray'>
      <li className='flex items-center justify-center gap-x-2 cursor-pointer' onClick={handleFeaturesOnClick}>
                        Features <span className=''><img src={featuresOpen? arrowup: arrowdown} alt="icon" /></span>
                        {/*This is a dropdown menu */}
                        {featuresOpen &&<div className=' md:block max-w-fit text-xs text-gray py-5 px-4 font-thin md:shadow-xl md:rounded-xl  '>
                        <Dropmenu menuList={featureMenu}/>
                        </div>}
        </li>

        <li className='flex items-center justify-center gap-x-2 cursor-pointer'  onClick={handleCompanyOnClick}>
                        Company <span className=''><img src={companyOpen? arrowup: arrowdown} alt="icon" /></span>
                        {/* This is a dropdown menu */}
                        {companyOpen && <div className='md:block max-w-fit text-xs text-gray py-6 px-4 font-thin md:shadow-xl md:rounded-xl '>
                        <Dropmenu menuList={companyMenu}/>
                        </div>}
        </li>
        <li className='cursor-pointer'>Careers</li>
        <li className='cursor-pointer'>About</li>
      </ul>
    
      <div className='absolute top-64 left-7 flex flex-col gap-y-5 justify-center items-center text-gray'>
          <div className='cursor-pointer'>Login</div>
          <button className='border px-16 py-2 border-gray-500 rounded-2xl block cursor-pointer'>Register</button>
      </div>

     
    </div>
  )
}



export default Sidemenu