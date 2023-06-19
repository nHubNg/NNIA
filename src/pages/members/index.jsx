import Header from "../../components/Header";
import Card from "./components/Card";
import Image from "../../assets/nHub-logo.png";

const Members = () => {
  return (
    <div>
      <Header img={"hero"} />
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
          <div className="w-[80%] mx-auto grid grid-cols-3 gap-[4rem] ">
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
            <Card img={Image} />
          </div>

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
        </section>
      </main>
    </div>
  );
};

export default Members;
