import Header from "../../components/Header";
import Card from "./components/Card";
import Image from "../../assets/nHub-logo.png";

const Members = () => {
  return (
    <div>
      <Header img={"hero"} />
      <h1 className="sr-only">members page</h1>
      <main>
        <section className="w-[92%] mx-auto mt-[68px]">
          <h2 className="punchLine text-twitterBlue">See Our Hubs</h2>
          <p className="mt-[20px] text-center">
            We are made up of great and wonderful hubs and that forms the the
            backbone of every success we have recorded.
          </p>
        </section>

        <section>
          <Card img={Image} />
        </section>
      </main>
    </div>
  );
};

export default Members;
