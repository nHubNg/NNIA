import Header from "../../components/Header";

const Events = () => {
    return (
      <>
        <Header back={'eventt'} />

        <div className="text-center px-10">
          <h1 className=" font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
            NNIA Events
          </h1>

          <p>Sign up for our thought-provoking programs and events; technology innovation & market research; help provide an enabling environment for hubs and startups in Northern Nigeria; help facilitate linkages with corporate and ESO support organizations.</p>
        </div>

        {/* <div className='py-[120px] px-[30px] lg:px-[50px] text-[18px] font-[500]'>
          <p>No Events Found!</p>
        </div> */}

        <div className='py-[120px] px-[30px] lg:px-[50px] text-[18px] font-[500]'>
          <div className="h-[430px] w-[350px] lg:w-[400px] border-2 bg-white p-[20px] rounded-[5px] flex flex-col gap-8">
            <p>
              NNIA Hubs Management Capacity Series
            </p>
            <div className="flex justify-center items-center gap-[6px] text-twitterBlue">
              <p>Hub Management 101</p>
              <span className="h-[15px] bg-twitterBlue w-[3px] rounded-[2px]"></span>
              <p>Innovation Canvas</p>
            </div>

            <div className=" font-[400] text-[14px] grid gap-[15px]">
              <p>
                A collection of Physical/online workshops designed for NNIA member hubs to help hub managers and staff acquire additional knowledge  to better support their communities and entrepreneurship.
              </p>
              <p>This Series provides resources that could help strengthen their hubs so that they can achieve their vision and mission in a sustainable way.</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Events;