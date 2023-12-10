import Header from "../../components/Header";
import Card from "./components/Card";
import Image from "../../assets/nHub-logo.png";
import axia from "../../assets/axia-logo.svg";
import mainstream from "../../assets/mainstream.png";
import skyhub from "../../assets/skyhub.png";
import akclogo from "../../assets/akclogo.png";
import stl from "../../assets/stl.jpg";
import thrive from "../../assets/thrive.png";
import annikedel from "../../assets/annikedel.png";
import jostgreen from "../../assets/jostgreen.png";
import nhubfoundation from "../../assets/nhubfoundation.png";
import innovations from "../../assets/innovations.jpeg";
import loveTech from "../../assets/loveTech.jpeg"

import { Link } from "react-router-dom";

const Members = () => {
  return (
    <div>
      <Header back={'memberss'} />
      <h1 className="sr-only">members page</h1>
      <main>
        <section className="mx-auto mt-[68px]">
          <h2 className="punchLine text-twitterBlue">Info About Partner Hubs</h2>
        </section>

        <section className="pt-[50px] pb-[100px]">
          <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem] ">
            <Card img={Image} text='nHub Nigeria is an organization that was founded in 2013
            to promote the growth of the technology ecosystem in Nigeria. The
            hub is located in Jos, Plateau State, and it provides a variety of
            services to its members, including: Coworking space, Mentorship and training programs, Access to funding and resources, Advocacy for the tech industry. nHub Nigeria is committed to building a strong and vibrant tech
            ecosystem in Nigeria, and it is working to create a more conducive
            environment for tech startups and businesses to thrive.' link={'https://nhubnigeria.ng'} />
            <Card img={axia} text='Axia Hub is a value and solution driven technology and innovation hub that aids individuals, businesses, organizations, systems and governments, become knowledgeable, valuable, productive & efficient, by the creation, application and use of cutting edge innovative tools, products, services, initiatives and processes aimed at improving the society, in Africa and beyond.' />
            <Card img={nhubfoundation} text='nHub Foundation is a non-governmental and not-for-profit organization that leverages on emerging technologies, works to enhance policy advocacy, gender inclusiveness, Technology for all, infrastructure/capacity building as regards Employability and Entrepreneurship, innovation and every aspect of social impact. The hub is modelled around the SDG goals.' link={'https://nhubfoundation.org/'} />
            <Card img={mainstream} text='We are a modern space, an idea la that encourages creativity,self development, growth and high end skill acquisition. We nurture minds to brilliance, we mentor young minds to understand the formidability of passion, consistency and diligence' link='https://mehubnigeria.com.ng' />
            <Card img={jostgreen} text='Jost Greens Services Limited is a collective of experts, with the aim of ensuring impact investment is accessible to businesses that traditionally encounter insurmountable barriers to accessing and managing credit and other financing options. We are primarily focused on the underserved geographic demographic of Northern Nigeria, with the intent to scale nationwide. We serve as a business accelerator, providing; investment training, Investment matching, and post-investment support.' link='https://www.colemanparkes.com/' />
            <Card img={annikedel} text='Boluwatife Oluwafemi, a seasoned Principal Consultant at Annikedel Company, has guided 30+ startups to success. As a Steel DAO VC Scout for Bessemer Ventures and a Venture Scout for Ajim Capital, he&apos;s a master at identifying innovation. In year 2021 & 2022, he joined an elite panel of judges for the $1m Global Edtech Cup Competition alongside experts from Microsoft Ventures, Google Ventures, Sequoia, and more.' link={'https://annikedelcompany.com'} />
            <Card img={skyhub} text='SKYHub Nigeria is a creative digital media agency and training hub that helps individuals and organizations achieve their goals through the use of digital tools and platforms.' link={'http://skyhubnigeria.com/'} />
            <Card img={thrive} text='Thrive Media Africa is a digital marketing hub that helps businesses thrive online. We are a team of experienced professionals who are passionate about helping businesses grow their online presence, increase sales and reach their target audience.' link='https://thrivemediaafrica.com' />
            <Card img={loveTech} text='At LoveTech, we are passionate about the endless possibilities that technology offers to shape a better, more connected, and sustainable world. We are a dynamic and diverse team of experts dedicated to harnessing the power of technology across a wide spectrum of fields, including web, mobile, desktop apps, VR apps, AR apps, renewable energy, IoT, and hardware solutions. Our journey is fueled by a deep love for technology and a commitment to making a positive impact on the world we share.' link='https://lovetechnigeria.com.ng/' />
            <Card img={akclogo} link='https://akconnecthub.com.ng' text='AKCONNECTHUB is reducing digital illiteracy among young individuals and vulnerable groups (disabled individuals) in North Central Nigeria by making learning fun to them and promoting inclusion. We&apos;re breaking language barrier in learning tech.' />
            <Card img={innovations} link='https://www.02innovationslab.com/' text='02 Innovations Lab is a technology innovation hub dedicated to providing innovative solutions tailored to meet the needs of SMEs, startups, and various organizations.' />
            <Card img={stl} link='https://sunnahtechlab.com' text='Sunnah Tech Lab is a dynamic and forward-thinking tech hub committed to cultivating talent and narrowing the digital divide, with a special focus on underserved communities. Our mission revolves around incubating and accelerating innovative ideas, empowering individuals to turn their tech dreams into reality. Through cutting-edge resources, mentorship, and a vibrant community, we strive to foster a culture of innovation and inclusivity' />

          </div>

          <Link to='/joinUs'>
            <button className="flex items-center justify-between text-twitterBlue py-[1rem] px-[4.5rem] font-bold border-[1px] border-twitterBlue rounded-md mx-auto mt-[50px] hover:text-white hover:bg-twitterBlue group">
              Join Us
              <svg
                className="hidden group-hover:block mt-[4px] ml-[4px] fill-white"
                width="16"
                height="13"
                viewBox="0 0 16 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.23347 13L14.8898 7.42846C15.4106 6.91519 15.4106 6.08324 14.8898 5.57154L9.23347 0L7.34788 1.8581L10.7279 5.18669H0L0 7.81292H10.7279L7.34788 11.1427L9.23347 13Z"
                />
              </svg>
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Members;
