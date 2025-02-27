import React from "react";

function Products() {

    // let products = ['Laptop', 'Keyboard', 'Mouse', 'Headphones']

    let productList = [
        {id: 1, name: 'Laptop', price: 35000, quantity: 10},
        {id: 2, name: 'Keyboard', price: 3500, quantity: 20},
        {id: 3, name: 'Mouse', price: 2000, quantity: 15},
        {id: 4, name: 'Headphones', price: 5000, quantity: 8}
    ]

    return(
        // <div>
        //     {products.map((product, index)=>{
        //         return <li key={index}>{product}</li>
        //     })}
        // </div>

        <div>
            {
                productList.map((product)=>{
                    return <li key={product.id}>{product.name} price : {product.price} quantity : {product.quantity}</li>
                })
            }
        </div>
    )
}

export default Products