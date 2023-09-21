// import chairs from "../../../assets/chairs.jpg";

const Criteria = ({ img, alt, text, paddingB, flexRow }) => {
    return (
        <>
            <section
                className={`w-[92%] mx-auto flex items-center lg:${flexRow} flex-col lg:flex-row-reverse gap-[20px] pt-[60px] lg:pt-[12rem] pb-10 ${paddingB}`}
            >
                <h3 className="text-twitterBlue text-[25px] font-[700] text-center lg:hidden">
                    {text}
                </h3>
                <img src={img} alt={alt} />

                <article className="lg:-translate-y-[4rem]">
                    <h3 className="text-twitterBlue text-[35px] font-[700] lg:mx-[5rem] hidden lg:block">
                        {text}
                    </h3>
                    <ul className="mt-[30px] lg:mt-[5rem] px-[20px] lg:px-[4rem] list-disc marker:text-[13px] marker:text-gray-500 space-y-5">
                        <li>CAC registration.</li>
                        <li>Must be an Incubator, Accelerator or Startup.</li>
                        <li>Incubation or Acceleration track record.
                        </li>
                        <li>Membership of ISN</li>
                        <li>
                            Technology companies willing to upgrade into an Incubator or Accelerator.
                        </li>
                        <li>
                            Operations in any of the Northern states.
                        </li>
                        <li>Have a referee hub.</li>
                    </ul>
                </article>

            </section>
        </>
    );
};

export default Criteria;
