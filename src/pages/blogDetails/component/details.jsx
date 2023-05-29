import twitter from "../../../assets/twitter-black.svg";
import facebook from "../../../assets/facebook-black-inverted.svg";
import linkedin from "../../../assets/linkedin-black.svg";
import instagram from "../../../assets/instagram-black.svg";
import profile from "../../../assets/profile.svg";
import calendar from "../../../assets/calender.svg";
import clock from "../../../assets/clock.svg";


const Details = ({heading, content, image, author, publishDate, publishTime, facebookPage, linkedinPage, twitterPage, instagramPage}) => {
    return (
      <div className="mx-[30px] my-[60px]">
        <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[15px]">
          {heading}
        </h1>

        {/* publishing information */}
        <div className="flex gap-[40px] mb-[67px] ">
          <span className="flex items-center gap-[10px]">
            <img src={profile} alt="" className=" w-[20px]" /> <p>{author}</p>
          </span>
          <span className="flex items-center gap-[10px]">
            <img src={calendar} alt="" className=" w-[20px]" />{" "}
            <p>{publishDate}</p>
          </span>
          <span className="flex items-center gap-[10px]">
            <img src={clock} alt="" className=" w-[20px]" />{" "}
            <p>{publishTime}</p>
          </span>
        </div>

        {/* content */}
        <div>{content}</div>

        {/* social links */}
        <div className="flex gap-[25px] items-center">
          <a href={facebookPage}>
            <img src={facebook} alt="" className="w-[20px]" />
          </a>
          <a href={linkedinPage}>
            <img src={linkedin} alt="" className="w-[20px]" />
          </a>
          <a href={twitterPage}>
            <img src={twitter} alt="" className="w-[20px]" />
          </a>
        </div>

      </div>
    );
}

export default Details;