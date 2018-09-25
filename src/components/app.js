import 'materialize-css/dist/css/materialize.min.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import AddItem from './add_item';
import List from './list';
import Details from './details';
import NotFound from './not_found';


class App extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route path="/" exact component={List} />
                    <Route path="/add-item" component={AddItem} />
                    <Route path="/item/:itemId" component={Details} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}
    

export default App;

//{...routingInfo} same as = AddItem history={props.history} location & match items to make syntax shorter
