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
      <main className="w-[92%] mx-auto pt-[71px]">
        <h2 className="text-twitterBlue text-[30px] font-[700] text-center">
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

        <Benefit img={chairsPic} alt="Cropped chairs" text="Members’ Benefit" />
        <Benefit
          img={techGirl}
          alt="Tech girl"
          text="Membership Criteria"
          paddingB="mb-[12rem]"
          flexRow="reverse"
        />
      </main>
    </div>
  );
};

export default JoinUs;
