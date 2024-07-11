import React, { Component } from 'react'

class AdminTest extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           affiche: false,
           
        }
      } 

       testeur(){
         this.setState({
             affiche : true
         })
     }


  render() {

    
    // // Méthode avec variable intermédiaire
    // var rendu;
    //     if(this.state.affiche){
    //         rendu= <div> <button>Edit</button></div>
    //     }

    //     else{
    //         rendu = <div> Veuillez vous connecter en tant qu' Admin</div>
    //     }

    //     return(

    //         <div>{rendu}</div>
    //     )

    //  Méthode avec variable ternaire
    return this.state.affiche ? <div> Awarlé</div> : (<div>Welcome !<br/><button onClick ={()=>this.testeur()}>Se connecter en tant que Admin</button></div>)
        
                 
                                                                         
                                                                                                          
                                                                         
    
  }
}

export default AdminTest

