
import react, {Component} from 'react'
class Mysetstate extends Component{

constructor(){
 super()


 this.state={

    name: "Nurul Islam"
}



}



ChangeName(a){
this.setState({name:a})

}

    render(){
        return <div>
               <h1>{this.state.name}</h1>
               <button onClick={this.ChangeName.bind(this,"Jobaer Hossain")}>Change Naeme</button>
         
        </div>
        
     
    }
}

export default Mysetstate