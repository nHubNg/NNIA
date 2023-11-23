import { Outlet, useNavigate } from "react-router-dom";
import AdminSideNav from "./component/AdminSideNav";
import { useContext } from 'react';
import { useEffect } from "react";
import { ActiveContext } from "../../contexts/ActiveContext";

const Admin = () => {
    const { activeState } = useContext(ActiveContext)
    const navigate = useNavigate()

    useEffect(() => {
        !activeState && navigate('/')
    }, [activeState, navigate])

    return (<>
        <div className='overflow-hidden h-[100vh] relative'>
            <div className="grid grid-cols-10">
                <div className='col-span-2 min-h-screen'>
                    <AdminSideNav />
                </div>
                <div className='col-span-8 max-h-screen  overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    </>);
}

export default Admin;