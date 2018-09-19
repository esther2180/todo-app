import React, { Component } from 'react';
import dummyListData from '../dummy_data/list_data';


class List extends Component {
    state = {
        list: []  //data is an array so set to empty array
    }

    componentDidMount() {
        this.getListData();
    }

    getListData() {
        // Call server to get data

        this.setState({
            list: dummyListData
        });
    }

    render() {
        // console.log('State:', this.state);

        const listElements = this.state.list.map((item, index) => {
            return <li className="collection-item" key={item._id}>{item.title}</li>  // do not use index use unique id to set the value to its key
        });

        return (  //no need to put it in a div everything, just return ul or just return form or button etc.
                <ul className="collection">
                    {listElements}
                </ul>
        );
    }
}

export default List;