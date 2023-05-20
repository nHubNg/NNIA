// import innovation from '../../../assets/innovation.png'

const Specialty = ({text, textColor, backgroundColor, image}) => {
    return ( <>
        <div className={`w-[370px] h-[230px] bg-${backgroundColor} flex justify-center items-center flex-col gap-5`}>
            <img src={image} alt="" />
            <p className={`font-[700] text-[30px] text-${textColor}`}>{text}</p>
        </div>
    </> );
}
 
export default Specialty;