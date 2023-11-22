import logo from '../assets/images/logo.svg'
import menuicon from '../assets/images/icon-menu.svg'
import arrowdown from '../assets/images/icon-arrow-down.svg'

const Navbar = () => {
  return (
    <header className='container pt-8 '>
        <nav className='flex px-10 justify-between'>
            <div className='flex justify-center items-center'>
                <figure className='mr-10 '>
                    <img src={logo} alt="" />
                </figure>
                <ul className=' gap-x-4 hidden  md:flex md:justify-between pb-2'>
                    <li className='flex items-center justify-center gap-x-2'>
                        Features <span className=''><img src={arrowdown} alt="" /></span>
                    </li>
                    <li className='flex items-center justify-center gap-x-2'>
                        Company <span className=''><img src={arrowdown} alt="" /></span>
                    </li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </div>
            
            <div className='hidden md:flex gap-x-5 justify-center items-center'>
                <div>Login</div>
                <button className='border-2 px-5 py-2 border-gray-500 rounded-2xl block'>Register</button>
            </div>

            <img src={menuicon} alt="" className='md:hidden'/>
        </nav>
      
    </header>
  )
}

export default Navbar
