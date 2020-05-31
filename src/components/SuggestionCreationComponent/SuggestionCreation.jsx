import React from "react";

class SuggestionCreation extends React.Component {  
    constructor(props) {
            super(props);    
            this.state = 
            { value : props.value };
              }  
    handlerChange = (event) => { 
            this.setState({value : event.target.value});  }

 render() {    
     return (
     <div>
     <div className="field">
      <label class="label">Titre de votre suggestion</label>
        <div class="control">
        <input type="text" placeholder="titre de votre suggestion"></input>
      </div>
     </div>


    <div class="field">
      <label class="label">Email</label>
        <div class="control">
          <textarea type="text" placeholder="description de votre suggestion" 
          cols={this.props.cols} 
          rows={this.props.rows} 
          value={this.state.value} 
          onChange={this.handlerChange}/>
        </div>
     </div>
    </div>
     )
     
     
     } }

export default SuggestionCreation;