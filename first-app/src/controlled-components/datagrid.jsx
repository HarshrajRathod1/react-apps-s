export function DataGrid(props){
    return(
        <table className={`${props.theme} table table-hover caption-top`}>
            <caption className="mx-2">{props.caption}</caption>
            <thead>
                <tr>
                    {
                        Object.keys(props.data[0]).map(key=><th key={key}>
                            <div className="dropdown">
                                {key}
                                <button data-bs-toggle="dropdown" className="bi btn bi-three-dots"></button>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item"><span className="dropdown-item-text"><span className="bi bi-funnel"></span>Filter</span></li>
                                    <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-sort-alpha-down"></span> Sort Asc </span> </li>

                                    <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-sort-alpha-up"></span> Sort Desc </span> </li>
                                </ul>
                            </div>
                        </th>)
                    }
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item,index)=><tr>
                        {
                            Object.keys(item).map(key=><td key={key}>{item[key]}</td>)
                        }
                        <td>
                            <button className="btn btn-warning bi bi-pen-fill"></button>
                            <button className="btn btn-danger bi bi-trash-fill mx-2"></button>
                        </td>
                    </tr>)
                }
            </tbody>

        </table>
    )
}