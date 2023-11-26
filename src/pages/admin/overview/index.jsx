import { useEffect, useState } from 'react'

const Overview = () => {
    const [links, setLinks] = useState([])
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const header = {
            "Content-Type": "application/json",
        };

        fetch(`https://nnia.onrender.com/routes`, {
            method: "GET",
            headers: header
        })
            .then((response) => response.json())
            .then((data) => {
                return setLinks(data)
            })
            .catch((error) => {
                console.log(error.message)
            });

    }, []);

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

    return (<div className="mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center py-14 w-[85%] md:w-[80%] mx-auto mt=10 bg-white shadow-lg rounded-md gap-10">
            <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690717429/nHubFoundation/Frame_4_ftvfwy.png"
                alt=""
                className=" w-[80px] md:w-[90px]"
            />
            <div className="flex flex-col gap-y-5 w-full md:w-[50%]">
                <div className="w-full">
                    <h5 className="px-3">Full name</h5>
                    <p className="border border-adminBorder w-[95%] md:w-[100%] mx-auto  rounded-md outline-none px-3 py-2 mt-2">Bashir Shiedu</p>

                </div>
                <div>
                    <h5 className="px-3">Email address</h5>
                    <p className="border border-adminBorder w-[95%] md:w-[100%] mx-auto  rounded-md outline-none px-3 py-2 mt-2">info@nnia.ng</p>

                </div>
            </div>
        </div>

        <div>
            <div className=" mx-auto flex flex-col gap-6 mt-20 px-6 text-center">
                <div className="flex justify-center flex-wrap gap-4 md:gap-6 ">
                    <div className="flex flex-col justify-center items-center bg-twitterBlue text-white   w-[50%] md:w-[250px] py-9 md:py-12 rounded-md">
                        <h5>Total Links</h5>
                        <p className="text-white">{links.length}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-twitterBlue text-white  w-[50%] md:w-[250px] py-9 md:py-12 rounded-md">
                        <h5 >Total Blogs</h5>
                        <p className="text-white">{blogs.length}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Overview;