import React,{ Component } from "react";


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: " "
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
        input:event.target.value
    })
    let {term} = this.state; 
    this.props.onSearchTermChange(term); 
  }

  render() {
    return(
        <div> 
            <input value={this.state.term} onChange={this.onInputChange}/>
        </div>
    )  
  }
}

export default SearchBar;
