import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(url){
    const [category,setCategory]=useState([])
    function LoadCategory(){
        axios.get(url)
        .then((response)=>{
            setCategory(response.data)
        })
    }
    
    useEffect(()=>{
        LoadCategory()
    },[])

    return category
}