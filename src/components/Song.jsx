import React from 'react'

import {Link} from 'react-router-dom'

class Song extends React.Component{
    state={
        selected:false
    }


    render(){
        const song = this.props.data;
        console.log(song)
        return(
            <div className = "my-4" key={this.props.key}>
               <Link to={"/Album/" + this.props.data.album.id}>
                   <img
                className= "img-fluid"
                src= {song.album.cover_xl}
                alt= "song"
                onClick = {() => {
                    this.setState({selected:!this.state.selected})
                }}
                /> 
                </Link> 
               <Link to="/album">
                   Album:{this.props.data.album.title}
                   </Link>
                   <br></br>
                   <Link to={location => `/artist/${this.props.data.artist.id}`} >
                   {this.props.data.artist.name}
                   </Link>
                
            </div>
           
        )
    }
}



export default Song