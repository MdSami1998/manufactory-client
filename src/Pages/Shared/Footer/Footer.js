import React from 'react';
import './Footer.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const today = new Date();
    const year = today.getFullYear();

    const handleLogoClick = () => {
        navigate('/home');
    };
    return (
        <footer className='h-auto'>
            <div className='footer-info p-0 md:p-10 pb-0'>
                <div>
                    <h1 onClick={handleLogoClick} className=' text-center text-4xl font-bold cursor-pointer text-secondary'>Manu<span className='text-accent'>Factory</span></h1>
                </div>
                <div className='text-white flex flex-col items-center md:block'>
                    <p><small>About online manufacturer </small></p>
                    <p><small>Read our blog</small></p>
                    <p><small>Sign Up to deliver</small>  </p>
                    <p><small>Get you products</small></p>
                </div>
                <div className='text-white flex flex-col items-center md:block'>
                    <p><small>Get help</small></p>
                    <p><small>Read FAQS</small></p>
                    <p><small>view ALL CITIES</small></p>
                    <p><small>Factory near me</small></p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-end p-8'>
                <div className='w-10/12 h-0.5 bg-secondary'>

                </div>
                <small className='mt-3 text-accent'> &copy; Manufactory {year} Allright Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;