import { NavLink } from "react-router-dom";

let Artist = (props)=>{
    
return(
    <div className=" artist my-3 d-flex flex-column justify-content-center">
       <img className="artist_image " src={`./imagesDay3/covers/${props.artistInfo.cover}.jpg`}/>
        <NavLink className='name_link my-2' to={`/artists/${props.artistInfo.id}`}>{props.artistInfo.name}</NavLink>
    </div>
)
}
export default Artist;