import react, {Component} from "react"

class return1 extends Component{

constructor(){
    super()
this.state={
    login: false
}

}

render(){

if(this.state.login==true){

    return(<button>LOG OUT</button>)
}else{

    return(<button>LOG IN</button>)
}

}

}

export default return1