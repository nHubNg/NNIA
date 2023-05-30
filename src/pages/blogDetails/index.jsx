import Header from "../../components/Header";
import Article from "../blog/component/articles";
import Details from "./component/details";
import articleImg from "../../assets/article-img-1.png";

const BlogDetails = () => {
    return (
      <div className="text-[14px] font-[400]">
        <Header img={"hero"} />

        <Details
          heading={"Five Ways to Understand Blockchain"}
          author={"Desmond Fon Gwom"}
          publishDate={"May 20, 2023"}
          publishTime={"10:29am"}
          facebookPage={"https://www.facebook.com"}
          twitterPage={"https://www.twitter.com"}
          instagramPage={"https://www.instagram.com"}
          linkedinPage={"https://www.linkedin.com"}
        />

        <div className="mx-[30px] mb-[75px] grid place-items-center">
          <h2 className="text-[16px] font-[700] text-twitterBlue mb-[45px] place-self-start">
            You Might like:
          </h2>


            {/* recommended articles */}
          <div className="grid gap-[60px] grid-cols-3  place-items-center">
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


      </div>
    );
}
 
export default BlogDetails;