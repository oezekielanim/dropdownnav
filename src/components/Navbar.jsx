import logo from '../assets/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className='mx-auto container pt-8'>
        <nav className='flex px-10 items-center justify-between'>
            <figure className='mr-10 '>
                <img src={logo} alt="" />
            </figure>
            <ul className=' gap-x-4 hidden md:flex '>
                <li>Feature</li>
                <li>Company</li>
                <li>Careers</li>
                <li>About</li>
            </ul>
            <GiHamburgerMenu className='w-10 h-10' />

        </nav>
      
    </header>
  )
}

export default Navbar
