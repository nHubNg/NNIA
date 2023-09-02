import Header from "../../components/Header";
import people from "../../assets//Frame 101.png";
import person from "../../assets/Frame 20.png";
import incubator from "../../assets/brain.png";
import accelerator from "../../assets/accelerator.png";
import makerspace from "../../assets/makerspace.png";
import hackerspace from "../../assets/hackerspace.png";
import startup from "../../assets/startup.png";
import path from "../../assets/path.svg";
import pathh from "../../assets/Path.png";
import innovation from "../../assets/innovation.png";
import technology from "../../assets/technology.png";
import enterpreneur from "../../assets/enterpreneur.png";
import education from "../../assets/education.png";
import woman from "../../assets/woman.png";
import bg from "../../assets/bg.png";
import articleImg from "../../assets/article-img-1.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Virtual } from "swiper";
import "swiper/css/virtual";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { Scrollbar, A11y, Autoplay } from "swiper";
import { Navigation } from "swiper";
import { Pagination } from "swiper";

import Testimonial from "./component/testimonial";
import Specialty from "./component/specialty";
import Article from "./component/article";
import { useEffect, useState } from "react";

const Home = () => {
  const [revPerPage, setRevPerPage] = useState(false);
  const handleSwiper = () => {
    setRevPerPage(!revPerPage);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700 && window.innerWidth < 1000) {
        setRevPerPage(2);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [revPerPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setRevPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 0 && window.innerWidth < 700) {
      setRevPerPage(1);
    } else if (window.innerWidth > 700 && window.innerWidth < 1000) {
      setRevPerPage(2);
    } else if (window.innerWidth > 1000) {
      setRevPerPage(3);
    }
  }, []);

  return (
    <div className="font-montserrat bg-background">
      <Header
        description={"The Largest Community of Tech Innovators in West Africa"}
        img={"hero"}
      />

      <div className=" md:my-20 flex justify-center items-center flex-col mx-5 text-center md:text-left md:mx-16">
        <h1 className="font-[700] text-twitterBlue text-[25px] md:text-[30px] mt-3 mb-3 md:mb-8">
          Meet Us
        </h1>
        <div className="flex flex-col md:flex-row justify-start items-start gap-10 w-full">
          <div className="md:w-1/2  my-auto text-[13px] flex flex-col justify-center items-center">
            <p>
              Network on a mission to create an environment in which all players
              in the Jos startup ecosystem can work together in harmony and
              cooperation, with the ultimate goal of supporting and accelerating
              the growth of startups.
            </p>
            <br />
            <p>
              Through collaboration and mutual support, we believe that we can
              create a thriving startup ecosystem that benefits everyone
              involved, from entrepreneurs and investors to service providers
              and government agencies.
            </p>
            <p>
              By fostering a culture of collaboration and open communication, we
              hope to create a vibrant and dynamic community that attracts
              talent and investment, and helps to position Jos as a hub for
              innovation and entrepreneurship
            </p>

            <div className=" mx-auto my-5">
              <button
                className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue md:mt-16 md:ml-16 font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group
                        "
              >
                See More{" "}
                <img src={pathh} alt="" className="hidden group-hover:block" />
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:w-1/2 justify-center">
            <img src={people} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[70%] flex justify-center items-center h-[500px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={revPerPage}
            // virtual
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Virtual,
              Autoplay,
            ]}
            // navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="flex justify-center items-center flex-col bg-white h-[280px] rounded-[10px] gap-10">
                <img src={incubator} alt="" />
                <p className="font-[700] text-[22px] text-twitterBlue">
                  Incubators
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center flex-col bg-white h-[280px] rounded-[10px] gap-10">
                <img src={accelerator} alt="" />
                <p className="font-[700] text-[22px] text-twitterBlue">
                  Accelerators
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center flex-col bg-white h-[280px] rounded-[10px] gap-10">
                <img src={startup} alt="" />
                <p className="font-[700] text-[22px] text-twitterBlue">
                  Startups
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center flex-col bg-white h-[280px] rounded-[10px] gap-10">
                <img src={makerspace} alt="" />
                <p className="font-[700] text-[22px] text-twitterBlue">
                  Marker Space
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center flex-col bg-white h-[280px] rounded-[10px] gap-10">
                <img src={hackerspace} alt="" />
                <p className="font-[700] text-[22px] text-twitterBlue">
                  Hacker Space
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div
        className={`bg-hero bg-no-repeat bg-center bg-cover h-72 md:h-[513px] font-montserrat font-[700] text-center flex justify-center items-center md:pt-30 md:mb-16 md:px-[270px] text-white flex-col`}
      >
        <h1 className=" text-[23px] md:text-[30px]">
          We champion policies, drive collaboration, innovation, employability
          and entrepreneurship through hubs.
        </h1>
        <button className="px-5 py-2 rounded border-white border-[1px] text-white mt:mt-6 md:mt-16 md:ml-16 font-[700] hover:bg-twitterBlue hover:text-white flex items-center gap-3 group hover:border-twitterBlue">
          Become a Partner{" "}
          <img src={pathh} alt="" className="hidden group-hover:block" />
        </button>
      </div>

      <div className="md:h-[750px] bg-twitterBlue md:p-8 flex gap-16 py-8 ">
        <div className="md:w-1/2 ">
          <p className="text-[28px] font-[700] flex justify-center text-white h-[10%] text-center md:text-start mb-5">
            Meet our community
          </p>
          <div className="flex justify-center items-center flex-col border-white border-[1px] px-7 py-7 md:0  m-5 md:0  rounded md:h-[90%]">
            <div className="text-center flex justify-center items-center lg:pt-30 lg:px-10  text-white text-[30px] md:text-[40px]">
              <p>
                We are a <span className="font-[700]">459 Member</span> Hubs in
                100 Cities & still growing!
              </p>
            </div>
            <div>
              <button className="mt-5 px-5 py-2 border-white border-[1px] text-white font-[700] rounded hover:text-twitterBlue flex items-center gap-3 group hover:bg-white">
                See Our Members{" "}
                <img
                  src={path}
                  alt=""
                  className="hidden group-hover:block text-twitterBlue fill-twitterBlue"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img src={person} alt="" />
        </div>
      </div>

      <div className="flex  lg:flex-row flex-col-reverse justify-between  md:px-20 py-6 md:py-[150px]">
        <div className="flex flex-col md:flex-row justify-center gap-10 lg:gap-24">
          <div className="flex flex-col items-center  gap-10">
            <Specialty
              text="Innovation"
              image={innovation}
              textColor="white"
              backgroundColor="twitterBlue"
            />
            <Specialty
              text="Education"
              image={education}
              textColor="twitterBlue"
              backgroundColor="white"
            />
          </div>

          <div className="flex flex-col items-center gap-10">
            <Specialty
              text="Enterpreneur"
              image={enterpreneur}
              textColor="twitterBlue"
              backgroundColor="white"
            />
            <Specialty
              text="Technology"
              image={technology}
              textColor="white"
              backgroundColor="twitterBlue"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <p className="font-[700] text-[23px] text-center mb-6 md:0 md:text-[28px] border-b-[5px] border-twitterBlue">
            OUR AREA <br /> OF SPECIALTY
          </p>
        </div>
      </div>

      <div className="flex justify-between px-10 md:gap-20 md:pb-20">
        <div className="md:w-1/2">
          <h1 className=" text-[23px] md:text-[26px] lg:text-[34px] md:border-b-[5px] md:w-fit text-center md:border-twitterBlue  mb-6 md:mb-28 md:text-left">
            Our{" "}
            <span className="font-[700]">
              Capacity <br /> Building
            </span>{" "}
            Programme
          </h1>

          <div>
            <p className="text-[18px] text-center md:text-left">
              The AfriLabs Capacity Building Programme (ACBP) is a 36 months
              intensive capacity building for hubs across Africa. This programme
              is funded by the Digital Africa Seed Fund through the French
              Development Agencys support.
            </p>

            <div className="flex justify-center items-center my-5">
              <button
                className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue md:mt-16 md:ml-16  font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group
                        "
              >
                See More{" "}
                <img src={pathh} alt="" className="hidden group-hover:block" />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 ml-20 mr-20">
          <img src={woman} alt="" />
        </div>
      </div>

      <div className="hidden mb-20 md:flex justify-center items-center flex-col mx-16">
        <h1 className="font-[700] text-twitterBlue text-[30px] mb-8">
          Members Say
        </h1>

        <div className="flex md:flex-wrap md:gap-6 lg:gap-14">
          <Testimonial
            img={bg}
            name="nHub Jos"
            description="Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
          />
          <Testimonial
            img={bg}
            name="aHub Jos"
            description="Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
          />
          <Testimonial
            img={bg}
            name="meHub Jos"
            description="Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
          />
        </div>
      </div>

      <div className="px-10 mb-28">
        <h1 className="font-[700] text-twitterBlue text-[26px] text-center md:text-[30px] mb-8">
          Our Latest Article
        </h1>

        <div>
          <div className="flex justify-center flex-wrap gap-14">
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
          </div>

          <div className="flex justify-center  mt-6">
            <button
              className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group
                        "
            >
              See More{" "}
              <img src={pathh} alt="" className="hidden group-hover:block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
