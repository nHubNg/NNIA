import Header from "../../components/Header";
import Benefit from "./components/Benefit";
import Input from "./components/Input";
import Inputs from "./components/Inputs";
import Checkbox from "./components/Checkbox";
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
            className="mt-[80px] mx-auto space-y-6 max-w-[850px] h-[800px] bg-white pt-[48px] pl-6"
          >
            <Input
              asterisk={<span className="text-formAsterisk">*</span>}
              text="Name of Hub "
              type="text"
              name="Hub Name"
            />

            <Input
              asterisk={<span className="text-formAsterisk">*</span>}
              text="Email Address "
              type="text"
              name="Email Address"
            />

            <Input
              asterisk={<span className="text-formAsterisk">*</span>}
              text="Phone Number "
              type="number"
              name="Phone Number"
            />

            <Inputs
              type="text"
              text="Address "
              asterisk={<span className="text-formAsterisk">*</span>}
              $name="Address"
              palceholder1="City"
              palceholder2="State"
              palceholder3="Country"
              palceholder4="Physical Location"
            />

            <Inputs
              type="text"
              text="Handles "
              asterisk={<span className="text-formAsterisk">*</span>}
              $name="Social Handles"
              palceholder1="Facebook"
              palceholder2="Instagram"
              palceholder3="Twitter"
              palceholder4="LinkedIn"
            />

            <Input text="Website" type="text" name="Website" />

            <div className="w-[94%] flex justify-between items-center gap-[1.4rem]">
              <label htmlFor="" for="input" className=" w-[35ch]">
                Self-description <br />
                (Select all that apply)*
              </label>
              <div className="mt-2">
                <Checkbox text="Incubator" id="Incubator" name="Incubator" />
                <Checkbox
                  text="Accelerator"
                  id="Accelerator"
                  name="Accelerator"
                />
                <Checkbox
                  text="Co-creation Space"
                  id="Co-creation"
                  name="Co-creation"
                />
                <Checkbox
                  text="Co-working Space"
                  id="Co-working-Space"
                  name="Co-working-Space"
                />
                <Checkbox
                  text="Innovation Centre"
                  id="Innovation"
                  name="Innovation-Centre"
                />
                <Checkbox text="Living Lab" id="Living-Lab" name="Living-Lab" />
                <Checkbox text="Fab Lab" id="Fab-Lab" name="Fab-Lab" />
                <Checkbox text="Data Lab" id="Data-Lab" name="Data-Lab" />
                <Checkbox text="Other" id="Other" name="Other" />
                <input type="text" />
              </div>
            </div>

            <button className="ml-[7rem] mt-[21em] py-3 px-12 font-bold text-twitterBlue border-2 border-twitterBlue">
              Next
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default JoinUs;
