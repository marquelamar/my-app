import React from 'react';

function List(){
    const itemList = ["Get Milk", "Buy Amazon", "Take over the world."];

    return (
        itemList.map((item) => (
            <p>{item}</p>

        ))

    );
}

export default List;