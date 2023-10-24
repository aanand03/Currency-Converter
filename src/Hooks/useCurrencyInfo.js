// custom hook for fetching currency details

import {useState, useEffect} from 'react'

function useCurrencyInfo(currency) {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(url)
        .then((result) => result.json())
        .then((result) => setData(result[currency]))
    }, [currency])

    return data
    
}

export default useCurrencyInfo