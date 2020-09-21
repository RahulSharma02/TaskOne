import React, { Component } from 'react'

class Search extends Component {

  state = {
    query: "",
    data: [],
    filteredData: []
  };



  //  function to handle change
  handleChange = (e) => {
    const query = e.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.fname.toLowerCase().includes(query.toLowerCase());
      });
      return {
        query,
        filteredData
      };
    }, () => this.props.getData(query));

  }

  // function to get data 

  handleSubmit = (e) => {
    e.preventDefault()
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {/* <i className="fa fa-search" aria-hidden="true"></i> */}
          <input className="form-control form-control-sm m-3 w-50" type="text" placeholder="Search"
            onChange={this.handleChange} aria-label="Search" />
          {/* <button onClick={this.getData}>Search</button> */}
        </form>

        <div>{this.state.filteredData.map(i => <p>{i.fname}</p>)}</div>
      </>

    )
  }
}

export default Search;