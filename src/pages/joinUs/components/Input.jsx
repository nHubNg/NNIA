const Input = ({ type, text, asterisk, $name }) => {
  return (
    <>
      <div className="w-[80%] flex items-center justify-between">
        <label htmlFor="" for="input">
          {text}
          {asterisk}
        </label>
        <div>
          <input
            className="h-[40px] w-[480px] formStyle border-[1px]"
            type={type}
            id="input"
            name={$name}
          />
        </div>
      </div>
    </>
  );
};
export default Input;
