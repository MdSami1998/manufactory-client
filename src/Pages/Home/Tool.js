import React from 'react';

const Tool = ({ tool }) => {
    const { name, img, price, minimumOrder, availableQuantity, description } = tool;
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default Tool;