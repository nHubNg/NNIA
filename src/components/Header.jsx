import logo from "../assets/nnia logo.png";
import insta from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";
import facebook from "../assets/Facebook.png";
import linkedIn from "../assets/Linkedin.png";
import arrow from "../assets/Vector.png";
import hamburger from "../assets/icon -menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ description, img, back }) => {
  const [showMembers, setShowMembers] = useState(false);
  // const [showPrograms, setShowPrograms] = useState(false);
  const [showPartners, setShowPartners] = useState(false);
  const [showNav, setShowNav] = useState(false)

  const showMemberMenu = () => {
    setShowMembers(!showMembers);
  };
  // const showProgramsMenu = () => {
  //   setShowPrograms(!showPrograms);
  // };
  const showPartnersMenu = () => {
    setShowPartners(!showPartners);
  };
  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  return (
    <>
      <div className=" px-6 md:px-[45px] bg-background h-[58px] flex justify-between items-center font-montserrat">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="w-[40px] h-[40px]" />
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          <div className="hidden md:flex items-center gap-[59px] text-[14px] font-montserrat">
            <p className=" cursor-pointer">Terms</p>
            <p className=" cursor-pointer">Privacy</p>
            <p className=" cursor-pointer">Cookies</p>
          </div>
          <div className="flex">
            <a href="/">
              <img src={facebook} alt="" />
            </a>
            <a href="/">
              <img src={insta} alt="" />
            </a>
            <a href="/">
              <svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M10.7125 7.62188L17.4134 0H15.8253L10.0072 6.61781L5.35999 0H0L7.02737 10.0074L0 18H1.58805L7.73244 11.0114L12.64 18H18L10.7125 7.62188ZM8.53753 10.0955L7.82542 9.099L2.16018 1.16972H4.59931L9.17102 7.569L9.88298 8.56547L15.826 16.8834H13.3872L8.53753 10.0955Z" fill="#000000"/>
</svg>
            </a>
            <a href="/">
              <img src={linkedIn} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className=" bg-navBlue  lg:bg-black h-[58px]  flex justify-between items-center text-white">
          <div className="flex justify-center items-center w-full lg:hidden" onClick={handleShowNav}>
            <img src={hamburger} className="" alt="" />
          </div>
          <div className="flex justify-center lg:w-full">
            <ul className="hidden lg:flex justify-center items-center gap-12 text-[14px] lg:pr-10">
              <li>
                <Link className='hover:text-twitterBlue' to="/">Home</Link>
              </li>
              <li>
                <Link className='hover:text-twitterBlue' to="/about">About</Link>
              </li>
              <li onClick={showMemberMenu} className="cursor-pointer">
                <div>
                  <div className="flex items-center gap-5">
                    <p className='hover:text-twitterBlue'>Membership Area</p> <img src={arrow} alt="" />
                  </div>
                  {showMembers ? (
                    <div className="absolute top-[115px] bg-black pl-2 pr-10 py-3 rounded border-t">
                      <p className="pb-4">
                        <Link className='hover:text-twitterBlue' to="/members">See Our Members</Link>
                      </p>
                      <p>
                        <Link className='hover:text-twitterBlue' to="/joinUs">Become a Member</Link>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li>
                <p><Link className='hover:text-twitterBlue' to="/events">Programmes</Link></p>
              </li>
              <li onClick={showPartnersMenu} className="cursor-pointer">
                <div>
                  <div className="flex items-center gap-5">
                    <p className='hover:text-twitterBlue'>Partner with Us</p> <img src={arrow} alt="" />
                  </div>
                  {showPartners ? (
                    <div className="absolute top-[115px] bg-black pl-2 pr-10 py-3 rounded border-t">
                      {/* <Link className='hover:text-twitterBlue' to="/currentPartners">
                        <p className="pb-4 hover:text-twitterBlue">See Our Partners</p>
                      </Link> */}
                      <Link className='hover:text-twitterBlue' to="/partner">
                        <p>Become a Partner</p>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li>
                <Link className='hover:text-twitterBlue' to="/blog">Blog</Link>
              </li>
              <li>
                <Link className='hover:text-twitterBlue' to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {showNav && (<div className="flex justify-center lg:w-full absolute bg-navBlue top-28 left-[21%] px-3 py-5">
            <ul className="flex flex-col justify-center items-center gap-2 text-[14px] lg:pr-10 ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li onClick={showMemberMenu} className="cursor-pointer">
                <div>
                  <div className="flex items-center gap-5">
                    <p>Membership Area</p> <img src={arrow} alt="" />
                  </div>
                  {showMembers ? (
                    <div className="absolute top-[115px] bg-black pl-2 pr-10 py-3 rounded border-t">
                      <p className="pb-4">
                        <Link to="/members">See Our Members</Link>
                      </p>
                      <p>
                        <Link to="/joinUs">Become a Member</Link>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li>
                    <p><Link to="/events">Programmes</Link></p>                 
              </li>
              <li onClick={showPartnersMenu} className="cursor-pointer">
                <div>
                  <div className="flex items-center gap-5">
                    <p>Partner with Us</p> <img src={arrow} alt="" />
                  </div>
                  {showPartners ? (
                    <div className="absolute top-[115px] bg-black pl-2 pr-10 py-3 rounded border-t">
                      {/* <Link to="/currentPartners">
                        <p className="pb-4">See Our Partners</p>
                      </Link> */}
                      <Link to="/partner">
                        <p>Become a Partner</p>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>)}
        </div>
      </div>
      <div
        className={`bg-${img} ${back} bg-no-repeat bg-center bg-cover h-72 md:h-[513px] font-montserrat font-[700] text-center flex justify-center items-center md:pt-30 md:px-32 text-white`}
      >
        <h1 className="text-[25px] md:text-[50px]">{description}</h1>
      </div>
    </>
  );
};

export default Header;
