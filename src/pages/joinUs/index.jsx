import Header from "../../components/Header";
import Benefit from "./components/Benefit";
import chairsPic from "../../assets/chairs.jpg";
import techGirl from "../../assets/tech-lady.jpg";
import path from "../../assets/path.svg";


const JoinUs = () => {
  return (
    <div className="font-montserrat bg-background">
      <Header back={'partner'} />
      <h1 className="sr-only">Join Us Page</h1>
      <main className="pt-[30px] lg:pt-[71px]">
        <section className="w-[92%] mx-auto">
          <h2 className="punchLine text-twitterBlue text-[30px]">
            Become NIA Community Member
          </h2>
          <dl className="mt-[20px]">
            <dt className="lg:mx-[160px] mb-[20px] text-center">Hi There!</dt>
            <dd className="lg:mx-[160px] text-center">
              We are glad that you are interested in being a part of the NIA
              network. As an ever-growing network of tech and innovation hubs
              across Africa, NIA continually provides her members with a
              platform to connect, collaborate, and network with other African
              innovators, entrepreneurs, developers, educators, and stakeholders
              in order to create viable solutions that would enable the
              development of the African ecosystem.
            </dd>
          </dl>
        </section>

        <Benefit img={chairsPic} alt="Cropped chairs" text="Members&apos; Benefit" />
        <Benefit
          img={techGirl}
          alt="Tech girl"
          text="Membership Criteria"
          paddingB="pb-[12rem]"
          flexRow="flex-row-reverse"
        />

        <section className="bg-twitterBlue text-white flex justify-center gap-8 flex-col py-5">
          <h2 className="punchLine px-12 text-[20px]">
            If your Hubs meets these criteria, Apply now{" "}
          </h2>
          <p className="px-5 lg:w-[65%] mx-auto text-center">
            Please note that the admission process would take about 1-2 months
            and we would guide and keep you updated every step of the way.
          </p>

          <div className='flex justify-center items-center'>
            <a href="https://forms.gle/mGLJAwewU4ahiDPGA" target="_blank" rel='noreferrer'>
              <button className="lg:mt-5 px-5 py-2 border-white border-[1px] text-white font-[700] rounded hover:text-twitterBlue flex items-center gap-3 group hover:bg-white">
                Apply Here
                <img
                  src={path}
                  alt=""
                  className="hidden group-hover:block text-twitterBlue fill-twitterBlue"
                />
              </button>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
};

export default JoinUs;
