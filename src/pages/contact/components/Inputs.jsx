

const Input = ({ type, text, asterisk, name, placeholder }) => {
    return (
        <>
            <div className="w-[100%] flex flex-col gap-2 mb-7">
                <label htmlFor="input">
                    {text}
                    {asterisk}
                </label>
                <div>
                    <input
                        className="h-[45px] w-full  bg-formBg rounded-[5px] border-formBorder px-[15px] border-[1px]"
                        type={type}
                        id="input"
                        name={name}
                        placeholder={placeholder}
                    />
                </div>
            </div>
        </>
    );
};
export default Input;