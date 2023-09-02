import logo from "../assets/Group 3586.svg";
import insta from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";
import facebook from "../assets/Facebook.png";
import linkedIn from "../assets/Linkedin.png";
import arrow from "../assets/Vector.png";
import hamburger from "../assets/icon -menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ description, img }) => {
  const [showMembers, setShowMembers] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showPartners, setShowPartners] = useState(false);
  const [showNav, setShowNav] = useState(false)

  const showMemberMenu = () => {
    setShowMembers(!showMembers);
  };
  const showProgramsMenu = () => {
    setShowPrograms(!showPrograms);
  };
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
              <img src={twitter} alt="" />
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
              <li onClick={showProgramsMenu} className="cursor-pointer">
                <div>
                  <div className="flex items-center gap-5">
                    <p>Programmes and Events</p> <img src={arrow} alt="" />
                  </div>
                  {showPrograms ? (
                    <div className="absolute top-[115px] bg-black pl-2 pr-10 py-3 rounded border-t">
                      <p className="pb-4">Programmes</p>
                      <p><Link to="/events">Events</Link></p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li onClick={showPartnersMenu} className="cursor-pointer">
                <div>
                  <div className="flex items-center gap-5">
                    <p>Partner with Us</p> <img src={arrow} alt="" />
                  </div>
                  {showPartners ? (
                    <div className="absolute top-[115px] bg-black pl-2 pr-10 py-3 rounded border-t">
                      <Link to="/currentPartners">
                        <p className="pb-4">See Our Partners</p>
                      </Link>
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
              <li onClick={showProgramsMenu} className="cursor-pointer">
                <div>
                  <div className="flex items-center gap-5">
                    <p>Programmes and Events</p> <img src={arrow} alt="" />
                  </div>
                  {showPrograms ? (
                    <div className="absolute top-[115px] bg-black pl-2 pr-10 py-3 rounded border-t">
                      <p className="pb-4">Programmes</p>
                      <p><Link to="/events">Events</Link></p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li onClick={showPartnersMenu} className="cursor-pointer">
                <div>
                  <div className="flex items-center gap-5">
                    <p>Partner with Us</p> <img src={arrow} alt="" />
                  </div>
                  {showPartners ? (
                    <div className="absolute top-[115px] bg-black pl-2 pr-10 py-3 rounded border-t">
                      <Link to="/currentPartners">
                        <p className="pb-4">See Our Partners</p>
                      </Link>
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
        className={`bg-${img} bg-no-repeat bg-center bg-cover h-72 md:h-[513px] font-montserrat font-[700] text-center flex justify-center items-center md:pt-30 md:px-32 text-white`}
      >
        <h1 className="text-[25px] md:text-[50px]">{description}</h1>
      </div>
    </>
  );
};

export default Header;
