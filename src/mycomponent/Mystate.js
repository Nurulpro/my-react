
import react, {Component} from 'react'
class Mystate extends Component{

    constructor(){
        super()

        this.state={
            name:"Nurul",
            Age:["29","28","41"],
            Height:{

                classone : ["21","23",'25'],
                classtwo : '30',
                classthree : '35',

            }

    

        }
    }

    render(){
        return <div>
               <h1>The Name Is = {this.state.name}</h1>
         <h1>The Age Is = {this.state.Age[2]}</h1>
         <h1>The Height Is = {this.state.Height.classone[2]}</h1>
        </div>
        
     
    }
}

export default Mystate