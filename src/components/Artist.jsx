import React from 'react';



class Artist extends React.Component{

    state ={
        artist:[]
    }


    componentDidMount = (artistId) =>{
        artistId = this.props.match.params.id
       fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/"+ artistId, {
       "method": "GET",
       "headers": {
           "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
           "x-rapidapi-key": "273e97a2a4msh6456a1ea4ccf74dp1081c1jsn299a33cde90b"
       }
   }) .then(response =>{
       if (response.ok){
           console.log(response)
    //    return response.json()
       }
   }).then(artist => {
       return artist
       this.setState({artist:artist})
   }) .catch(err => {
       console.log(err)
   })
   
   
   }


   render(){
       return(
           <h1>I Hate Bey</h1>
       )
   }
    }


    export default Artist
