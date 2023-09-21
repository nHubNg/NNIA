import Header from "../../components/Header";
import pathh from '../../assets/Path.png'
import { useState } from 'react';
import { Link } from "react-router-dom";

const Partner = () => {
    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show);
    }

    return (<>
        <div className="font-montserrat bg-background">
            <Header back={'partner'} />
            <div className=" text-center ">
                <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
                    Why Partner with Us?
                    <br /><span className="text-[20px]">Here&apos;s a little secret</span>
                </h1>
                

                <p className="mx-[30px] md:mx-[90px] lg:mx-[140px]">
                    By joining forces with us, you unlock the gateway to our extensive network of  cutting-edge technology Innovation Hubs in Northern Nigeria. These hubs serve as the ultimate catalysts for entrepreneurs and startups in the tech industry, propelling them towards boundless possibilities. We provide unparalleled opportunities to tap into markets and resources that would otherwise remain elusive, empowering you to transcend limitations and drive Northern region and ultimately embrace the digital economy.
                </p>
            </div>

            <div className=" text-center mb-20 mx-[30px] md:mx-[90px]  lg:mx-[150px]">
                <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
                    How you can Partner with us
                </h1>

                <p className='text-left'>You can sponsor our thought-provoking programs and events; technology innovation & market research; help provide an enabling environment for hubs and startups on the Plateau; help facilitate linkages with corporate and ESO support organizations; support our operational and overhead costs.</p>


                <form className="flex items-end gap-5">
                    <div onClick={toggleShow} className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue mt-16 font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group w-fit justify-center
                    ">Schedule a meeting<img src={pathh} alt="" className="hidden group-hover:block" /></div>
                    {show && (<><input type="date" id="meeting" className="bg-background" />
                        <button className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group
                    ">Set</button></>)}
                </form>
            </div>
            <div className="flex justify-center items-center mb-20">
                <Link to='currentPartners'>
                    <button className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group
                        ">See Partners<img src={pathh} alt="" className="hidden group-hover:block" /></button>
                </Link>
            </div>
        </div>
    </>);
}

export default Partner;