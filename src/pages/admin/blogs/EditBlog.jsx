import { useState, useEffect } from "react";

const EditBlog = () => {
    const [blog, setBlog] = useState([])


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
                console.log(data)
                setBlog(data.blog)
                return
            })
            .catch((error) => {
                console.log(error.message)
            });

    }, []);


    const editBlogTitle = (questionId, event) => {
        const updatedQuestionTexts = blog.map((text) => {
            if (text._id === questionId) {
                return {
                    ...text,
                    title: event.target.value, // Update the specific blog
                };
            }
            return text;
        });
        setBlog(updatedQuestionTexts);
    };

    const editBlogContent = (questionId, event) => {
        const updatedQuestionTexts = blog.map((text) => {
            if (text._id === questionId) {
                return {
                    ...text,
                    content: event.target.value, // Update the specific blog
                };
            }
            return text;
        });
        setBlog(updatedQuestionTexts);
    };

    const editBlogImage = (questionId, event) => {
        const updatedQuestionTexts = blog.map((text) => {
            if (text._id === questionId) {
                return {
                    ...text,
                    imageUrl: [
                        {
                            url: event.target.files[0]
                        }
                    ]
                };
            }
            return text;
        });
        setBlog(updatedQuestionTexts);
    };

    function findObjectById(objects, id) {
        for (let i = 0; i < objects.length; i++) {
            if (objects[i]._id === id) {
                return objects[i];
            }
        }
        return null;
    }

    const handleEdit = async (id) => {
        console.log(blog)
        const data = findObjectById(blog, id)

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("content", data.content);
        formData.append("imageUrl", data.imageUrl[0].url);

        console.log(data.title, data.content, data.imageUrl[0].url)

        const item = {
            "title": data.title,
            "content": data.content,
            "imageUrl": data.imageUrl[0].url

        }

        try {
            const response = await fetch(
                `https://nnia.onrender.com/blog/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    body: JSON.stringify(item),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to fetch TEST");
            }
            const data = await response.json();
            return data
            // window.location.reload(false)
        } catch (error) {
            // Handle the error
        }
    }


    return (<div className="font-montserrat bg-background">
        <div className=" text-center mb-20">
            <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
                Edit Blogs
            </h1>

            <div className="flex justify-center items-center">
                <div className="flex justify-center flex-col items-center w-[95%] rounded-[5px] bg-white gap-5 py-5">
                    {blog.length > 0 ? blog.map((blog, i) => {
                        return (
                            <div key={i} className="flex justify-between items-center gap-5 flex-col">
                                <div className="flex justify-between items-center gap-5 w-full px-5">
                                        <div className="w-[30%]">
                                            <input
                                                type="file"
                                                className=""
                                                onChange={(e) =>
                                                    editBlogImage(blog._id, e)
                                                }
                                            />
                                        </div>
                                    <div className='flex justify-center items-center'>
                                        <img src={blog.imageUrl[0].url} className='object-cover h-[100px] w-[100px] rounded-[5px]' alt='blog image' />
                                    </div>
                                    <div className="flex justify-between flex-col items-center gap-2">
                                        <label htmlFor={blog.title} className="flex items-center text-[#696F79] text-[16px] font-semibold gap-3">Blog Title </label>
                                        <input
                                            className=" w-full text-[13px] h-[30px] px-[5px] border-black border-[1px] rounded-[5px] text-[#696F79] "
                                            type="text"
                                            id={blog.title}
                                            value={blog.title}
                                            placeholder={blog.title}
                                            onChange={(event) => editBlogTitle(blog._id, event)}
                                        />
                                    </div>
                                    <div className="flex justify-between flex-col items-center gap-2">
                                        <label htmlFor={blog.content} className="flex items-center text-[#696F79] text-[16px] font-semibold gap-3">Blog Content </label>
                                        <textarea
                                            className=" w-[230px] text-[13px] h-[80px] px-[5px] border-black border-[1px] rounded-[5px] text-[#696F79] "
                                            type="text"
                                            id={blog.content}
                                            value={blog.content}
                                            onChange={(event) => editBlogContent(blog._id, event)}
                                        />
                                    </div>
                                    <button className='border-black border-[1px] rounded-[5px] px-[4px] hover:bg-twitterBlue hover:text-white hover:border-white' onClick={() => handleEdit(blog._id)} >Edit</button>
                                </div>
                            </div>
                        )
                    }) : <div className='mt-16 w-full'>
                        <div className="block lg:flex justify-center items-center">
                            <div className="flex justify-center items-center py-5 w-[100%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
                                <div className=" py-2 w-[100%] flex justify-between px-4 rounded-md">
                                    <p>No Available Blogs</p>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    </div>);
}

export default EditBlog;