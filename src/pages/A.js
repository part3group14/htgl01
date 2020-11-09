import React from "react";

export default class A extends React.Component {

    constructor(props){
        // props.name = 15;
        super()
        this.state = {
            person:{
                name:props.name,
                age:12
            }
        }  
    }

    render = () => {

        return (
            <div>
                <p>{this.state.person.name}</p>
            </div>
        )
    }
}
