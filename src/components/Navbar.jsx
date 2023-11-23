import logo from '../assets/images/logo.svg'
import menuicon from '../assets/images/icon-menu.svg'
import arrowdown from '../assets/images/icon-arrow-down.svg'
import arrowup from '../assets/images/icon-arrow-up.svg'
import React from 'react'
import Dropmenu from './Dropmenu'
import Sidemenu from './Sidemenu'
import {v4 as uuidv4} from 'uuid';import { useState } from 'react'


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


const Navbar = () => {
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false)

    // The two functions below handle hover states 
    function handleFeaturesMouseOver() {
        setFeaturesOpen(true);
      }
    
      function handleFeaturesMouseOut() {
        setFeaturesOpen(false);
      }
    
      function handleCompanyMouseOver() {
        setCompanyOpen(true);
      }
    
      function handleCompanyMouseOut() {
        setCompanyOpen(false);
      }

    //function to handle menu click
    function handleMenuClick(){
        console.log("clicked");
        setMenuOpen(!menuOpen)

    }

  return (
    <header className='container pt-8 '>
        <nav className='flex px-10 justify-between text-sm'>
            <div className='flex justify-center items-center'>
                <figure className='mr-10 '>
                    <img src={logo} alt="" />
                </figure>
                <ul className=' gap-x-4 hidden  md:flex md:justify-between pb-2'>
                    <li className='flex items-center justify-center gap-x-2 cursor-pointer' onMouseOver={handleFeaturesMouseOver} onMouseOut={handleFeaturesMouseOut}>
                        Features <span className=''><img src={featuresOpen? arrowup: arrowdown} alt="icon" /></span>
                        {/*This is a dropdown menu */}
                        {featuresOpen &&<div className='hidden md:block max-w-fit text-xs text-gray py-5 px-4 font-thin shadow-xl rounded-xl absolute top-[68px] left-28 '>
                        <Dropmenu menuList={featureMenu}/>
                        </div>}
                    </li>
                    <li className='flex items-center justify-center gap-x-2 cursor-pointer'  onMouseOver={handleCompanyMouseOver} onMouseOut={handleCompanyMouseOut}>
                        Company <span className=''><img src={companyOpen? arrowup: arrowdown} alt="icon" /></span>
                        {/* This is a dropdown menu */}
                        {companyOpen && <div className='hidden md:block max-w-fit text-xs text-gray py-6 px-4 font-thin shadow-xl rounded-xl absolute top-[68px] left-64 '>
                        <Dropmenu menuList={companyMenu}/>
                        </div>}
                    </li>
                    <li className='cursor-pointer'>Careers</li>
                    <li className='cursor-pointer'>About</li>
                </ul>
            </div>
            
            <div className='hidden md:flex gap-x-5 justify-center items-center'>
                <div className='cursor-pointer'>Login</div>
                <button className='border-2 px-5 py-2 border-gray-500 rounded-2xl block cursor-pointer'>Register</button>
            </div>

            <img onClick={handleMenuClick} src={menuicon} alt="humburger menu" className='md:hidden'/>
            <Sidemenu open={menuOpen} setOpen={setMenuOpen}/>
        </nav>
      
    </header>
  )
}

export default Navbar
