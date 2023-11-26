import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'

const Article = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const header = {
      "Content-Type": "application/json",
    };

    fetch(`https://nnia.onrender.com/blog`, {
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

  }, []);

  return (
    <div className="flex justify-center items-center gap-10 flex-wrap">
      {blogs.length > 0 ? blogs.map((blog, i) => {
        return (
          <Link to={`/blogDetails/${blog._id}`} key={i} className="shadow-lg rounded-[5px] p-5 border-black h-[350px] w-[250px]">
            <div
              className={"h-full w-full flex justify-center items-start flex-col gap-5"}
            >
              <img src={blog.imageUrl[0].url} alt="" className='w-full h-[200px] object-fill' />
              <h2 className={"font-[700] text-[20px]"}>{blog.title}</h2>
              <p className={" font-[400] text-[14px] "}>{blog.content.substring(0, 70)}...</p>
            </div>
          </Link>
        )
      }) : <div className='mt-16 w-full flex justify-center items-center'>
        <div className="block lg:flex justify-center items-center">
          <div className="flex justify-center items-center py-5 w-[100%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
            <div className=" py-2 w-[100%] flex justify-between px-4 rounded-md">
              <p className='text-center'>No Available Blog</p>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default Article;
