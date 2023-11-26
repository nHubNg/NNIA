import Article from "./component/articles";
import Header from "../../components/Header";

const Blog = () => {
  return (
    <>
      <Header back={'blogg'}  />

      <div className="font-montserrat bg-background grid items-center justify-center mb-36">

        <div className=" text-center mb-[45px]">
          <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
            Our Latest Articles
          </h1>

          <p>
            Read our recent article to add your knowledge on areas we are best
            known for.
          </p>
        </div>

        {/* container for articles */}
        <div className="">
          <Article />
        </div>
      </div>
    </>
  );
}

export default Blog;