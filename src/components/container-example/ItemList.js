import React from 'react';

const ItemList= ({items}) => {
    console.log(items);
    return (
    <ul>
        {items.map((name, ind) => {
            return (<li key = {ind}>{name}</li>);
        })}
    </ul>);
}

export default ItemList;