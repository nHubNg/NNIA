const Article = ({ heading, description, image }) => {
  return (
      <div className={`w-[330px] flex justify-center items-start flex-col gap-5`}>

        <img src={image} alt="" />
        <h2 className={`font-[700] text-[20px]`}>{heading}</h2>
        <p className={` font-[400] text-[14px] `}>{description}</p>
      </div>
  );
}

export default Article;
