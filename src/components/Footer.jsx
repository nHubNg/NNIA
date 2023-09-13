import path from '../assets/Path.png'
import logo from '../assets/nnia logo.png'
import insta from '../assets/Instagramw.png'
import facebook from '../assets/Facebookw.png'
import twitter from '../assets/Twitterw.png'
import linkedin from '../assets/Linkedinw.png'

const Footer = () => {
    return (<>
        <div className="py-10 md:py-[123px] md:px-[163px] bg-black font-montserrat">
            <div className="flex  flex-col lg:flex-row items-center gap-14">
                <div className='flex flex-col  text-center  md:flex-row md:gap-[90px] pb-[20px]'>
                    <div className='text-[14px] text-white'>
                        <p className='font-[700] '>Company</p>
                        <p className='opacity-75 pt-[15px]'>Members</p>
                        <p className='opacity-75 pt-[15px]'>Join Us</p>
                        <p className='opacity-75 pt-[15px]'>Events</p>
                        <p className='opacity-75 pt-[15px]'>Partners</p>
                    </div>
                    <div className='text-[14px] text-white'>
                        <p className='font-[700] '>Information</p>
                        <p className='opacity-75 pt-[15px]'>About Us</p>
                        <p className='opacity-75 pt-[15px]'>FAQ</p>
                        <p className='opacity-75 pt-[15px]'>Support</p>
                    </div>
                    <div className='text-[14px] text-white mb-6'>
                        <p className='font-[700] '>Visit Us</p>
                        <p className='opacity-75 pt-[15px]'>123 Main Street off the unknown <br /> houses, Jos, Nigeria</p>
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
                <div className='flex px-5'>
                    <img src={facebook} alt='' />
                    <img src={insta} alt='' />
                    <img src={twitter} alt='' />
                    <img src={linkedin} alt='' />
                </div>
            </div>
        </div>
    </>);
}

export default Footer;