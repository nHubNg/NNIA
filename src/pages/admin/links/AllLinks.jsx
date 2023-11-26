import { useEffect, useState } from 'react'

const AllLinks = () => {
    const [links, setLinks] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const header = {
            "Content-Type": "application/json",
        };

        fetch(`https://nnia.onrender.com/routes`, {
            method: "GET",
            headers: header
        })
            .then((response) => response.json())
            .then((data) => {
                return setLinks(data)
            })
            .catch((error) => {
                console.log(error.message)
            });

    }, [refresh]);

    const handleDelete = (id) => {
        console.log(id)
        const header = {
            "Content-Type": "application/json",
        };

        fetch(`https://nnia.onrender.com/routes/route/${id}`, {
            method: "DELETE",
            headers: header
        })
            .then((response) => response.json())
            .then((data) => {
                setRefresh(!refresh)
                return data
                // window.location.reload(false)
            })
            .catch((error) => {
                console.log(error.message)
            });
    }


    return (<div className="font-montserrat bg-background">
        <div className=" text-center mb-20">
            <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
                All Links
            </h1>

            <div className="overflow-x-auto pb-20">
                <table className="table-auto mx-auto mt-10 w-[95%] overflow-auto ">
                    <thead>
                        <tr>
                            <th className="py-3 text-center">Name</th>
                            <th className="py-3 text-center">URL</th>
                            <th className="py-3 text-center">Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {links.length > 0 ? links.map((pend, i) => {
                            return (
                                <tr key={i}>
                                    
                                    <td className="py-3 text-center text-orange">
                                        {pend.name}
                                    </td>
                                    <td className="py-3 text-center">{pend.url}</td>
                                    <td className="py-3 text-center"><button className='border-black border-[1px] rounded-[5px] px-[4px]  hover:bg-twitterBlue hover:text-white hover:border-white' onClick={()=> handleDelete(pend._id)}>Delete</button></td>
                                    
                                   
                                </tr>
                            )
                        }) : <div className='mt-16 w-full flex justify-center items-center'>
                            <div className="block lg:flex justify-center items-center">
                                <div className="flex justify-center items-center py-5 w-[100%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
                                    <div className=" py-2 w-[100%] flex justify-between px-4 rounded-md">
                                        <p className='text-center'>No Available Links</p>
                                    </div>
                                </div>
                            </div>
                        </div>}

                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}

export default AllLinks;