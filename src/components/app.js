import React,{Component} from 'react'; 
import SearchBar from './search_bar'; 



class App extends Component{
    constructor(props){
        super(props); 

    }
    
    render(){
        return(
            <div>
                <SearchBar/>
            </div> 
        )
    }
}


export default App; 