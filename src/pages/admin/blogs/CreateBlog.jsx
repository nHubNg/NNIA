import { useState } from "react";
import pathh from '../../../assets/Path.png'
import axios from 'axios'


const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imageUrl, setImageUrl] = useState(null)
    const [load, setLoad] = useState('')
    const [err, setErr] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoad('Loading...')
        const header = {
            "Content-Type": "multipart/form-data",
        };

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("imageUrl", imageUrl);

      
        const result = await axios.post(
            "https://nnia.onrender.com/blog/add",
            formData,
            {
                headers: header,
            }
        );
        
        if (result.status === 200 || result.status === 201) {
            setLoad('')
            setContent('')
            setTitle('')
            setImageUrl(null)
            return result;
        } else {
            setLoad('')
            setErr('An error occurred, please try again')
            return result;
            // throw new Error("Internship submission failed.");
        }
    }


    return (<div className="font-montserrat bg-background">
        <div className=" text-center mb-20">
            <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
                Create Blog
            </h1>

            <div className="w-full flex justify-center items-center mb-10">
                <form className="w-1/2 gap-5 flex flex-col">
                    <input
                        type="file"
                        className=""
                        onChange={(e) =>{
                            setImageUrl( e.target.files[0] )
                        }
                        }
                        />

                    <div className="w-[100%] flex text-left flex-col gap-2 mb-7">
                        <label htmlFor="title">
                            Enter desired title
                        </label>
                        <div>
                            <input
                                className="h-[45px] w-full  bg-formBg rounded-[5px] border-formBorder px-[15px] border-[1px]"
                                type='text'
                                id="title"
                                placeholder='Enter blog title'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="w-[100%] flex flex-col text-left gap-2 mb-7">
                        <label htmlFor="content">
                            Enter desired content
                        </label>
                        <textarea name="" cols="30" rows="10" className="h-[45px] w-full  bg-formBg rounded-[5px] border-formBorder px-[15px] border-[1px]"
                            id="content"
                            placeholder='Enter blog content'
                            value={content}
                            onChange={e => setContent(e.target.value)}></textarea>
                    </div>

                    <p className="text-center">{err}</p>
                    <p className="text-center">{load}</p>

                    <button className="w-[180px] px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group
                    " onClick={handleSubmit}>Create Blog<img src={pathh} alt="" className="hidden group-hover:block" /></button>
                </form>
            </div>
        </div>
    </div>);
}

export default CreateBlog;