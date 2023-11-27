import Header from "../../components/Header";
import Input from "./components/Inputs";
import pathh from '../../assets/Path.png'

const Contact = () => {
    return (<>
        <div className="font-montserrat bg-background">
            <Header back={'contact'} />

            <div className=" text-center mb-20">
                <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
                    Contact Us
                </h1>

                <p>
                    Get in touch with us today.
                </p>
            </div>

            <div className="flex justify-center items-center mb-40">
                <div className=" flex flex-col justify-start items-start bg-white rounded-[5px] px-[20px] pt-[65px] pb-[120px] w-[900px]">

                    <Input text={'First Name'}
                        asterisk={<span className="text-formAsterisk">*</span>}
                        type={'text'}
                        name={'firstName'}
                        placeholder={"E.g John Doe"}
                    />

                    <Input text={'Email Address'}
                        asterisk={<span className="text-formAsterisk">*</span>}
                        type={'email'}
                        name={'email'}
                        placeholder={"E.g johndoe@site.com"}
                    />

                    <Input text={'Phone Number'}
                        // asterisk={<span className="text-formAsterisk">*</span>}
                        type={'number'}
                        name={'phone'}
                        placeholder={"E.g +2348012345678"}
                    />

                    <Input text={'Website'}
                        // asterisk={<span className="text-formAsterisk">*</span>}
                        type={'text'}
                        name={'website'}
                        placeholder={"E.g https://www.example.com"}
                    />

                    <div className="w-[100%] flex flex-col gap-2 mb-7">
                        <label htmlFor="input">
                            Message<span className="text-formAsterisk">*</span>

                        </label>
                        <div>
                            <textarea
                                className="h-[200px] w-full pt-[15px] bg-formBg rounded-[5px] border-formBorder px-[15px] border-[1px]"
                                placeholder='Enter your message...'
                            />
                        </div>
                    </div>

                    <a href="mailto:info@nnia.ng">
                        <button className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue mt-10 font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group
                    ">Send Message <img src={pathh} alt="" className="hidden group-hover:block" /></button>
                    </a>

                </div>
            </div>



        </div>
    </>);
}

export default Contact;