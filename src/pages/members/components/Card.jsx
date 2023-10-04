import rightArrow from "../../../assets/path.svg";

const Card = ({ img, link, text }) => {
  return (
    <>
      <div className="max-w-[400px] h-[375px] relative group cursor-pointer overflow-y-hidden hover: group">
        <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center bg-white border-[6px] border-twitterBlue z-10 group-hover:translate-y-[120%] translate-y-[0%] transition duration-500 ease-linear rounded-[10px]">
          <img src={img} alt="" />
        </div>

        <div className="absolute top-0 left-0 right-0 lg:text-[13px] text-[12px] text-center bg-twitterBlue text-white px-[23px] py-[23px] translate-y-[120%] group-hover:translate-y-[0%] transition duration-500 ease-linear rounded-[10px]">
          <p className="mb-4">
            {text}
          </p>


          <button>
            <a href={link} className="flex items-center justify-between  py-[.9rem] px-6 font-bold border-[1px] border-white rounded-md mx-auto hover:text-twitterBlue hover:bg-white hover:border-none group" target="_blank" rel='noreferrer'> 
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
