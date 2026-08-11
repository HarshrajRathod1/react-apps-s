import { useFetchData } from "../../hooks/fetch-data"

export function Harsh(){
    const categorys=useFetchData("https://fakestoreapi.com/products/categories")
    return(
        <div className="container-fluid">
            {
                categorys.map(category=>(<li key={category}>{category}</li>))
            }
        </div>
    )
} 