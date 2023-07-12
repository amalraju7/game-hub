import React, { useEffect, useState } from 'react'
import apliClient from '../services/apliClient';
import { CanceledError } from 'axios';

export interface FetchResponse<T>{
    count:number,
    results:T[],
}
const useData = <T>(endpoint:string) => {
const [data,setData] = useState<T[]>([]);
const [error,setError] = useState("");
const [isLoading,setIsLoading] = useState(false);

useEffect(() =>{
    const controller = new AbortController();
    setIsLoading(true);
apliClient.get(endpoint,{signal:controller.signal}).then((res)=>{
setData(res.data.results);
console.log(res.data.results);
setIsLoading(false);
}).catch((error)=>{
    if(error instanceof CanceledError) return;
    setError(error.message)
    setIsLoading(false);
    return () =>controller.abort();
},)

},[]);
return {data,error,isLoading}
}

export default useData