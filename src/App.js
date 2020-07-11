import React,{Component} from 'react';
import SearchBar from'./SearchBar.js';
import CardList from './CardList';
import Scroll from './Scroll'; 
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      search: ''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => this.setState({robots: user}))
  }
  onTextChange = (event) =>{
    this.setState({ search: event.target.value});
  }
  render(){
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toUpperCase().includes(this.state.search.toUpperCase());
    })
    return(
      <div className = "tc" >
        <h1 className = "f1" > Robo Friends</h1>
        <SearchBar searchChange = {this.onTextChange}/>
        <Scroll>
          <CardList robots = {filteredRobots}/>
        </Scroll>
      </div>
    )
  }
}

export default App;
