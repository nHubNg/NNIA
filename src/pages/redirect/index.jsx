import {useEffect} from 'react'

const RedirectUrl = () => {
    function replaceSlashWithPercent2F(text) {
        return text.replace("/", "%2F");
    }

    useEffect(() => {
        const url = window.location.href;
        const path = url.substring(url.indexOf("/", 8) + 1);
        const item = replaceSlashWithPercent2F(path)
        const header = {
            "Content-Type": "application/json",
        };

        fetch(`https://nnia.onrender.com/routes/${item}`, {
            method: "GET",
            headers: header
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.href = data.url;
            })
            .catch((error) => {
                console.log(error.message)
            });

    }, []);

    return <h5>Redirecting...</h5>;
};

export default RedirectUrl;
