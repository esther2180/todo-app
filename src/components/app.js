import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import AddItem from './add_item';
import List from './list';


class App extends Component {
    render() {
        return (
            <div className="container">
                <Route path="/" exact component={List} />
                <Route path="/add-item" component={AddItem} />
            </div>
        );
    }
}
    

export default App;

//{...routingInfo} same as = AddItem history={props.history} location & match items to make syntax shorter
