import React, { Component } from 'react';
import axios from 'axios';
import NavBtn from './nav_btn';
import Item from './item';
import config from '../config';


class List extends Component {
    state = {
        list: [],  //data is an array so set to empty array
        error: ''   //to display errors to users
    }
    
    componentDidMount() {
        this.getListData();
    }
    
    async getListData() {
        // Call server to get data
        // http://api.reactprototypes.com/todos?key=somekey;

        try {
            const resp = await axios.get(`${config.API_URL}/todos${config.API_KEY}`);

            if(!resp.data.success){
                throw new Error('Something went wrong!');
            }

            this.setState({
                list: resp.data.todos
            });

        } catch(err) {
            // console.log('Get Data Error:', err.message);

            this.setState({
                error: 'Error retrieving list data'
            });
        }
    }

    deleteItem = async id => {
        await axios.delete(`${config.API_URL}/todos/${id + config.API_KEY}`);

        this.getListData();
    }

    render () {
        const { error, list } = this.state;

        const listElements = list.map((item, index) => {
            return <Item key={item._id} item={item} delete={() => this.deleteItem(item._id)} />  // do not use index use unique id to set the value to its key
        });

        return (  //no need to put it in a div everything, just return ul or just return form or button etc.
            <div>
                <h1 className="center">To Do List</h1>
                <NavBtn to="/add-item" color="green darken-2" text="Add Item" />
                <p className="red-text text-darken-2">{error}</p>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>
        );
    }
}

export default List;