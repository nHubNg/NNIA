import { useState, useEffect } from "react";

const EditLink = () => {
    const [route, setRoute] = useState([])


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
                setRoute(data)
                return
            })
            .catch((error) => {
                console.log(error.message)
            });

    }, []);


    const editRoute = (questionId, event) => {
        const updatedQuestionTexts = route.map((text) => {
            if (text._id === questionId) {
                return {
                    ...text,
                    name: event.target.value, // Update the specific route
                };
            }
            return text;
        });
        setRoute(updatedQuestionTexts);
    };

    const editLink = (questionId, event) => {
        const updatedQuestionTexts = route.map((text) => {
            if (text._id === questionId) {
                return {
                    ...text,
                    url: event.target.value, // Update the specific route
                };
            }
            return text;
        });
        setRoute(updatedQuestionTexts);
    };

    function findObjectById(objects, id) {
        for (let i = 0; i < objects.length; i++) {
            if (objects[i]._id === id) {
                return objects[i];
            }
        }
        return null;
    }

    const handleEdit = async (id) => {
        const data = findObjectById(route, id)
        const item = {
            name: data.name,
            url: data.url
        }
        console.log(JSON.stringify(item))

        try {
            const response = await fetch(
                `https://nnia.onrender.com/routes/route/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json", // Add any other headers you need
                    },
                    body: JSON.stringify(item),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to fetch TEST");
            }
            const data = await response.json();
            return data
            // window.location.reload(false)
        } catch (error) {
            // Handle the error
        }
    }


    return (<div className="font-montserrat bg-background">
        <div className=" text-center mb-20">
            <h1 className="font-[700] text-twitterBlue text-[30px] mt-[48px] mb-[25px]">
                Edit Links
            </h1>

            <div className="flex justify-center items-center">
                <div className="flex justify-center flex-col items-center w-[90%] rounded-[5px] bg-white gap-5 py-5">
                    {route.length > 0 ? route.map((link, i) => {
                        return (
                            <div key={i} className="flex justify-between items-center gap-5 flex-col">
                                <div className="flex justify-between items-center gap-5">
                                    <div className="flex justify-between items-center gap-2">
                                        <label htmlFor={link.name} className="flex items-center text-[#696F79] text-[16px] font-semibold gap-3">Route </label>
                                        <input
                                            className=" w-full text-[13px] h-[30px] px-[5px] border-black border-[1px] rounded-[5px] text-[#696F79] "
                                            type="text"
                                            id={link.name}
                                            value={link.name}
                                            placeholder={link.name}
                                            onChange={(event) => editRoute(link._id, event)}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center gap-2">
                                        <label htmlFor={link.url} className="flex items-center text-[#696F79] text-[16px] font-semibold gap-3">URL </label>
                                        <input
                                            className=" w-[230px] text-[13px] h-[30px] px-[5px] border-black border-[1px] rounded-[5px] text-[#696F79] "
                                            type="text"
                                            id={link.url}
                                            value={link.url}
                                            onChange={(event) => editLink(link._id, event)}
                                        />
                                    </div>
                                    <button className='border-black border-[1px] rounded-[5px] px-[4px] hover:bg-twitterBlue hover:text-white hover:border-white' onClick={() => handleEdit(link._id)} >Edit</button>
                                </div>
                            </div>
                        )
                    }) : <div className='mt-16 w-full'>
                        <div className="block lg:flex justify-center items-center">
                            <div className="flex justify-center items-center py-5 w-[100%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
                                <div className=" py-2 w-[100%] flex justify-between px-4 rounded-md">
                                    <p>No Available Links</p>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    </div>);
}

export default EditLink;