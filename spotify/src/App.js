import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar'
import Gallery from './components/Gallery'
import Details from './components/Details'
import{BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component{
  state={
    songs:[],
    loding:true,
    error:false

  }

  componentDidMount = async () =>{

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "273e97a2a4msh6456a1ea4ccf74dp1081c1jsn299a33cde90b"
      }
    })
    
    .then(response =>response.json()) 
    .then((responseObj)=>{
      const {data} = responseObj;
      console.log(data)
      this.setState({songs:data,loading:false})
    })
    .catch(err => {
      console.log(err);
      this.setState({error:true})
    });
}
 isloading = ()=>{
   this.setState({loading:false})
 }



//  componentDidMount = () => {
//   fetch("https://deezerdevs-deezer.p.rapidapi.com/album/%7Bid%7D" + (), {
// "method": "GET",
// "headers": {
// "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
// "x-rapidapi-key": "273e97a2a4msh6456a1ea4ccf74dp1081c1jsn299a33cde90b"
// }
// })
// .then(response => {
// console.log(response);
// })
// .catch(err => {
// console.log(err);
// });
// }
// }
 
render(){
  const {loading} = this.state;
  return(
    <>
    <Router>
    <NavBar/>
    {!loading&&<Gallery
    title = "Albums"
    loading ={this.state.loading}
    songs = {this.state.songs.slice(0,12)} 


    />}
    <Route path="/Details/:id" exact component = {Details}></Route>
    </Router>
    </>
  )
}
}

export default App;
