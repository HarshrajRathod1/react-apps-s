import React from "react";

export class AdminLogin extends React.Component{
    constructor(){
        super();
        this.state={title:"This is a State",category:['mobile','laptop','charger']}
    }
    componentDidMount(){
        this.setState({title:"Shopping App"})
    }

    render(){
        return(
            <div className="container-fluid text-center">
                <h3>{this.state.title}</h3>
                <ul>
                    {
                        this.state.category.map(item=>(
                            <li key={item}>{item}</li>
                        ))
                    }
                </ul>
            </div>  
        )
    }
}