
export function EventDemo(){
    function handleHeader(){
        alert("Header Clicked")
    }
    function handleSearch(e){
        e.stopPropagation()
        alert("Search Clicked")
    }
    
    return (
        <div className="container-fulid">
            <header onClick={handleHeader}className="p-4 border border-2 border-dark">
                <div className="fw-bold fw-2">Amazon</div>
                <div>
                    <input type="text" />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </header>
        </div>
    )
}