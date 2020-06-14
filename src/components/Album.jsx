import React from 'react'
import{Card,Button,Container,Col,Row} from 'react-bootstrap'


class Album extends React.Component{

    state ={
        
        totalTracks: [],
        releaseDate: null,
        coverImg: "",
        title: "",
        tracks:[],
        artist:  {
        id: "",
       name: ""}
        
    }

componentDidMount = (albumId) =>{
 albumId = this.props.match.params.id
    fetch("https://deezerdevs-deezer.p.rapidapi.com/album/"+ albumId, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "273e97a2a4msh6456a1ea4ccf74dp1081c1jsn299a33cde90b"
	}
}) .then(response =>{
    if (response.ok){
    return response.json()
    // console.log(response)
    }
}).then(album => {
    
    this.setState({
        totalTracks: album.nb_tracks,
        releaseDate: String(album.release_date).substr(0,4),
        coverImg: album.cover_big,
        title: album.title,
        artist: album.artist,
        tracks:album.tracks.data
            
    })
}) .catch(err => {
    console.log(err)
})


}

render(){
    let faMusic =  <i class="fa fa-music mr-2 text-white"></i>
    return(
             
 <>
 <Container>
     <Row>
         <Col>
 <h1>{this.state.artist.name}</h1>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.state.coverImg} />
  <Card.Body>
    <Card.Title>{this.state.artist.name}</Card.Title>
    
    <Button variant="primary">PLAy</Button>
    <Card.Text>
      <span>{this.state.releaseDate}</span> - <span>{this.state.totalTracks}</span>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>
<table >
{this.state.tracks.map(track =>{
    return(
        <tr>
            <td>{faMusic}</td>
            <td>{track.title}</td>
            <td>{track.duration}</td>
        </tr>
    )
}


)}
    
</table>
</Col>
</Row>
</Container>
</>

)
    
}

}








export default Album;