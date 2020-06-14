import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar'
import Home from './components/Home'
import Album from './components/Album'

import{BrowserRouter as Router, Route} from 'react-router-dom'
import Artist from './components/Artist';

class App extends React.Component{
  state={
    searchedSongs:[],
    error:false

  }
  

  showSearchResult = async (searchString) =>{

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem" + searchString, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "273e97a2a4msh6456a1ea4ccf74dp1081c1jsn299a33cde90b"
	}
})
    
    .then(response =>response.json()) 
    .then((artists)=>{
      const songs = artists.data
      console.log("my songs are", songs)
      this.setState({searchedSongs:songs})
    })
    .catch(err => {
      console.log(err);
      this.setState({error:true})
    });
}
 


render(){
  const {loading} = this.state;
  return(
    <>
    <Router>
    <NavBar/>
    <Home/>
    <Route path="/Album/:id" exact component = {Album}></Route>
    <Route path ="/Artist" exact component = {Artist}/>
    </Router>
    </>
  )
}
}

export default App;
