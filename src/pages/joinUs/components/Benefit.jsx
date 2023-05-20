const Benefit = ({ img, alt, text }) => {
  return (
    <>
      <div className="w-[92%] mx-auto">
        <img src={img} alt={alt} />

        <div>
          <h3>{text}</h3>
          <ul>
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
        </div>
      </div>
    </>
  );
};

export default Benefit;
