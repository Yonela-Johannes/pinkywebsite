import logo from '../../img/niello.png'
import siteLogo from '../../img/logopinky.png'

export default function Footer() {
  return (
      <div className='footer'>

        <div>
            <p>Be Pleasured By Pinky</p>
            <img className='siteLogo' src={siteLogo} alt='logo' />
        </div>
        <div>
            <p>bepleasuredbypinky@gmail.com</p>
            <p>Call</p>
            <p>Address</p>
            <small>&copy; Copyright 2022, Be Pleasured By Pinky</small>
        </div>
        <div>
            <p>Yonela Johannes</p>
            <p>Full-Stack Web-Developer</p>
            <img className='footerLogo' src={logo} alt='logo' />
        </div>
      </div>
  )
}
