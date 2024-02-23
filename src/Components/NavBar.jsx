import '../app/NavBarStyles.css'
import Image from 'next/image';

export default function NavBar() {
  

  return (
   <nav className='nav-main'>
   
    <input type='checkbox' className='nav-main__btn-collapse' id='nav-main__checkbox'/>
    <label htmlFor='nav-main__checkbox' className='nav-main__btn-collapse-icon'>
        <span className='icon-nav'></span>
        <span className='icon-nav'></span>
        <span className='icon-nav'></span>
    </label>
   
    <div className='nav-main__btn-collaps-bg'></div>

    <div className='nav-main__menu'>
        <a  className='nav-main__link-item'>Home</a>
        <a  className='nav-main__link-item'>Accounts</a>
        <a  className='nav-main__link-item'>Transfers</a>
        <a  className='nav-main__link-item'>Services</a>
        <a  className='nav-main__link-item'>Settings</a>
        <a  className='nav-main__link-item'>Log Out</a>
    </div>

    <div className='bank-logo'>
        <Image 
        src="/Bank-logo.png"
        alt="Image" 
        width={60} 
        height={60}
        />
    </div>
   </nav>
  );
}

