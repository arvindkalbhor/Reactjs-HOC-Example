import React,{Component} from 'react';

class FirstName extends Component{
    render(){
        return(
            <div classname="FirstName">
               {this.props.firstname}
            </div>
        )
    }
}

export default FirstName;