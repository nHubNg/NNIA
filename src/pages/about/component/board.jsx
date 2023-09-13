import twitter from "../../../assets/twitter-black.svg";
import facebook from "../../../assets/facebook-black.svg";
import linkedin from "../../../assets/linkedin-black.svg";

const BoardMembers = ({memberImage, memberName, memberPosition, memberOrganisation, department, facebookPage, linkedinPage, twitterPage}) => {
    return (
      <div className=" border-[5px] border-twitterBlue w-[240px]">
        <img src={memberImage} alt="" />
        <div className="grid place-items-center gap-[3px] text-center">
          <p>{memberName}</p>
          <p>{memberPosition}</p>
          <p>
            {department}, {memberOrganisation}
          </p>

          <div className="flex gap-[17px] items-center justify-center">
            <a href={facebookPage} target="blank">
              <img src={facebook} alt="" className="w-[20px]" />
            </a>

            <a href={linkedinPage} target="blank">
              <img src={linkedin} alt="" className="w-[20px]" />
            </a>

            <a href={twitterPage} target="blank">
              <img src={twitter} alt="" className="w-[20px]" />
            </a>

          </div>
        </div>
      </div>
    );
}

export default BoardMembers;