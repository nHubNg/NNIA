import Header from "../../components/Header";
import people from '../../assets/Frame 10.png'

const Home = () => {
    return (<div className="font-montserrat bg-background">
        <Header description={'The Largest Community of Tech Innovators in West Africa'} img={'hero'} />

        <div className="my-20 flex justify-center items-center flex-col mx-16">
            <h1 className="font-[700] text-twitterBlue text-[30px] mb-8">Meet Us</h1>
            <div className="flex justify-start items-start gap-10 w-full">
                <div className="w-1/2 text-[13px] flex flex-col justify-start items-start">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor ac elit condimentum iaculis. Maecenas sit amet nisl et felis posuere vestibulum. Sed tincidunt elit sed ipsum commodo convallis. Curabitur rutrum, massa sed feugiat pharetra, augue dolor fringilla mi, vel efficitur odio ligula nec ex. Nullam quis urna ligula. Integer non nunc felis. Praesent quis elit vel leo consequat consequat. Mauris interdum malesuada leo vel consectetur. Curabitur sodales, libero nec scelerisque varius, odio dui eleifend odio, nec commodo purus nisi nec nunc. Mauris at mauris in enim tristique aliquet.

                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor ac elit condimentum iaculis. Maecenas sit amet nisl et felis posuere vestibulum. Sed tincidunt elit sed ipsum commodo convallis. Curabitur rutrum, massa sed feugiat pharetra, augue dolor fringilla mi, vel efficitur odio ligula nec ex. Nullam quis urna ligula. Integer non nunc felis. Praesent quis elit vel leo consequat consequat. Mauris interdum malesuada leo vel consectetur. Curabitur sodales, libero nec scelerisque varius, odio dui eleifend odio, nec commodo purus nisi nec nunc. Mauris at mauris in enim tristique aliquet.

                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor ac elit condimentum iaculis. Maecenas sit amet nisl et felis posuere vestibulum. Sed tincidunt elit sed ipsum commodo convallis. Curabitur rutrum, massa sed feugiat pharetra, augue dolor fringilla mi, vel efficitur odio ligula nec ex. Nullam quis urna ligula. Integer non nunc felis. Praesent quis elit vel leo consequat consequat. Mauris interdum malesuada leo vel consectetur. Curabitur sodales, libero nec scelerisque varius, odio dui eleifend odio, nec commodo purus nisi nec nunc. Mauris at mauris in enim tristique aliquet.
                    </p>

                    <button className="px-5 py-2 border-twitterBlue border-2 text-twitterBlue mt-16 ml-16 font-[700]
                    ">See More</button>
                </div>
                <div className="w-1/2">
                    <img src={people} alt="" />
                </div>
            </div>
        </div>

        <div className={`bg-hero bg-no-repeat bg-center bg-cover h-[513px] font-montserrat font-[700] text-center flex justify-center items-center pt-30 px-[270px] text-white flex-col`}>
            <h1 className='text-[30px]'>We champion policies, drive collaboration, innovation, employability and entrepreneurship through hubs.</h1>
            <button className="px-5 py-2 border-white border-2 text-white mt-16 ml-16 font-[700]">Become a Partner</button>
        </div>
    </div>);
}

export default Home;