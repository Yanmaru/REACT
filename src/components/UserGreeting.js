import React, { Component } from 'react'

class UserGreeting extends Component {

// Ma  méthode

//     constructor(props) {
//       super(props)
    
//       this.state ={
//         message: "Welcome guest !"
//       }
//     }

//     changeMessage(){
//         this.setState({
//             message : "Welcome user"
//         })
//             } 

//   render() {

    
    
//     return(
//         <div>
//         <h1>{this.state.message}</h1>
//         <button onClick ={()=>this.changeMessage()}>Se connecter</button>
//         </div>
    
//     )
      
     
//   }


// EXEMPLE PROF 
        constructor(props) {
           super(props)
        
           this.state ={
            isLoggedIn: false,
            message: "Welcome guest"
           }
         }

         updateNom(){
            // message : User
            this.setState({
                isLoggedIn : true
            })
         }
         
         render() {


             if(this.state.isLoggedIn)
                 return <div>
                     Welcome Aurel
                     <br/>
                     <button onClick ={()=>this.updateNom()}>Se connecter</button>
                 </div>
                 else
                 return <div>
                     Welcome Mazemgbè
                     <br/>
                     <button onClick ={()=>this.updateNom()}>Se connecter</button>
                 </div>




            // // méthode avec condition ternaire, le bouton disparaît après click
            // return (
            //     this.state.isLoggedIn ? <div> Welcome Awarlé</div> : (<div>Welcome Zokwezo
            //                                                             <br/>
            //                                                             <button onClick ={()=>this.updateNom()}>Se connecter</button>                                 
            //                                                             </div>)
                
            // ) 

            // Méthode avec variable intermédiaire
            
        //     let result;
        //     if(this.state.isLoggedIn){
        //         result: <div>Welcome Awarlé</div>
        //     }
        //     else {
        //         result = <div> Welcome Zokwezo <button onClick ={()=>this.updateNom()}>Se connecter</button></div>
        //     }
        //     return <div>{result}</div>
          }

}

export default UserGreeting