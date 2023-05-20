const Article = ({ heading, description, image }) => {
    return (
        <div className='w-[330px] flex justify-center items-start flex-col gap-5'>

            <img src={image} alt="" className="h-[200px]" />

            <div className='mt-5'>
            <h2 className={`font-[700] mb-2`}>{heading}</h2>
            <p className={`font-[400] text-[14px]`}>{description}</p>
            </div>
        </div>
    );
}

export default Article;
