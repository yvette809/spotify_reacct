import React from 'react';
import {Row,Spinner} from 'react-bootstrap'
import Song from './Song'


const Gallery = (props)  => (
    
    <>
    <h4>{props.title}</h4>
    <Row className = "row-cols-1 row-cols-md-6 mb-4 text-center offset-2 ">
    
            {props.loading
            ?[0,1,2,3,4,5,6,7,8,9,10,11].map((song)=>(
                <div style={{ width: "10%", height: "auto" }} key={song}>
              <Spinner animation="border" variant="light" />
            </div>
            ))
            :props.songs.map((song)=>(
                
                <Song
                data = {song}
                key = {song.id}
                />
               
            ))}
       
    </Row>
    </>
)



export default Gallery;