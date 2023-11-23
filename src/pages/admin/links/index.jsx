import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Links = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : '',
            borderRadius: isActive ? '12px' : '',
        };
    };

    return (<>
        <div className='w-full'>
            <div className='flex justify-around items-center w-full bg-twitterBlue px-20'>

                <div className='flex justify-between items-center w-full pb-2'>
                    <NavLink to='/admin/links/allLinks' style={navLinkStyle} className="flex items-center gap-1 py-2 mt-2 hover:bg-transparent rounded-md px-3  hover:rounded-xl transition">
                        <p className={` text-black md:text-white md:text-[15px] `}>All Links</p>
                    </NavLink>

                    <NavLink to='/admin/links/create' style={navLinkStyle} className="flex items-center gap-1 py-2 mt-2 hover:bg-transparent rounded-md px-3  hover:rounded-xl transition">
                        <p className={` text-black md:text-white md:text-[15px] `}>Create Link</p>
                    </NavLink>

                    <NavLink to='/admin/links/editLink' style={navLinkStyle} className="flex items-center gap-1 py-2 mt-2 hover:bg-transparent rounded-md px-3  hover:rounded-xl transition">
                        <p className={` text-black md:text-white md:text-[15px] `}>Edit Link</p>
                    </NavLink>
                </div>
            </div>

            <div className={``}>
                <Outlet />
            </div>
        </div>

    </>);
}

export default Links;