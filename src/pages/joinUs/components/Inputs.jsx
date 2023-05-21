const Inputs = ({
  type,
  text,
  asterisk,
  $name,
  palceholder1,
  palceholder2,
  palceholder3,
  palceholder4,
}) => {
  return (
    <>
      <div className="w-[80%] flex justify-between">
        <label htmlFor="" for="input" className="mt-2">
          {text}
          {asterisk}
        </label>

        <div className="w-[480px] grid grid-rows-2 grid-flow-col gap-4">
          <input
            className="formGroup formStyle"
            type={type}
            id="input"
            placeholder={palceholder1}
            name={$name}
          />
          <input
            className="formGroup formStyle"
            type={type}
            id="input"
            placeholder={palceholder2}
            name={$name}
          />
          <input
            className="formGroup formStyle"
            type={type}
            id="input"
            placeholder={palceholder3}
            name={$name}
          />
          <input
            className="formGroup formStyle"
            type={type}
            id="input"
            placeholder={palceholder4}
            name={$name}
          />
        </div>
      </div>
    </>
  );
};

export default Inputs;
