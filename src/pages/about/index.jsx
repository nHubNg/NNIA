import Header from "../../components/Header";
import HubCard from "./component/hubs";
import airplane from "../../assets/airplane.png";
import nhub from "../../assets/nhub-logo.svg";
import pathh from "../../assets/Path.png";
import Services from "./component/services";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import BoardMembers from "./component/board";
import khamis from "../../assets/khamis.png";
import yusuf from "../../assets/yusuf.jpeg";
import taisu from "../../assets/taisu.jpeg";
import solomon from "../../assets/solomon.jpeg";
import nathan from "../../assets/nathan.jpg";
import amina from "../../assets/amin.jpg";
import ojile from "../../assets/Ojile.jpg";
import axia from "../../assets/axia-logo.svg";
import mainstream from "../../assets/mainstream.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-[100%] overflow-x-hidden bg-background">
      <Header back={"aboutt"} />

      <div className="font-montserrat bg-background items-center justify-center mx-[24px] mb-36">
        {/* heading container */}
        <div className=" text-center mb-20">
          <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
            Meet the NNIA Community
          </h1>

          <p className="md:mx-[140px]">
            A network on a mission to create an environment in which all players
            in the Northern startup ecosystem can work together in harmony and
            cooperation and also serve as a pressure group to bring meaningful
            opportunities to member hubs and startups, with the ultimate goal of
            supporting and accelerating the growth of member hubs and startups.
          </p>
          <p className="md:mx-[140px]">
            Through research and development and mutual support and co-creation,
            we believe that we can create a thriving startup ecosystem that
            benefits everyone involved, from entrepreneurs and investors to
            service providers and government agencies. By fostering a culture of
            collaboration and open communication, we hope to create a vibrant
            and dynamic community that attracts talent and investment, and helps
            to position Northern NIgeria as a hub for innovation and
            entrepreneurship.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row w-full h-full">
          {/* startups div */}
          <div className="bg-twitterBlue text-[#FFFFFF] lg:w-1/2 p-[30px] flex flex-col gap-[50px]">
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
          <div className="w-full lg:w-1/2 h-full">
            <img src={airplane} alt="" className="w-full" />
          </div>
        </div>

        <div className="place-items-center">
          <h2 className="font-[700] text-[30px] text-twitterBlue text-center mt-[75px] mb-[35px] mx-5">
            Our Member Hubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] place-items-center px-8">
            <HubCard
              hubLogo={nhub}
              point1={"Startups"}
              point2={"Innovation"}
              point3={"Community"}
              description={
                " nHub Nigeria is an organization that was founded in 2013 to promote the growth of the technology ecosystem in Nigeria. The hub is located in Jos, Plateau State, and it provides a variety of services to its members, including:"
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
            <HubCard
              hubLogo={axia}
              point1={"Knowledge"}
              point2={"Value"}
              point3={"Productivity"}
              description={
                "Axia Hub is a value and solution driven technology and innovation hub that aids individuals, businesses, organizations, systems and governments, become knowledgeable, valuable, productive & efficient, by the creation, application and use of cutting edge innovative tools, products, services, initiatives and processes aimed at improving the society, in Africa and beyond."
              }
            />
            <HubCard
              hubLogo={mainstream}
              point1={"Creativity"}
              point2={"Development"}
              point3={"Growth"}
              description={
                "We are a modern space, an idea la that encourages creativity,self development, growth and high end skill acquisition. We nurture minds to brilliance, we mentor young minds to understand the formidability of passion, consistency and diligence"
              }
            />
            {/* <HubCard /> */}
          </div>

          <div className="flex justify-center items-center">
            <Link to="/members">
              <button className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue mt-[35px] font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group">
                See all Members
                <img src={pathh} alt="" className="hidden group-hover:block" />
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full hidden md:grid place-items-center">
          <h2 className="font-[700] text-[30px] text-twitterBlue text-center mt-[130px] mb-[35px]">
            We Serve in many ways
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[35px]">
            <Services
              serviceImage={service1}
              serviceName={"Research and Development"}
            />
            <Services
              serviceImage={service2}
              serviceName={"Engaging Stakeholders"}
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

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-[45px]">
            <BoardMembers
              memberImage={
                "https://res.cloudinary.com/nhubnacademy/image/upload/v1682900757/nHubFoundation/bash_efr3k8.jpg"
              }
              memberName={"Bashir Sheidu"}
              memberPosition={"Chairman"}
              twitterPage={"https://twitter.com"}
              facebookPage={"https://facebook.com"}
              linkedinPage={"https://linkedin.com"}
            />

            <BoardMembers
              memberImage={
                "https://res.cloudinary.com/nhubnacademy/image/upload/v1678914784/nhubNigeria/sam_mffar3.jpg"
              }
              memberName={"Samuel Adebayo"}
              memberPosition={"Ecosystem Director"}
              twitterPage={"https://google.com"}
              facebookPage={"https://google.com"}
              linkedinPage={"https://google.com"}
            />
            <BoardMembers
              memberImage={amina}
              memberName={"Amina Ibrahim"}
              memberPosition={"Lead Global Partnership"}
              twitterPage={
                "https://x.com/meeiynalicious/status/1054011062461366272?s=46&t=0kHuBtfBie5WZbSvXto_7w"
              }
              facebookPage={
                "https://www.facebook.com/amina.ibrahim.9847?mibextid=LQQJ4d"
              }
              linkedinPage={
                "http://www.linkedin.com/in/amina-ibrahim-72527b160"
              }
            />
            <BoardMembers
              memberImage={ojile}
              memberName={"Tryphena Ene Ojile"}
              memberPosition={"Communications/Marketing Lead"}
              twitterPage={""}
              facebookPage={"https://m.facebook.com/tryphena.ojile.5/"}
              linkedinPage={"https://ng.linkedin.com/in/tryphena-ojile"}
            />
            <BoardMembers
              memberImage={yusuf}
              memberName={"Yusuf Ahmed"}
              memberPosition={"Zonal Partnership Lead North East"}
              twitterPage={"https://twitter.com/yusufahmedng"}
              facebookPage={"https://www.facebook.com/monsieurdahab"}
              linkedinPage={"https://linkedin.com/in/yusufahmedng"}
            />
            <BoardMembers
              memberImage={taisu}
              memberName={"Tasiu Kwaplong Saeed"}
              memberPosition={"Zonal Partnership Lead North West"}
              twitterPage={"https://google.com"}
              facebookPage={"https://google.com"}
              linkedinPage={"https://google.com"}
            />
            <BoardMembers
              memberImage={solomon}
              memberName={"Solomon Kershima Yateghtegh"}
              memberPosition={"Zonal Partnership Lead North Central"}
              twitterPage={"https://twitter.com/yateghteghsky"}
              facebookPage={"https://instagram.com/yateghteghsky"}
              linkedinPage={"https://linkedin.com/in/yateghteghsky"}
            />
            <BoardMembers
              memberImage={nathan}
              memberName={"Nathan Pankyes H."}
              memberPosition={"Legal"}
              twitterPage={
                "https://x.com/PkNathan2?t=pM_MUY8LubEBjaSft_wjjw&s=08"
              }
              facebookPage={
                "https://www.facebook.com/share/Hwgnwad2FpToz81K/?mibextid=qi2Omg"
              }
              // linkedinPage={"https://linkedin.com/in/yateghteghsky"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
