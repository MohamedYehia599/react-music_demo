import { Component } from "react";
import Artist from "./artist";

class Artists extends Component{
    constructor(){
      super();
      this.state = {
          artists:[],
          error:''
      }
    }
     componentDidMount(){
         fetch('http://localhost:3002/artists')
         .then((response)=>{return response.json()})
         .then((data)=>{
             this.setState({artists:data})
         })
         .catch((err)=>{
             this.setState({error:err})
         })
     }

     render_artists =()=>{
         if(this.state.artists[0]){
            return this.state.artists.map((element)=>{
                return(
                    <Artist key={element.id} artistInfo = {element} />
                        
                    
                )
             })
             
          console.log(this.state.artists);
         }else if (this.state.error){
             return 'check your  connection';

         }
         
         
         else{
             return 'loading';
         }
     }

    render(){
        return(
            <div>
                {this.render_artists()}
                
            </div>
        )
    }
}
export default Artists;