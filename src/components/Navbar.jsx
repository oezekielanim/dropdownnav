import logo from '../../public/images/logo.svg'

const navbar = () => {
  return (
    <header>
        <nav>
            <figure>
                <img src={logo} alt="" />
            </figure>
            <ul>
                <li>Feature</li>
                <li>Company</li>
                <li>Careers</li>
                <li>About</li>
            </ul>
        </nav>
      
    </header>
  )
}

export default navbar
