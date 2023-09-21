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
                        <li>CAC registration as an incubation hub, accelerator, or startup.</li>
                        <li>Physical address.</li>
                        <li>Technical team (must have a track record of incubation and accelerator).
                        </li>
                        {/* <li>Regitration f.</li> */}
                        {/* <li>
                            NNIA endorsement and support in scaling your programmes.
                        </li>
                        <li>
                            Opportunity to be an NNIA subcontractor/implementation
                            partner.
                        </li>
                        <li>Access to other community members across Northern Nigeria.</li> */}
                    </ul>
                </article>

            </section>
        </>
    );
};

export default Criteria;
