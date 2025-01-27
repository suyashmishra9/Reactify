import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        console.log(`Fetching data from URL: ${url}`);
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                console.log(`Response received for currency: ${currency}`, res[currency]);
                setData(res[currency]);
            })
    }, [currency]);

    return [data];
}

export default useCurrencyInfo;
