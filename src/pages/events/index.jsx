import Header from "../../components/Header";

const Events = () => {
    return (
      <>
        <Header back={'eventt'} />

        <div className="text-center px-10">
          <h1 className=" font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
            NNIA Events
          </h1>

          <p>You can sponsor our thought-provoking programs and events; technology innovation & market research; help provide an enabling environment for hubs and startups on the Plateau; help facilitate linkages with corporate and ESO support organizations; support our operational and overhead costs.</p>
        </div>

        <div className='py-[120px] px-[30px] lg:px-[50px] text-[18px] font-[500]'>
          <p>No Events Found!</p>
        </div>
      </>
    );
}

export default Events;