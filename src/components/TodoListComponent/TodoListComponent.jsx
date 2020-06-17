import React, { Component } from 'react';
import ListItem from './ListItem';
import { library } from  '@fortawesome/fontawesome-svg-core';
import { faTrash } from  '@fortawesome/free-solid-svg-icons';



class TodoListComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                category: '',
                key:''
            }
        }
    }
    handleInput = (e) =>{
        this.setState({
                currentItem:{
                    text: e.target.value,
                    key: Date.now()
                }
        })
    };
    

    addItem = (e) =>{
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text!==""){
            const newItems=[...this.state.items, newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    category:'',
                    key:''
                }
            })
        }
    }
    deleteItem = (key) =>{
        const filteredItems = this.state.items.filter(item =>
        item.key !== key);
        this.setState({
            items:filteredItems
        })
    }
      setUpdate = (text,category,key)=>{
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
        item.category= category;
      }
    })
    this.setState({
      items: items
    })
      }

      

   

  render() {
    return (
        <div className="to-do-listBody">
            <div className="to-do-listComponent">
            <header>
                    <form className="to-do-form" onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter Text"
                    value={this.state.currentItem.text}
                    onChange={this.handleInput}
                    ></input>
                    <div>
                        <label class="container">Catégorie 1
                        <input type="checkbox" 
                        value="Catégorie 1"
                        onChange={this.handleChange} 
                        />
                        <span class="checkmark"></span>
                        </label>

                        <label class="container">Catégorie 2
                        <input type="checkbox"
                        value={this.state.currentItem.category}
                        onChange={this.handleChange}
                         />
                        <span class="checkmark"></span>
                        </label>

                        <label class="container">Catégorie 3
                        <input type="checkbox" 
                        value={this.state.currentItem.category}
                        onChange={this.handleChange}
                        />
                        <span class="checkmark"></span>
                        </label>

                        <label class="container">Catégorie 4
                        <input type="checkbox" 
                        value={this.state.currentItem.category}
                        onChange={this.handleChange}/>
                        <span class="checkmark"></span>
                        </label> 
                    </div>

                    <button type="submit">Ajouter une tâche</button>
                    
                    </form>
                </header>
                <ListItem items={this.state.items} 
                deleteItem={this.deleteItem}
                setUpdate={this.setUpdate}/>
            </div>

        </div>
    );
  }
}

 

export default TodoListComponent;