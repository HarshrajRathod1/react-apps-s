
export function FakestoreSearch(){
    return(
        <div>
            <form action="/result">
                <p>Search Product</p>
                <input type="text" name="search" />
                <button type="submit">Result</button>
            </form>
        </div>
    )
}