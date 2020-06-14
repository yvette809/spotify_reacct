import React from 'react';
import Gallery from './Gallery'



class Home extends React.Component{
    state={
      songs:[],
      loding:true,
      error:false
  
    }

    
    componentDidMount = async () =>{
  
      fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=queen", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "273e97a2a4msh6456a1ea4ccf74dp1081c1jsn299a33cde90b"
        }
      })
      
      .then(response =>response.json()) 
      .then((responseObj)=>{
        const songs = responseObj.data;
        // console.log(songs)
        this.setState({songs:songs,loading:false})
      })
      .catch(err => {
        console.log(err);
        this.setState({error:true})
      });
  }
   isloading = ()=>{
     this.setState({loading:false})
   }
  
  
  
  
  render(){
    const {loading} = this.state;
    return(
      <>
      
      {!loading&&<Gallery
      title = "Albums"
      loading ={this.state.loading}
      songs = {this.state.songs.slice(0,12)} 
      />}
  

      </>
    )
  }
  }
  
  export default Home;
  