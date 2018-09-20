import React from 'react';
import Item from './item';


const List = (props) => {
    const listElements = props.data.map((item, index) => {
        return <Item key={item._id} item={item} delete={() => props.delete(index)} />  // do not use index use unique id to set the value to its key
    });

    return (  //no need to put it in a div everything, just return ul or just return form or button etc.
            <ul className="collection">
                {listElements}
            </ul>
    );
}

export default List;