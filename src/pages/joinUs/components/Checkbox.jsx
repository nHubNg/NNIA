const Checkbox = ({ text, id, $name }) => {
  return (
    <>
      <label htmlFor={id} className="mr-[2px] ml-[3px] first:ml-0">
        {text}
      </label>
      <input
        className="w-4 h-4 mr-2 border-gray-500 text-gray-500 rounded-sm focus:ring-0"
        type="checkbox"
        id={id}
        name={$name}
      />
    </>
  );
};

export default Checkbox;
