import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Blogs = () => {
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
                    <NavLink to='/admin/blogs/allBlogs' style={navLinkStyle} className="flex items-center gap-1 py-2 mt-2 hover:bg-transparent rounded-md px-3 hover:rounded-xl transition">
                        <p className={`text-white md:text-[15px]`}>All Blogs</p>
                    </NavLink>

                    <NavLink to='/admin/blogs/createBlog' style={navLinkStyle} className="flex items-center gap-1 py-2 mt-2 hover:bg-transparent rounded-md px-3 hover:rounded-xl transition">
                        <p className={`text-white md:text-[15px]`}>Create Blog</p>
                    </NavLink>

                    <NavLink to='/admin/blogs/editBlog' style={navLinkStyle} className="flex items-center gap-1 py-2 mt-2 hover:bg-transparent rounded-md px-3 hover:rounded-xl transition">
                        <p className={`text-white md:text-[15px]`}>Edit Blog</p>
                    </NavLink>
                </div>

            </div>

            <div className={``}>
                <Outlet />
            </div>
        </div>

    </>);
}

export default Blogs;