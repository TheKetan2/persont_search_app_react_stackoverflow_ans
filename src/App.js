import React, { Component } from "react";
import "./style.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchedData: null
    };
  }

  handleInputChange = event => {
    let input = event.target;
    let name = event.target.name;
    let value = input.value;
    this.setState({ [name]: value });
  };

  search = event => {
    event.preventDefault();
    const searchNumber = parseInt(this.state.search); //<= the number that we get from input is of type string so we are parsing it to int
    console.log(searchNumber);
    let filteredData = data.find(d => d.id === searchNumber); // <= this line will return the fist contact having the ID == serchNumber
    console.log(filteredData);
    this.setState({
      searchedData: filteredData
    }); //<= here we are setting the state of searchedData so that we can use it to render our fetched data
  };

  render() {
    return (
      <div>
        <form onSubmit={this.search}>
          <input
            name="search"
            type="number"
            required
            onChange={this.handleInputChange}
            max={data.length.toString()}
            min={"1"}
          />
          <button type="submit">Search</button>
        </form>
        {//here, we see if this.state.searchedData is null, if yes then we render nothing else, we rendered the this.state.searchedData.
        this.state.searchedData && (
          <div>
            <p>ID: {this.state.searchedData.id}</p>
            <p>Name: {this.state.searchedData.first_name}</p>
            <p>Surname: {this.state.searchedData.last_name}</p>
          </div>
        )}
      </div>
    );
  }
}

// I am using this data array as the source for filtering.

const data = [
  {
    id: 1,
    first_name: "Mollie",
    last_name: "Stoppe"
  },
  {
    id: 2,
    first_name: "Yorgo",
    last_name: "Jewess"
  },
  {
    id: 3,
    first_name: "Adrian",
    last_name: "Tibald"
  },
  {
    id: 4,
    first_name: "Brody",
    last_name: "Lauxmann"
  },
  {
    id: 5,
    first_name: "Germayne",
    last_name: "Shinefield"
  },
  {
    id: 6,
    first_name: "Winthrop",
    last_name: "Jenkinson"
  },
  {
    id: 7,
    first_name: "Marv",
    last_name: "Bumpus"
  },
  {
    id: 8,
    first_name: "Dag",
    last_name: "Barks"
  },
  {
    id: 9,
    first_name: "Tallie",
    last_name: "Ortega"
  },
  {
    id: 10,
    first_name: "Martin",
    last_name: "Chretien"
  }
];
