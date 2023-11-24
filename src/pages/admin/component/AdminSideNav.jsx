import Cookies from 'js-cookie';
import {NavLink, Link, useNavigate} from 'react-router-dom';
import logo from '../../../assets/nnia logo.png'


const AdminSideNav = () => {
const navigate = useNavigate()
    const navLinkStyle = ({isActive}) => {
        return {
            backgroundColor: isActive ? '#fff' : '',
            padding: isActive ? '5px 10px 5px 10px' : '',
            borderRadius: isActive ? '40px 0 0 40px' : '',
            color: isActive ? 'rgb(26 140 216)' : '',
        };
    };

    const handleLogOut = () => {
        Cookies.remove('status')
        navigate('/')
    }


    return (<>
        <div
            className={`bg-twitterBlue h-screen rounded-tr-[0px] text-white pt-[70px] pb-[120px] items-center lg:pl-[30px] flex flex-col justify-between  text-[16px] font-poppins`}>
            <div className=' lg:block w-full'>
                <Link to='/'>
                    <img src={logo} className='w-16' alt="" />
                </Link>
            </div>
            <div className='lg:hidden'></div>
            <div className='flex flex-col justify-between gap-[50px] w-full'>
                <NavLink style={navLinkStyle} to='/admin/overview'>
                    <div className='flex items-center gap-[15px] w-full'>
                         <p className=' w-full  lg:block'>Overview</p>
                    </div>
                </NavLink>
                <NavLink style={navLinkStyle} to='/admin/links/allLinks'>
                    <div className='flex items-center gap-[15px] w-full'>
                         <p className=' w-full  lg:block'> Links</p>
                    </div>
                </NavLink>
                <NavLink style={navLinkStyle} to='/admin/blogs/allBlogs'>
                    <div className='flex items-center gap-[15px] w-full'>
                         <p className=' w-full  lg:block'>Blogs</p>
                    </div>
                </NavLink>
                {/* <NavLink style={navLinkStyle} to='/admin/orders'><div className='flex items-center gap-[15px]'>
                    <img src={check} alt="" /> <p className=' w-full'>Mark Orders</p>
                </div></NavLink> */}
            </div>

            <div className='flex w-full'>
                <div
                    className='flex items-center gap-[15px] hover:bg-[#fff] hover:px-[10px] hover:py-[5px] hover:text-twitterBlue hover:rounded-tl-[40px] hover:rounded-bl-[40px] cursor-pointer w-full' onClick={handleLogOut}
                    >
                     <p className=' lg:block'>Logout</p>
                </div>
            </div>
        </div>
    </>);
}

export default AdminSideNav;