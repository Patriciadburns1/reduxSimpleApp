import React,{Component} from 'react'; 
import SearchBar from './search_bar'; 

// const API_KEY = 'AIzaSyDAo-K7C5NKFPJ08PYllMMUuAoX4Ef3T8M'; 


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