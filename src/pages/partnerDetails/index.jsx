import Header from "../../components/Header";
import user from '../../assets/user.png'
import calendar from '../../assets/calendar.png'
import clock from '../../assets/clock.png'
import pathh from '../../assets/Path.png'

const PartnerDetails = () => {
    return (<div className="font-montserrat bg-background">
        <Header img={'hero'} />

        <div className="mt-[40px] mx-[40px]">
            <div className=" text-left mb-20">
                <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
                    Apple partners nHub
                </h1>

                <div className="flex justify-start items-center gap-16 font-[400] text-[14px]">
                    <div className="flex justify-center items-center gap-3">
                        <img src={user} alt="" />
                        <p>Fon Desmond Gwom</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <img src={calendar} alt="" />
                        <p>May 20th, 2023</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <img src={clock} alt="" />
                        <p>10:29 am</p>
                    </div>
                </div>

                <div className="font-[400] text-[14px] mt-20">

                    <h1>Apple Partners with nHub to Accelerate Innovation in the Healthcare Industry</h1>
                    <p>Apple and nHub, a non-profit organization that connects startups and innovators with corporate partners, have announced a new partnership to accelerate innovation in the healthcare industry. The partnership will focus on using Apple&apos;s technology, such as the iPhone and Apple Watch, to develop new tools and solutions to improve healthcare delivery.</p>
                    <p>
                        As part of the partnership, Apple will provide nHub with access to its technology, expertise, and resources. nHub will then use this access to connect startups and innovators with Apple to develop new healthcare solutions. The partnership will also provide nHub with access to Apple&apos;s network of healthcare partners, which will allow startups and innovators to get their products and services in front of a wider audience.</p>
                    <p>
                        The partnership between Apple and nHub is a significant step forward for both organizations. For Apple, the partnership is an opportunity to extend its reach into the healthcare industry and to develop new products and services that can improve the lives of patients. For nHub, the partnership is an opportunity to connect startups and innovators with Apple and to help them develop new healthcare solutions that can make a real difference in the world.
                    </p>
                    Here are some of the potential benefits of the partnership:
                    <ul className="ml-9">
                        <li className="list-disc">New tools and solutions to improve healthcare delivery</li>
                        <li className="list-disc">Improved patient outcomes</li>
                        <li className="list-disc">Reduced healthcare costs</li>
                        <li className="list-disc">A more efficient healthcare system</li>
                    </ul>
                </div>

                <div className="flex justify-center items-center mt-20">
                    <button className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue mt-10 font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group
                    ">Partner with Us <img src={pathh} alt="" className="hidden group-hover:block" /></button>
                </div>
            </div>
        </div>
    </div>);
}

export default PartnerDetails;