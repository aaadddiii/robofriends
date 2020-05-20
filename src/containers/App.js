import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll'
class App  extends React.Component {
	constructor(){
		super()
		this.state = {
			robots : [],
			searchfield : ''
		}
	}
	componentDidMount(){ 
		fetch('https://jsonplaceholder.typicode.com/users').then(response => {
			return response.json();
		})
		.then(users =>{
			this.setState({robots:users})

		})
	}
	

onsearchchange = (event) => {
	this.setState({searchfield: event.target.value})
}

	render(){
		const filterrobots = this.state.robots.filter(robot=>{
	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
		if(this.state.robots.length===0){
			return (
				<div className="tc">
				<h1>Loading</h1>
				</div>);
		}
		else{
			return (
		<div className="tc">
			<h1 className="f1">RoboFriends</h1>
			<SearchBox searchchange={this.onsearchchange}/>
			<Scroll>
				<CardList robots = {filterrobots} />
			</Scroll>
		</div>
		);
		}
		
	}
}
export default App;