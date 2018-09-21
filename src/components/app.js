import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import axios from 'axios';
import AddItem from './add_item';
import List from './list';
import dummyListData from '../dummy_data/list_data';

//This is the owner of the data controls the data!

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c718todolistes';

class App extends Component {
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
            const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`);

            if(!resp.data.success){
                throw new Error('Something went wrong!');
            }

            this.setState({
                list: resp.data.todos
            });

        } catch(err) {
            console.log('Get Data Error:', err.message);

            this.setState({
                error: 'Error retrieving list data'
            });
        }

        // const resp = axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp) => {
        //     // console.log('Server Resp:', resp);
        //     this.setState({
        //         list: resp.data.todos
        //     });
        // }).catch((err) => {
        //     console.log('Get List Eata Error:', err.message);

        //     this.setState({
        //         error: 'Error retrieving list data'
        //     });
        // });
        // // console.log('Axios Return Value:', resp);
    }
    
    //NEWER WAY - using async
    addItem = async (item) => {  
        await axios.post(`${BASE_URL}/todos${API_KEY}`, item);  

        this.getListData();

        //First
        // item._id = new Date().getTime();

        // this.setState({
        //     list: [item, ...this.state.list]
        // });

        //OLDER WAY
        // axios.post(`${BASE_URL}/todos${API_KEY}`, item).then((resp) => {  //bind with fat arrow function
        //     console.log('Add Item Resp: ', resp);

        //     this.getListData();  //recall to update from server and show on dom
        // }).catch((err) => {
        //     console.log('Add Item Error:', err);
        // });

    }

    deleteItem = async id => {
        console.log('Delete Item ID:', id);

        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

        this.getListData();

        //OLD WAY
        // const {list} = this.state;

        // const listCopy = list.slice();  //makes a copy of an array

        // listCopy.splice(index, 1);  //remove from that copy array

        // this.setState({
        //     list: listCopy  //reset the array list
        // });
    }

    render() {
        const { list, error } = this.state;

        console.log('List:', list);
        return (
            <div className="container">
                <h1 className="center">To Do App</h1>
                <AddItem add={this.addItem} />
                <p className="red-text">{error}</p>
                <List data={list} delete={this.deleteItem} />
            </div>
        );
    }
}
    

export default App;


