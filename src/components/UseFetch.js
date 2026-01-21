import { useEffect, useState } from "react"

const UseFetch = (url) =>{
    const [api,setApi] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null) 

    useEffect(()=>{
    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=> {
        setApi(data)
        setLoading(false)
    }).catch((errorMsg)=>{
        setError(errorMsg.message)
        setLoading(false)
    })
    },[url]);

return{api, loading, error}
}

export default UseFetch;