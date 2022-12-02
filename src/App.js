import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots : [],
      searchField : '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json(); //converts the response to json format
    })
    .then(users => {
      this.setState({robots : users}); //sets our robots in the state to equal our new data from the API
    })
  }

  onSearchChange = (event) => {
    this.setState({searchField : event.target.value }); //sets the value of our searchfield to equal the value we input in the search bar
        //console.log(event.target.value);
  }

  render(){
    const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
    return (robots.length === 0) ? <h1 className="tc f1">LOADING...</h1>
    : (
      <div className="tc">
        <h1 className="f1">ROBOFRIENDS</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
