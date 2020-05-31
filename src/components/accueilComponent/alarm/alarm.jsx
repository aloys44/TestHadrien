import React from "react";


class Alarm extends React.Component {  
    constructor(props) {    
        super(props);  
          
          this.state = { min : 1, sec : 0 };   // Créer l’objet state dans le composant    
          setInterval(() => {
          var newState = this.decrTime(this.state);     
          console.log(newState);  // Afficher l’objet state dans la console    
          
         this.setState({min : newState.min, sec : newState.sec }); 
         }, 1000);

         }
          decrTime({min, sec}) { 
          sec = sec - 1; 
           if (sec < 0) {
               min = min - 1;
           if (min < 0) {
               min = 0;
               sec = 0;
               }      
           else {
               sec = 59;
               }    
           }
           return { min, sec }; 
           }
            formatTime({min, sec}) {
               if (min < 10) min = "0" + min;  // 9 => "09"
               if (sec < 10) sec = "0" + sec;  // 9 => "09" 
                return `${min}:${sec}`;   // de la forme "10:08"  
                }  render() {
                     if (this.state.min == 0 && this.state.sec == 0) {
                              clearInterval(this.timer); 
                              return <div>Fin de l’alarme</div>    }
                              
                    return <div>{this.formatTime(this.state)}</div>  }}
                    
                    

export default Alarm