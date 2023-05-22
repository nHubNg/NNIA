import chairs from "../../../assets/chairs.jpg";

const Benefit = ({ img, alt, text, paddingB, flexRow }) => {
  return (
    <>
      <section
        className={`w-[92%] mx-auto flex items-center ${flexRow} gap-[9rem] pt-[12rem] ${paddingB}`}
      >
        <img src={img} alt={alt} />

        <article className="-translate-y-[4rem]">
          <h3 className="text-twitterBlue text-[35px] font-[700] mx-[5rem]">
            {text}
          </h3>
          <ul className="mt-[5rem] px-[4rem] list-disc marker:text-[13px] marker:text-gray-500 space-y-5">
            <li>Access to all AfriLabs programmes and interventions.</li>
            <li>Unrestricted access to AfriPass.</li>
            <li>Unlimited access to training resources from our workshops.</li>
            <li>
              Eligibility to access grants under different programmes like the
              AfriLabs Capacity Building Programme.
            </li>
            <li>Unrestricted entry to the Catalytic Africa Programme.</li>
            <li>
              AfriLabs endorsement and support in scaling your programmes.
            </li>
            <li>Access to all-expense-paid ecosystem events.</li>
            <li>Priority access at the AfriLabs Annual Gathering.</li>
            <li>
              Opportunity to be an AfriLabs subcontractor/implementation
              partner.
            </li>
            <li>Access to other community members across Africa.</li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default Benefit;
