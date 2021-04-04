import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    
    constructor(props) {
        super(props);
        // defining our state object
        this.state = {
            items: [] //array is responsible for storing all of the various items that you can enter
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    // handles adding an item
    addItem(e) {
        if (this._inputElement.value !== "") {
            //create variable called newItem to store an object
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            //setting state's items property
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        
        console.log(this.state.items);

        e.preventDefault();//overides this events default behavior. Why: by default, when a form is submitted, the page reloads and clears everything
                           //prevent default overrides this behavior
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }
    
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                           delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList;