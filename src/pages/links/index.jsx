import Header from "../../components/Header";
import pathh from '../../assets/Path.png'
import { useState } from "react";


const Links = () => {
    const [path, setPath] = useState('')
    const [url, setUrl] = useState('')
    const [load, setLoad] = useState('')
    const currentURL = window.location.href;
    const parts = currentURL.split("/");
    const newURL = parts[0] + "//" + parts[2];
    const [err, setErr] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoad('')
        console.log(path, url)
        const data = {
            "name": path,
            "url": url
        }
        const header = {
            "Content-Type": "application/json",
        };

        fetch('https://nnia.onrender.com/routes/add', {
            method: "POST",
            body: JSON.stringify(data),
            headers: header 
        })
            .then((response) => response.json())
            .then((data) => {
                setLoad('Loading...')
                if(data.success){
                    setLoad('')
                    setPath('')
                    setUrl('')
                    setErr('Route created successfully')
                }
                setLoad('')
                setErr(data.message)
            })
            .catch((error) => {
                console.log(error.message)
            });

    }


    return (<div className="font-montserrat bg-background">
        <Header img={'hero'} />

        <div className=" text-center mb-20">
            <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
                Create a Path and Redirect URL
            </h1>

            <p>
                Get in touch with us today.
            </p>
        </div>

        <div className="w-full flex justify-center items-center mb-10">
            <form className="w-1/2">
                <div className="w-[100%] flex flex-col gap-2 mb-7">
                    <label htmlFor="path">
                        Enter desired path
                    </label>
                    <div>
                        <input
                            className="h-[45px] w-full  bg-formBg rounded-[5px] border-formBorder px-[15px] border-[1px]"
                            type='text'
                            id="path"
                            placeholder='state/example'
                            value={path}
                            onChange={e => setPath(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-[100%] flex flex-col gap-2 mb-7">
                    <label htmlFor="input">
                        Enter redirect url
                    </label>
                    <div>
                        <input
                            className="h-[45px] w-full  bg-formBg rounded-[5px] border-formBorder px-[15px] border-[1px]"
                            type='text'
                            id="input"
                            placeholder='https://example.com'
                            value={url}
                            onChange={e => setUrl(e.target.value)}
                        />
                    </div>
                </div>

                <div className="w-[100%] flex flex-col gap-2 mb-7">
                    <label htmlFor="input">
                        Link
                    </label>
                    <div>
                        <input
                            className="h-[45px] w-full  bg-formBg rounded-[5px] border-formBorder px-[15px] border-[1px]"
                            type='text'
                            id="input"
                            value={`${newURL}/${path}`}
                            readOnly
                            />
                    </div>
                </div>

                <p className="text-enter">{err}</p>
                <p className="text-enter">{load}</p>

                <button className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue mt-10 font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group
                    " onClick={handleSubmit}>Create Link<img src={pathh} alt="" className="hidden group-hover:block" /></button>
            </form>
        </div>
    </div>);
}

export default Links;