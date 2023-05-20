const Testimonial = ({img, name, description}) => {
    return ( <>
            <div className='w-[300px] flex justify-center items-center flex-col'>
                <img src={img} alt="" className='h-[170px]' />
                <div className='mt-5'>
                    <h1 className='font-[700] text-center mb-2'>{name}</h1>
                <p className='text-center text-[13px]'>{description}</p>
                </div>
            </div>
        </> );
}
 
export default Testimonial;