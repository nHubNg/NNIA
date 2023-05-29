import Header from "../../components/Header";
import Details from "./component/details";

const BlogDetails = () => {
    return (
      <div className="text-[14px] font-[400]">
        <Header />

        <Details
          heading={"Five Ways to Understand Blockchain"}
          author={"Desmond Fon Gwom"}
          publishDate={"May 20, 2023"}
          publishTime={"10:29am"}
        />
      </div>
    );
}
 
export default BlogDetails;