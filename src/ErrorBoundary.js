import React, {Component} from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super();
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(){
        this.setState({hasError : true})
    }

    render(){
        const {hasError} = this.state;
        if(hasError){
            return(
                <h1>
                    Ooooops... This is not good
                </h1>
            );
        } else{
            return(
                this.props.children
            );
        }
    }
}

export default ErrorBoundary;