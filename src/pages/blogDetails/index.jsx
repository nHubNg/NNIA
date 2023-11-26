import Header from "../../components/Header";
import { useEffect, useState } from 'react'
import Article from "../blog/component/articles";
import { useParams } from "react-router-dom";


const BlogDetails = () => {
  const path = useParams()
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const header = {
      "Content-Type": "application/json",
    };

    fetch(`https://nnia.onrender.com/blog/${path.id}`, {
      method: "GET",
      headers: header
    })
      .then((response) => response.json())
      .then((data) => {
        return setBlogs(data.blog)
      })
      .catch((error) => {
        console.log(error.message)
      });

  }, [path.id]);

  return (
    <div className="text-[14px] font-[400]">
      <Header img={"hero"} />

      <div className="mx-[30px] mt-[60px]">
        <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[15px]">
          {blogs.title}
        </h1>

        <div className="flex justify-start items-center">
          <div className="w-full md:w-[70%] h-[300px] md:h-[500px]">
            <img src={blogs?.imageUrl[0].url} alt="" className='w-full h-full object-fill' />
          </div>
        </div>

        {/* publishing information
          <div className="flex gap-[40px] mb-[67px] ">
            <span className="flex items-center gap-[10px]">
              <img src={profile} alt="" className=" w-[20px]" /> <p>{author}</p>
            </span>

            <span className="flex items-center gap-[10px]">
              <img src={calendar} alt="" className=" w-[20px]" />
              <p>{publishDate}</p>
            </span>

            <span className="flex items-center gap-[10px]">
              <img src={clock} alt="" className=" w-[20px]" />
              <p>{publishTime}</p>
            </span>
          </div> */}

        {/* content */}
        <div className="my-[35px]"> <p>{blogs.content}</p></div>

        {/* social links
          <div className="mb-[45px]">
            <h2 className="text-[16px] font-[700] text-twitterBlue mb-[25px]">Share on Social Media</h2>

            <div className=" ml-[20px] flex gap-[30px] items-center">
              <a href={facebookPage}>
                <img src={facebook} alt="" className="w-[13px]" />
              </a>

              <a href={instagramPage}>
                <img src={instagram} alt="" className="w-[25px]" />
              </a>

              <a href={twitterPage}>
                <img src={twitter} alt="" className="w-[25px]" />
              </a>

              <a href={linkedinPage}>
                <img src={linkedin} alt="" className="w-[25px]" />
              </a>
            </div>

          </div> */}



      </div>

      <div className="mx-[30px] mb-[75px] grid place-items-center">
        <h2 className="text-[16px] font-[700] text-twitterBlue mb-[45px] place-self-start">
          You Might like:
        </h2>

        {/* recommended articles */}
        <div className="flex justify-center items-center gap-10 flex-wrap">
          <Article />
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;