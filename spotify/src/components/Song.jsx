import React from 'react'
import{Image,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'




class Song extends React.Component{
    state={
        selected:false
    }


    render(){
        const song = this.props.data;
        console.log(song)
        return(
            <div classname = "my-4" key={this.props.key}>
               <Link to={"/Details/" + this.props.data.album.id}><img
                className= "img-fluid"
                src= {song.album.cover_xl}
                alt= "song"
                onClick = {() => {
                    this.setState({selected:!this.state.selected})
                }}
                /> 
                </Link> 
                <p>{this.props.data.album.title}</p> 
                
            </div>
           
        )
    }
}



export default Song