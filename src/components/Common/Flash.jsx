import React from 'react';

class Flash extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            message: this.props.message
        };
    }

    componentWillMount(){
        if(typeof this.props.message === "string"){
            let temp = [];
            temp.push(this.props.message);
            this.setState({message: temp});
        }
    }

    render(type=this.props.type){
        return(
            <div>
                {this.state.message ? this.state.message.map(function(messageString,index){
                    return <div key={index} className={"alert alert-"+type}>{messageString}</div>
                }) : null}
            </div>
        );
    }
}

export default Flash;
