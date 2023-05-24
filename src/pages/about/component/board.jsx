import twitter from "../../../assets/twitter-black.svg";
import facebook from "../../../assets/facebook-black.svg";
import linkedin from "../../../assets/linkedin-black.svg";

const BoardMembers = ({memberImage, memberName, memberPosition, department, facebookPage, linkedinPage, twitterPage}) => {
    return (
      <div className=" border-[5px] border-black w-[240px]">
        <img src={memberImage} alt="" />
        <div className="grid place-items-center gap-[3px] text-center">
          <p>{memberName}</p>
          <p>
            {memberPosition}, {department}
          </p>

          <div className="flex gap-[17px] items-center justify-center">
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
      </div>
    );
}

export default BoardMembers;