import Article from "./component/articles";
import articleImg from "../../assets/article-img-1.png";
import Header from "../../components/Header";
// import heroImg3 from "../../assets/heroImg3.png";

const Blog = () => {
    return (
      <>
        <Header img={"hero"} />

        <div className="font-montserrat bg-background grid items-center justify-center mb-36">
          
          {/* added excess margin-bottom for the text div below */}
          <div className=" text-center mb-36">
            <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
              Our Latest Articles
            </h1>

            <p>
              Read our recent article to add your knowledge on ares we are best
              known for.
            </p>
          </div>

          {/* container for articles */}
          <div className="grid gap-[60px] grid-cols-3 w-[1152px]">
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
          </div>
        </div>
      </>
    );
}
 
export default Blog;