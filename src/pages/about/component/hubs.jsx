

const HubCard = ({hubLogo, point1, point2, point3, hubList, description, conclusion}) => {
    return (
      <div className="mx-[75px] h-[530px] w-[350px] lg:w-[400px] border-2 bg-white p-[20px] rounded-[5px] grid place-items-center">

        <img src={hubLogo} alt="" className="w-[70px] mb-[15px]" />
        
        <div className="flex justify-center items-center gap-[6px] text-twitterBlue mb-[30px]">
          <p>{point1}</p>
          <span className="h-[15px] bg-twitterBlue w-[3px] rounded-[2px]"></span>
          <p>{point2}</p>
          <span className="h-[15px] bg-twitterBlue w-[3px] rounded-[2px]"></span>
          <p>{point3}</p>
        </div>

        <div className=" font-[400] text-[14px] grid gap-[15px]">
          <p>
            {description}
          </p>
          
          {hubList}

            <p>
              {conclusion}
            </p>

        </div>
      </div>
    );
}

export default HubCard;