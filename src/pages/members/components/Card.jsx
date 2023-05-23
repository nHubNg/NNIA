import rightArrow from "../../../assets/Path.svg";

const Card = ({ img }) => {
  return (
    <>
      <div className="max-w-[400px] h-[475px] relative group cursor-pointer overflow-y-hidden hover: group">
        <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center bg-white border-[6px] border-black z-10 group-hover:translate-y-[120%] translate-y-[0%] transition duration-500 ease-linear">
          <img src={img} alt="" />
        </div>

        <div className="absolute top-0 left-0 right-0  text-center bg-twitterBlue text-white px-[23px] py-[23px] translate-y-[120%] group-hover:translate-y-[0%] transition duration-500 ease-linear">
          <p className="mb-4">
            nHub Nigeria is a non-profit organization that was founded in 2013
            to promote the growth of the technology ecosystem in Nigeria. The
            hub is located in Jos, Plateau State, and it provides a variety of
            services to its members, including:
          </p>

          <ul className="mb-4 list-disc list-inside marker:text-xs">
            <li>Coworking space</li>
            <li>Mentorship and training programs</li>
            <li>Access to funding and resources</li>
            <li>Advocacy for the tech industry</li>
          </ul>

          <p className="mb-4">
            nHub Nigeria is committed to building a strong and vibrant tech
            ecosystem in Nigeria, and it is working to create a more conducive
            environment for tech startups and businesses to thrive.
          </p>

          <button>
            <a className="flex items-center justify-between  py-[.9rem] px-6 font-bold border-[1px] border-white rounded-md mx-auto hover:text-twitterBlue hover:bg-white hover:border-none group">
              Visit Website
              <img
                className="hidden group-hover:block mt-[4px] ml-[4px]"
                src={rightArrow}
                alt=""
              />
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
