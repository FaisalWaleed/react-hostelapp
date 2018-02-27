import React from 'react';

class Flash extends React.Component{

    render(type=this.props.type){
        return(
            <div>
                {this.props.messages ? this.props.messages.map(function(message,index){
                    return <div key={index} className={"alert alert-"+type}>{message}</div>
                }) : null}
            </div>
        );
    }
}

export default Flash;