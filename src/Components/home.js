import { NavLink } from "react-router-dom";

let Home = ()=>{
    return(
        <div className="cover_image d-flex" style={{backgroundImage: `url("./imagesDay3/cover.png")` }} >
           
           <NavLink className='cover_link' to={'/artists'}>Music DB</NavLink>
        </div>
    )
}
export default Home;