import Header from "../../components/Header";

const Events = () => {
    return (
      <>
        <Header back={'eventt'} />

        <div className="text-center px-10">
          <h1 className=" font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
            [Name] Events
          </h1>

          <p>Don&apos;t miss any of Our events around the state and the country</p>
        </div>

        <div className='py-[120px] px-[30px] lg:px-[50px] text-[18px] font-[500]'>
          <p>No Events Found!</p>
        </div>
      </>
    );
}

export default Events;