import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: " "
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
        input:event.target.value
    })
    let {input} = this.state; 
  }

  render() {
    return(
        <div> 
            <input onChange={this.onInputChange}/>
             VALUE OF THE INPUT : {this.state.input}
        </div>
    )  
  }
}

export default SearchBar;
