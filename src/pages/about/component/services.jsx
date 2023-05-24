const Services = ({serviceImage, serviceName}) => {
    return (
      <div className="flex flex-col w-[300px] ">
        <img src={serviceImage} alt="" className=" w-full mb-[15px]" />
        <p className=" text-center font-[700] text-[14px] ">{serviceName}</p>
      </div>
    );
}

export default Services;