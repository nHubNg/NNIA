import Header from "../../components/Header";
import pathh from '../../assets/Path.png'
import { useState } from 'react';

const Partner = () => {
    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show);
    }

    return (<>
        <div className="font-montserrat bg-background">
            <Header img={'hero'} />
            <div className=" text-center ">
                <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
                    Why Partner with Us?
                </h1>

                <p className="mx-[30px] md:mx-[90px] lg:mx-[140px]">
                    By partnering with us, you get access to our network of over 100 Innovation Hubs across Nigeria that are focused on creating opportunities for individuals and startups in the tech industry to widen their horizons gain access to markets and resources that would otherwise be out of their reach, all for the growth and advancement of the Nigerian economy.
                </p>
            </div>

            <div className=" text-center mb-20 mx-[30px] md:mx-[90px]  lg:mx-[150px]">
                <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
                    How you can Partner with us
                </h1>

                <ul className='flex flex-col  items-start  list-disc'>
                    <li>Sponsor a Hub &#8211; Region-specific, Vertical-specific, Program-specific</li>
                    <li>Sponsor a Program &#8211; Women, Youth & PLWD Engagement || Circular Economy || COVID Response</li>
                    <li>Sponsor a Project &#8211; CollaHubvate || Development Challenges for Universities || WomenInnovate</li>
                    <li>Sponsor tech- and innovation-based Research</li>
                    <li>Sponsor our advocacy &#8211; Create a more enabling environment for Nigerian Hubs & startups</li>
                    <li>Facilitate a linkage &#8211; Cooperate, other ESO support Organizations, Academia</li>
                    <li>Support our Secretariat &#8211; Operational and overhead costs</li>
                </ul>


                <form className="flex items-end gap-5">
                    <div onClick={toggleShow} className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue mt-16 font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group w-fit justify-center
                    ">Schedule a meeting<img src={pathh} alt="" className="hidden group-hover:block" /></div>
                    {show && (<><input type="date" id="meeting" className="bg-background" />
                        <button className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group
                    ">Set</button></>)}
                </form>
            </div>
            <div className="flex justify-center items-center mb-20">
                <button className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group
                    ">See Partners<img src={pathh} alt="" className="hidden group-hover:block" /></button>
            </div>
        </div>
    </>);
}

export default Partner;