import { useMemo } from "react"

export function useFilterData(data,searchString){
    let filterData=useMemo(()=>{
        return data.filter(item=>item.toLowerCase().includes(searchString.toLowerCase()))
    },[searchString])
    return filterData
}