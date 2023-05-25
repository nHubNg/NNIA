import Header from "../../components/Header";
import PartnersCaption from "./components/PartnerCaption";
import Image from "../../assets/smiling african girl.jpg";
import pathh from "../../assets/path.png";

const CurrentPartners = () => {
  return (
    <div className="font-montserrat bg-background">
      <Header img={"hero"} />
      <h1 className="sr-only">Current Partners Page</h1>
      <main className="pt-[71px] pb-[434px]">
        <section className="w-[92%] mx-auto">
          <h2 className="punchLine text-twitterBlue">
            See Our Current Partners
          </h2>
          <p className="mt-[45px] text-center">
            We partner eith the best in the industry to bring you the best in
            tech
          </p>
        </section>

        <section className="w-[85%] mx-auto space-y-[10rem]">
          <PartnersCaption
            img={Image}
            pathh={pathh}
            head={"Ecotech partners NIA to boast deep tech"}
            text1={
              "The AfriLabs Capacity Building Programme (ACBP) is a 36 months intensive capacity building for hubs across Africa. This programme is funded by the Digital Africa Seed Fund through the French Development Agency’s support."
            }
            text2={
              "The AfriLabs Capacity Building Programme (ACBP) is a 36 months intensive capacity building for hubs across Africa. This programme is funded by the Digital Africa Seed Fund through the French Development Agency’s support."
            }
          />
          <PartnersCaption
            flexDir={"flex-row-reverse"}
            img={Image}
            pathh={pathh}
            head={"Ecotech partners NIA to boast deep tech"}
            text1={
              "The AfriLabs Capacity Building Programme (ACBP) is a 36 months intensive capacity building for hubs across Africa. This programme is funded by the Digital Africa Seed Fund through the French Development Agency’s support."
            }
            text2={
              "The AfriLabs Capacity Building Programme (ACBP) is a 36 months intensive capacity building for hubs across Africa. This programme is funded by the Digital Africa Seed Fund through the French Development Agency’s support."
            }
          />
          <PartnersCaption
            img={Image}
            pathh={pathh}
            head={"Ecotech partners NIA to boast deep tech"}
            text1={
              "The AfriLabs Capacity Building Programme (ACBP) is a 36 months intensive capacity building for hubs across Africa. This programme is funded by the Digital Africa Seed Fund through the French Development Agency’s support."
            }
            text2={
              "The AfriLabs Capacity Building Programme (ACBP) is a 36 months intensive capacity building for hubs across Africa. This programme is funded by the Digital Africa Seed Fund through the French Development Agency’s support."
            }
          />
        </section>

        <button className="px-5 py-2 mt-[218px] mx-auto border-twitterBlue border-[1px] text-twitterBlue font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group">
          Partner with Us
          <img src={pathh} alt="" className="hidden group-hover:block" />
        </button>
      </main>
    </div>
  );
};

export default CurrentPartners;
