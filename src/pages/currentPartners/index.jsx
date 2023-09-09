import Header from "../../components/Header";
import PartnersCaption from "./components/PartnerCaption";
import Image from "../../assets/smiling african girl.jpg";
import pathh from "../../assets/Path.png";
import { Link } from "react-router-dom";

const CurrentPartners = () => {
  return (
    <div className="font-montserrat bg-background">
      <Header img={"hero"} />
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

        <section className="w-[85%] mx-auto space-y-[10rem]">
          <PartnersCaption
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
          />
          <PartnersCaption
            flexDir={"md:flex-row-reverse"}
            img={Image}
            pathh={pathh}
            head={"Ecotech partners NIA to boast deep tech"}
            text1={
              "The AfriLabs Capacity Building Programme (ACBP) is a 36 months intensive capacity building for hubs across Africa. This programme is funded by the Digital Africa Seed Fund through the French Development Agency&apos;s support."
            }
            text2={
              "The AfriLabs Capacity Building Programme (ACBP) is a 36 months intensive capacity building for hubs across Africa. This programme is funded by the Digital Africa Seed Fund through the French Development Agency&aposs support."
            }
          />
          <PartnersCaption
            flexDir={"md:flex-row"}
            img={Image}
            pathh={pathh}
            head={"Ecotech partners NIA to boast deep tech"}
            text1={
              "The AfriLabs Capacity Building Programme (ACBP) is a 36 months intensive capacity building for hubs across Africa. This programme is funded by the Digital Africa Seed Fund through the French Development Agency&apos;s support."
            }
            text2={
              "The AfriLabs Capacity Building Programme (ACBP) is a 36 months intensive capacity building for hubs across Africa. This programme is funded by the Digital Africa Seed Fund through the French Development Agency&aposs support."
            }
          />
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
