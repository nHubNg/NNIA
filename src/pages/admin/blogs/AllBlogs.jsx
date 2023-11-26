import { useEffect, useState } from 'react'


const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [refresh, setRefresh] = useState(false)

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

    }, [refresh]);

    const handleDelete = (id) => {
        const header = {
            "Content-Type": "application/json",
        };

        fetch(`https://nnia.onrender.com/blog/${id}`, {
            method: "DELETE",
            headers: header
        })
            .then((response) => response.json())
            .then((data) => {
                setRefresh(!refresh)
                return data
                // window.location.reload(false)
            })
            .catch((error) => {
                console.log(error.message)
            });
    }


    return (<div className="font-montserrat bg-background">
        <div className=" text-center mb-20">
            <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
                All Blogs
            </h1>

            <div className="flex justify-center items-center flex-col gap-10 mx-10 bg-white p-10 rounded-[5px]">
                {blogs.length > 0 ? blogs.map((pend, i) => {
                    return (
                        <div className='flex justify-between items-center gap-5' key={i}>
                            <div className='w-[30%]'>
                                <img src={pend.imageUrl[0].url} alt="" className='object-cover h-[180px] w-full rounded-[5px]' />
                            </div>
                            <div className='w-[60%]'>
                                <h1 className="font-[700] text-twitterBlue text-[20px] mb-[10px]">{pend.title}</h1>
                                <p>{pend.content}</p>
                            </div>

                            <button className='border-black border-[1px] rounded-[5px] px-[4px] hover:bg-twitterBlue hover:text-white hover:border-white' onClick={() => handleDelete(pend._id)}>Delete</button>
                        </div>
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
        </div>
    </div>);
}

export default AllBlogs;