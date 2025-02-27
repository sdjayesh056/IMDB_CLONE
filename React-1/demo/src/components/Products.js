import React from 'react'

function Products() {

    // let products = ['Laptop', 'Headphones', 'Keyboard', 'Mouse', 'Laptop']

    let productList = [
        { id: 1, name: "Laptop", price: 35000 },
        { id: 2, name: "Headphones", price: 3500 },
        { id: 3, name: "Mouse", price: 1000 },
        { id: 4, name: "Keyboard", price: 2000 }
    ]
    return (
        // <div>
        //     {products.map((product, index) => {
        //         return <li key={index}>{product}</li>
        //     })}
        // </div>

        <div>
            {
                productList.map((product)=>{
                    return <li key={product.id}>{product.name} : {product.price}</li>
                })
            }
        </div>
    )
}

export default Products  