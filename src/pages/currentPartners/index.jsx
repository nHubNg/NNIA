import Header from "../../components/Header";
// import PartnersCaption from "./components/PartnerCaption";
// import Image from "../../assets/smiling african girl.jpg";
import pathh from "../../assets/Path.png";
import { Link } from "react-router-dom";
import startupBauchi from '../../assets/startupBauchi.jpg'
import startupArewa from '../../assets/startupArewa.jpg'
import pictda from '../../assets/pictda.jpg'

const CurrentPartners = () => {
  return (
    <div className="font-montserrat bg-background">
      <Header back={"partner"} />
      <h1 className="sr-only">Current Partners Page</h1>
      <main className="pt-[71px] pb-[134px]">
        <section className="w-[92%] mx-auto">
          <h2 className="punchLine text-[30px] text-twitterBlue">
            See Our Current Partners
          </h2>
          <p className="mt-[45px] text-center">
            We partner with the best in the industry to bring you the best in
            tech
          </p>
        </section>

        {/* <section className="w-[85%] mx-auto space-y-[10rem]"> */}
          {/* <PartnersCaption
            flexDir={"md:flex-row"}
            img={Image}
            pathh={pathh}
            head={"Ecotech partners NIA to boast deep tech"}
            text1={
              "The AfriLabs Capacity Building Programme (ACBP) is a 36 months intensive capacity building for hubs across Africa. This programme is funded by the Digital Africa Seed Fund through the French Development Agency&apos;s support."
            }
            text2={
              "The AfriLabs Capacity Building Programme (ACBP) is a 36 months intensive capacity building for hubs across Africa. This programme is funded by the Digital Africa Seed Fund through the French Development Agency&apos;s support."
            }
          /> */}
        {/* </section> */}

        <section className="pt-[50px]">
          <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem] ">
            <div className="max-w-[400px] h-[375px] relative group cursor-pointer overflow-y-hidden hover: group">
              <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center bg-white border-[6px] border-twitterBlue z-10 rounded-[10px]">
                <img src={startupBauchi} alt="" />
              </div>
          </div>
            <div className="max-w-[400px] h-[375px] relative group cursor-pointer overflow-y-hidden hover: group">
              <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center bg-white border-[6px] border-twitterBlue z-10 rounded-[10px]">
                <img src={startupArewa} alt="" />
              </div>
            </div><div className="max-w-[400px] h-[375px] relative group cursor-pointer overflow-y-hidden hover: group">
              <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center bg-white border-[6px] border-twitterBlue z-10 rounded-[10px]">
                <img src={pictda} alt="" />
              </div>
            </div>
          </div>
          </section>

        <Link to='/partner'>
          <button className="px-5 py-2 mt-[218px] mx-auto border-twitterBlue border-[1px] text-twitterBlue font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group">
            Partner with Us
            <img src={pathh} alt="" className="hidden group-hover:block" />
          </button>
        </Link>
      </main>
    </div>
  );
};

export default CurrentPartners;
