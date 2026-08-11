
export function useFilterData(data,searchString){
    return data.filter(item=>item.toLowerCase().includes(searchString.toLowerCase()))
}