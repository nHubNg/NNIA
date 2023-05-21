import Header from "../../components/Header";
import Benefit from "./components/Benefit";
import chairsPic from "../../assets/chairs.jpg";
import techGirl from "../../assets/tech-lady.jpg";

const JoinUs = () => {
  const paddingBtm = 12;
  return (
    <div className="font-montserrat bg-background">
      <Header img={"hero"} />
      <h1 className="sr-only">Join Us Page</h1>
      <main className="pt-[71px]">
        <section className="w-[92%] mx-auto">
          <h2 className="punchLine text-twitterBlue">
            Become [Name] Community Member
          </h2>
          <dl className="mt-[20px]">
            <dt className="mx-[160px] mb-[20px] text-center">Hi There!</dt>
            <dd className="mx-[160px] text-center">
              We are glad that you are interested in being a part of the [name]
              network. As an ever-growing network of tech and innovation hubs
              across Africa, [name] continually provides her members with a
              platform to connect, collaborate, and network with other African
              innovators, entrepreneurs, developers, educators, and stakeholders
              in order to create viable solutions that would enable the
              development of the African ecosystem.
            </dd>
          </dl>
        </section>

        <Benefit img={chairsPic} alt="Cropped chairs" text="Members’ Benefit" />
        <Benefit
          img={techGirl}
          alt="Tech girl"
          text="Membership Criteria"
          paddingB="pb-[12rem]"
          flexRow="flex-row-reverse"
        />

        <section className="bg-twitterBlue h-[210px] text-white flex justify-center gap-8 flex-col">
          <h2 className="punchLine">
            If your Hubs meets these criteria, Apply now{" "}
          </h2>
          <p className="w-[65%] mx-auto text-center">
            Please note that the admission process would take about 1-2 months
            and we would guide and keep you updated every step of the way.
          </p>
        </section>

        <section className="w-[92%] pt-[39px] pb-[172px] mx-auto">
          <h3 className="font-[700] text-center">
            We are Excited you want join us. Please fill the form below
          </h3>
          <p className="mt-[50px]">
            All Fields marked{" "}
            <span className="font-[700] text-formAsterisk">*</span> are required
          </p>

          <form
            action=""
            className="mt-[80px] max-w-[828px] h-[750px] bg-white mx-auto"
          >
            {/* INPUT NAME */}
            <div>
              <label htmlFor="">Name of Hub *</label>
              <input type="text" />
            </div>

            {/* INPUT EMAIL */}
            <div>
              <label htmlFor="">Name of Hub *</label>
              <input type="text" />
            </div>

            {/* INPUT NUMBER */}
            <div>
              <label htmlFor="">Name of Hub *</label>
              <input type="text" />
            </div>

            {/* INPUT ADDRESS*/}
            <div>
              <label htmlFor="">Name of Hub *</label>

              <div>
                <input type="" />
                <input type="" />
                <input type="" />
                <input type="" />
              </div>
            </div>

            {/* INPUT HANDLES*/}
            <div>
              <label htmlFor="">Name of Hub *</label>

              <div>
                <input type="" />
                <input type="" />
                <input type="" />
                <input type="" />
              </div>
            </div>

            {/* INPUT WEBSITE */}
            <div>
              <label htmlFor="">Website</label>
              <input type="text" />
            </div>

            {/* INPUT ABOUT */}
            <div>
              <label htmlFor="">
                Self-description (Select all that apply)*
              </label>
              <div></div>
            </div>

            <button>Next</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default JoinUs;
