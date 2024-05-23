import { useState , useEffect } from "react";

const useFetch = (url) => {

  const [data , setBlog] = useState(null);
  const [ispending , setIspending] = useState(true);
  const [error , setError] = useState(null);
  

  useEffect(() =>
  {
    const abortCont =  new AbortController();
    setTimeout(() => {
      fetch(url , {signal: abortCont.signal})
        .then(res => {
          if(!res.ok){
            throw Error("DATA NOT FOUND");
          }
          return res.json();
        })
        .then((data) =>
          {
            setBlog(data);
            setIspending(false)
          })
          .catch(err =>
            {
              if(err.name ===  'AbortError')
              {
                console.log("fetch aborted");
              }
            else{
                setBlog(null);
              setIspending(false);
              setError(err.message);
            }
            })
    }, 1000);

         return () => abortCont.abort();
  },[url])

    return {data, ispending ,error};
}
 
export default useFetch;