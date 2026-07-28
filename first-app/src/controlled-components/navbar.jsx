export function Navbar(props){
    return (
        <nav className={`${props.theme} d-flex flex-row my-3 justify-content-between align-items-center border border-2 p-2`}>
            <div className="fw-bold fs-5">
                <span className={props.brandIcon}></span>
                <span>{props.brandTitle}</span>
            </div>
            {
                props.menuItems.map(item=>
                <span key={item}>{item}</span>)
            }
            <div className="input-group w-25">
                <input type="text" className="form-control"
                placeholder={props.searchString}/>
                <button className={`${props.btnColor}bi bi-search `}></button>
            </div>
            <div>
                <span className="bi bi-gear-fill"></span>
                <span className="bi bi-person-fill mx-3"></span>
            </div>
          
        </nav>
    )
}