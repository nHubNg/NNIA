import Header from "../../components/Header";
import Card from "./components/Card";
import Image from "../../assets/nHub-logo.png";
import axia from "../../assets/axia-logo.svg";
import mainstream from "../../assets/mainstream.jpeg";
import { Link } from "react-router-dom";

const Members = () => {
  return (
    <div>
      <Header back={'memberss'} />
      <h1 className="sr-only">members page</h1>
      <main>
        <section className="w-[93%] mx-auto mt-[68px]">
          <h2 className="punchLine text-twitterBlue">See Our Hubs</h2>
          <p className="mt-[20px] text-center">
            We are made up of great and wonderful hubs and that forms the the
            backbone of every success we have recorded.
          </p>
        </section>

        <section className="py-[200px]">
          <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem] ">
            <Card img={Image} text='nHub Nigeria is a non-profit organization that was founded in 2013
            to promote the growth of the technology ecosystem in Nigeria. The
            hub is located in Jos, Plateau State, and it provides a variety of
            services to its members, including: Coworking space, Mentorship and training programs, Access to funding and resources, Advocacy for the tech industry. nHub Nigeria is committed to building a strong and vibrant tech
            ecosystem in Nigeria, and it is working to create a more conducive
            environment for tech startups and businesses to thrive.' link={'https://nhubnigeria.ng'} />
            <Card img={axia} text='Axia Hub is a value and solution driven technology and innovation hub that aids individuals, businesses, organizations, systems and governments, become knowledgeable, valuable, productive & efficient, by the creation, application and use of cutting edge innovative tools, products, services, initiatives and processes aimed at improving the society, in Africa and beyond.'/>
            <Card img={mainstream} text='We are a modern space, an idea la that encourages creativity,self development, growth and high end skill acquisition. We nurture minds to brilliance, we mentor young minds to understand the formidability of passion, consistency and diligence' />
            {/* <Card img={Image} /> */}
            {/* <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} /> */}
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
