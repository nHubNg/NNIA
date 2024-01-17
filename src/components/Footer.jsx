import path from '../assets/Path.png'
import logo from '../assets/nnia logo.png'
import insta from '../assets/Instagramw.png'
import facebook from '../assets/Facebookw.png'
import twitter from '../assets/Twitterw.png'
import linkedin from '../assets/Linkedinw.png'
// import { Link } from "react-router-dom";

const Footer = () => {
    return (<>
        <div className="py-10 md:py-[123px] md:px-[163px] bg-black font-montserrat">
            <div className="flex  flex-col lg:flex-row items-center gap-14">
                <div className='flex flex-col  text-center  md:flex-row md:gap-[90px] pb-[20px]'>
                    <div className='text-[14px] text-white'>
                        <p className='font-[700] '>Company</p>
                        {/* <Link to='/members'> */}
                        <p className='opacity-75 pt-[15px]'>Members</p>
                        {/* </Link> */}
                        {/* <Link to='/joinuUs'> */}
                            <p className='opacity-75 pt-[15px]'>Join Us</p>
                            {/* </Link> */}
                        {/* <Link to='/events'> */}
                            <p className='opacity-75 pt-[15px]'>Events</p>
                            {/* </Link> */}
                        {/* <Link to='/partner'> */}
                            <p className='opacity-75 pt-[15px]'>Partners</p>
                            {/* </Link> */}
                    </div>
                    <div className='text-[14px] text-white'>
                        <p className='font-[700] '>Information</p>
                        <p className='opacity-75 pt-[15px]'>About Us</p>
                        <p className='opacity-75 pt-[15px]'>FAQ</p>
                        <p className='opacity-75 pt-[15px]'>Support</p>
                    </div>
                    <div className='text-[14px] text-white mb-6'>
                        <p className='font-[700] '>Visit Us</p>
                        <p className='opacity-75 pt-[15px]'>2nd floor, TAEN Business Complex,<br /> Jos Plateau State, Nigeria</p>
                    </div>
                </div>
                <div className='md:w-[310px] h-[240px] bg-footerBackground pt-[30px] px-6 md:px-[25px] text-white text-[14px]'>
                        <p className='opacity-75'>Subscribe to Our Email List</p>
                        <div className='flex items-center justify-center py-[20px]'>
                            <input type='email' placeholder='Email Address' className='h-[44px] rounded-l-[6px] px-3 w-[185px] outline-none text-black' />
                            <div className='bg-twitterBlue h-[44px] flex justify-center items-center px-[14px] rounded-r-[6px]'><img src={path} alt='' /></div>
                        </div>
                        <p className='opacity-75'>Subscribe to our email and receive email newsletter </p>
                    </div>
            </div>

            <div className='flex justify-center pt-[25px] pb-[25px]'>
                <div className='h-[1px] w-[95%] bg-white opacity-20'></div>
            </div>

            <div className='flex items-center justify-between'>
                <div> <img src={logo} className='hidden md:block w-[10%]' alt='' /> </div>
                <div className='hidden md:flex items-center gap-[59px] text-[14px] font-montserrat text-white'>
                    <p className='opacity-75 cursor-pointer'>Terms</p>
                    <p className='opacity-75 cursor-pointer'>Privacy</p>
                    <p className='opacity-75 cursor-pointer'>Cookies</p>
                </div>
                <div className='flex justify-center items-center gap-2 px-5'>
                    <img src={facebook} alt='' />
                    <img src={insta} alt='' />
                    <div><svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M10.7125 7.62188L17.4134 0H15.8253L10.0072 6.61781L5.35999 0H0L7.02737 10.0074L0 18H1.58805L7.73244 11.0114L12.64 18H18L10.7125 7.62188ZM8.53753 10.0955L7.82542 9.099L2.16018 1.16972H4.59931L9.17102 7.569L9.88298 8.56547L15.826 16.8834H13.3872L8.53753 10.0955Z" fill="#FFFFFF"/>
</svg></div>
                    <img src={linkedin} alt='' />
                </div>
            </div>
        </div>
    </>);
}

export default Footer;
