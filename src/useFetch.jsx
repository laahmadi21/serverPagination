import { useEffect, useState } from "react";
import axios  from "axios"

const useFetch = (url, sieveModel) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async() => {
    setLoading(true);
    const response = await fetch(url,{
        method:'POST',
        body:JSON.stringify(sieveModel),
        headers:{
          "Content-Type": "application/json;charset-UTF-8"
        }
    });
    const result = await response.json();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [sieveModel.page]);

  return [loading, data];
};
export default useFetch;
