import Header from "../../components/Header";
import HubCard from "./component/hubs";
import airplane from "../../assets/airplane.png";
import nhub from "../../assets/nhub-logo.svg";
import pathh from "../../assets/Path.png";
import Services from "./component/services";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png"
import BoardMembers from "./component/board";
import bashir from "../../assets/bashir.png";


const About = () => {
  return (
    <div className="w-[100%] overflow-x-hidden bg-background">
      <Header img={"hero"} />

      <div className="font-montserrat bg-background grid items-center justify-center mx-[24px] mb-36">
        {/* heading container */}
        <div className=" text-center mb-20">
          <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
            Meet the [name] Community
          </h1>

          <p className=" mx-[140px]">
            By providing financial mentorship, networking opportunities, and
            capacity-building resources, AfriLabs continues to pursue its
            mission of building a more reliable community around the rapidly
            emerging innovation hubs across Africa.
          </p>
        </div>

        <div className="flex w-full">
          {/* startups div */}
          <div className="bg-twitterBlue text-[#FFFFFF] w-1/2 p-[30px] flex flex-col gap-[80px]">
            <h2 className=" text-center font-[700] text-[30px]">
              What are Startups?
            </h2>
            <p>
              A startup is a company or project undertaken by one or more
              entrepreneurs to seek, develop, and validate a scalable business
              model. While entrepreneurship includes all new businesses,
              including self-employment and businesses that do not intend to go
              public, startups are new businesses that intend to grow large
              beyond the solo founder. At the beginning, startups face high
              uncertainty and have high rates of failure, but a minority of them
              do go on to be successful and influential
            </p>

            <p>
              Startups are typically founded by one or more entrepreneurs who
              have a vision for a new product or service. They are often
              motivated by the desire to make a difference in the world, to
              solve a problem, or to make money. Startups are typically small
              and lean, with a small team of employees. They often operate on a
              shoestring budget and are constantly looking for ways to save
              money.
            </p>
          </div>
          {/* image div */}
          <div className="w-1/2 ">
            <img src={airplane} alt="" className="w-full" />
          </div>
        </div>

        <div className="grid place-items-center">
          <h2 className="font-[700] text-[30px] text-twitterBlue text-center mt-[75px] mb-[35px]">
            Our Member Hubs
          </h2>
          <div className="grid grid-cols-3 gap-[20px] justify-center items-center">
            <HubCard
              hubLogo={nhub}
              point1={"Startups"}
              point2={"Innovation"}
              point3={"Community"}
              description={
                " nHub Nigeria is a non-profit organization that was founded in 2013 to promote the growth of the technology ecosystem in Nigeria. The hub is located in Jos, Plateau State, and it provides a variety of services to its members, including:"
              }
              hubList={
                <ul className=" mx-[20px]">
                  <li className=" list-disc">coworking space</li>
                  <li className=" list-disc">mentorship</li>
                  <li className=" list-disc">funding and resources</li>
                  <li className=" list-disc">advocacy</li>
                </ul>
              }
              conclusion={
                "nHub Nigeria is committed to building a strong and vibrant tech ecosystem in Nigeria, and it is working to create a more conducive environment for tech startups and businesses to thrive."
              }
            />
            <HubCard />
            <HubCard />
            <HubCard />
            <HubCard />
            <HubCard />
          </div>

          <button className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue mt-[35px] font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group">
            See all Members
            <img src={pathh} alt="" className="hidden group-hover:block" />
          </button>
        </div>

        <div className="w-full grid place-items-center">
          <h2 className="font-[700] text-[30px] text-twitterBlue text-center mt-[130px] mb-[35px]">
            We Serve in many ways
          </h2>

          <div className="grid grid-cols-4 gap-[35px]">
            <Services
              serviceImage={service1}
              serviceName={"Engaging Stakeholders"}
            />
            <Services
              serviceImage={service2}
              serviceName={"Setting Standards"}
            />
            <Services
              serviceImage={service3}
              serviceName={"Capacity Building"}
            />
            <Services
              serviceImage={service4}
              serviceName={"Providing Opportunities"}
            />
          </div>
        </div>

        <div className="w-full grid place-items-center">
          <h2 className="font-[700] text-[30px] text-twitterBlue text-center mt-[130px] mb-[35px]">
            Meet the Board
          </h2>

          <div className="grid grid-cols-4 gap-[45px]">
            <BoardMembers
              memberImage={bashir}
              memberName={"Bashir Shaidu"}
              memberPosition={"Director"}
              department={"General"}
              twitterPage={""}
            />
            <BoardMembers />
            <BoardMembers />
            <BoardMembers />
            <BoardMembers />
            <BoardMembers />
            <BoardMembers />
            <BoardMembers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
