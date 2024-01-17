import twitter from "../../../assets/twitter-black.svg";
import facebook from "../../../assets/facebook-black.svg";
import linkedin from "../../../assets/linkedin-black.svg";

const BoardMembers = ({memberImage, memberName, memberPosition, facebookPage, linkedinPage, twitterPage}) => {
    return (
      <div className=" border-[5px] border-twitterBlue w-[240px]">
        <img src={memberImage} alt="" className='h-[250px] w-full object-fit' />
        <div className="grid place-items-center gap-[3px] text-center">
          <p>{memberName}</p>
          <p>{memberPosition}</p>
          {/* <p>
            {department}, {memberOrganisation}
          </p> */}

          <div className="flex gap-[17px] items-center justify-center">
            <a href={facebookPage} target="blank">
              <img src={facebook} alt="" className="w-[20px]" />
            </a>

            <a href={linkedinPage} target="blank">
              <img src={linkedin} alt="" className="w-[20px]" />
            </a>

            <a href={twitterPage} target="blank">
               <svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M10.7125 7.62188L17.4134 0H15.8253L10.0072 6.61781L5.35999 0H0L7.02737 10.0074L0 18H1.58805L7.73244 11.0114L12.64 18H18L10.7125 7.62188ZM8.53753 10.0955L7.82542 9.099L2.16018 1.16972H4.59931L9.17102 7.569L9.88298 8.56547L15.826 16.8834H13.3872L8.53753 10.0955Z" fill="#000000"/>
</svg>
            </a>

          </div>
        </div>
      </div>
    );
}

export default BoardMembers;
