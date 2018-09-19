import React from 'react';


const List = (props) => {
    const listElements = props.data.map((item, index) => {
        return <li className="collection-item" key={item._id}>{item.title}</li>  // do not use index use unique id to set the value to its key
    });

    return (  //no need to put it in a div everything, just return ul or just return form or button etc.
            <ul className="collection">
                {listElements}
            </ul>
    );
}

export default List;