// import databiz from '../assets/images/client-databiz.svg'
// import audiophile from '../assets/images/client-audiophile.svg'
// import meet from '../assets/images/client-meet.svg'
// import maker from '../assets/images/client-maker.svg'

import imageHeroDesktop from '../assets/images/image-hero-desktop.png'
import imageHeroMobile from '../assets/images/image-hero-mobile.png'
import {v4 as uuidv4} from 'uuid';import { useState } from 'react'

const sponsors = [
    {
        "id": uuidv4(),
        "img": "/images/client-databiz.svg"
       
    },
    {
        "id": uuidv4(),
        "img": "/images/client-audiophile.svg",
      
    },
    {
        "id":uuidv4() ,
        "img": "/images/client-meet.svg"
      
    },
    {
        "id": uuidv4(),
        "img": "/images/client-maker.svg"
    }
]

const HeroSection = () => {
  return (
    <main className="flex flex-col-reverse pt-7 gap-y-8 md:gap-y-0   md:flex-row md:gap-x-44">

        {/* info div */}
      <div className=''>
        <h1 className='md:hidden text-center font-black text-4xl '>Make remote work</h1>
        <h1 className='hidden'>Make <br />remote work</h1>
        <p className='text-center px-4 py-4 text-base'>Get your team in sync, no matter your location.
            Streamline processes, create team rituals, and 
            watch productivity soar.
        </p>
        <div className='flex justify-center items-center py-5'>
        <button className='bg-black  text-white py-3 px-6  text-lg font-bold rounded-2xl text-center'>Learn more</button>
        </div>
        

        {/* logo div */}
        <ul className='flex gap-x-4 justify-center items-center py-4 px-4'>
            {sponsors.map(
                item => {
                    return(
                        <li key={item.id} className='even:w-16'>
                            <img src={item.img} alt="brand image" className='w-20'/>
                        </li>
                    )
                }
            )}
        </ul>
      </div>

      {/* image div */}
      <div className='w-full h-ful'>
        <img src={imageHeroDesktop} alt="" className='hidden md:block '/>
        <img src={imageHeroMobile} alt="" className='md:hidden'/>
      </div>
    </main>
  )
}

export default HeroSection
