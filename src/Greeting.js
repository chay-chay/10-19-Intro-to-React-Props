import React from 'react'
import Weather from  './Weather'

// functional component 
// export default function Greeting(attr){
//     // props can NOT be changed inside the component
//     return(
//         <div>
//             <h3>Welcome {attr.name}!</h3>
//             <h5>It is {attr.weather} outside</h5>
//         </div>
//     )
// }



// if a file only exports 1 thing, you want to make it the default export 


// class component 
class Greeting extends React.Component{
//   constructor(props){
//     super(props)  // this.props = props 
//   }

  render(){
    return(
        <div>
            <h3>Welcome {this.props.name}!</h3>
            <Weather weather={this.props.weat}/>
        </div>
    )
  }
}


export default Greeting