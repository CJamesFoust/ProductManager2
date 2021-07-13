import React from 'react';

export default props => {
    return (
        <div>
            {props.products.map((product, index) => {
                return <h3 key={index}>{product.title}</h3>
            })}
        </div>
    )
}