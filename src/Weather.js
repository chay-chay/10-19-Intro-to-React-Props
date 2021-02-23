import React from 'react'

class Weather extends React.Component{


    render(){
        return(
            <h5>It is {this.props.weather} outside</h5>
        )
    }
}

export default Weather