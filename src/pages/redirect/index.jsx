import {useEffect} from 'react'

const RedirectUrl = () => {
    function replaceSlashWithPercent2F(text) {
        return text.replace("/", "%2F");
    }
    const url = window.location.href;

    useEffect(() => {
        const path = url.substring(url.indexOf("/", 8) + 1);
        const item = replaceSlashWithPercent2F(path)
        console.log(path)
        const header = {
            "Content-Type": "application/json",
        };

        fetch(`https://nnia.onrender.com/routes/${item}`, {
            method: "GET",
            headers: header
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                // window.location.href = data.url;
            })
            .catch((error) => {
                console.log(error.message)
            });

        fetch(`https://nnia.onrender.com/routes`, {
            method: "GET",
            headers: header
        })
            .then((response) => response.json())
            .then((data) => {
                // window.location.href = data.url;
                console.log(data)
            })
            .catch((error) => {
                console.log(error.message)
            });

    }, [url]);

    return <h5>Redirecting...</h5>;
};

export default RedirectUrl;
