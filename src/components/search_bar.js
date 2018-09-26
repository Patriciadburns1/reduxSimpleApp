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
    this.props.onSearchTermChange(input); 
  }

  render() {
    return(
        <div> 
            <input value={this.state.input} onChange={this.onInputChange}/>
        </div>
    )  
  }
}

export default SearchBar;
