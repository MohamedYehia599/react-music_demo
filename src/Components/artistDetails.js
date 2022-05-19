import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

let ArtistDetails = ()=>{
    
    let {id}=useParams();
    let [artist, setArtist] = useState({})
    let [error, setError] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:3002/artists/${id}`)
        .then((response)=>{return response.json()})
        .then((data)=>{setArtist(data)})
        .catch((err)=>{setError(err)})
    },[])
   console.log(artist);
   let render_details = ()=>{
       if(artist.name){

       
        return(
            <div className="d-flex flex-column artist_details">
             <img className="artist_image" src={`/imagesDay3/covers/${artist.cover}.jpg`} />
             <h2>{artist.name}</h2>
             <p>{artist.bio}</p>
             <hr/>
             <h1>albums</h1>
              <img className="artist_image" src={`/imagesDay3/albums/${artist.albums[0].cover}.jpg`} />
              <h2>{artist.albums[0].title}</h2>
              <img className="artist_image" src={`/imagesDay3/albums/${artist.albums[1].cover}.jpg`} />
              <h2>{artist.albums[1].title}</h2>
              <img className="artist_image" src={`/imagesDay3/albums/${artist.albums[2].cover}.jpg`} />
              <h2>{artist.albums[2].title}</h2>
              <img className="artist_image" src={`/imagesDay3/albums/${artist.albums[3].cover}.jpg`} />
              <h2>{artist.albums[3].title}</h2>
            </div>
        )
       }else if (error){
           return('check your connections')
       }
       else{
           return 'loading'
       }
    }


    return(
        <div className="artist_details  my-3">
           <NavLink className={'name_link'} to={'/'}>Music DB</NavLink>
          
           <hr/>
           {render_details()}
        </div>
    )
}
export default ArtistDetails;