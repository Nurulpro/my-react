import react, {Component} from "react"

class Varriableelement extends Component{

constructor(){
    super()
this.state={
    login:true
}

}

render(){

return( 
    
    
    this.state.login? <h1>LOGIN NOW</h1>: <h1>LOG OUT</h1>
    
    )

}

}

export default Varriableelement