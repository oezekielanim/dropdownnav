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
    <main className="flex flex-col-reverse pt-10 pb-20 m-3 md:flex-row md:gap-x-44 h-screen">

        {/* info div */}
      <div className='pt-10 text-center md:text-start md:items-start md:pl-32 md:pt-20'>
        <div className='md:flex md:justify-stretch'><h1 className='font-bold text-4xl md:text-5xl md:hidden'>Make remote wor</h1></div>
        <h1 className='font-bold text-4xl hidden pt-7 md:text-5xl md:block md:pt-6'>Make <br />remote work</h1>
        <p className='pt-5 md:pt-14 md:justify-start '>Get you team in sync, no matter your location.
            Streamline processes,create team rituals, and 
            watch productivity soar.
        </p>
        <div className='pt-5 text-white'>
            <button className='bg-black py-3 px-6 text-lg font-bold rounded-xl text-center'>Learn more</button>
        </div>

        {/* logo div */}
        <ul className='flex pt-10 justify-center md:justify-start'>
            {sponsors.map(
                item => {
                    return(
                        <li key={item.id}>
                            <img src={item.img} alt="brand image" className='w-24 h-8 flex px-2'/>
                        </li>
                    )
                }
            )}
        </ul>
      </div>

      {/* image div */}
      <div className='md:pr-40 md:h-screen'>
        <img src={imageHeroDesktop} alt="" className='hidden md:block '/>
        <img src={imageHeroMobile} alt="" className='md:hidden'/>
      </div>
    </main>
  )
}

export default HeroSection
