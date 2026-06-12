import React, { useState, useMemo } from 'react';

const productsData = [
    {
        productId: 1,
        productName: 'Laptop'
    },
    {
        productId: 2,
        productName: 'Samsung'
    },
    {
        productId: 3,
        productName: 'Television'
    },
    {
        productId: 4,
        productName: 'Cooler'
    },
    {
        productId: 5,
        productName: 'Washing Machine'
    },
];

const ProductsScreen = () => {

    const [products, setProducts] = useState(productsData);
    const [search, setSearch] = useState("");
    const [email, setEmail] = useState("");
    const [headerText, setHeaderText] = useState("Products Screen");

    // Yeh performance ka masla kr raha hy...!
    // const filteredProducts = products.filter((item, index) => {
    //     console.log('Product is filtering');
    //     return item.productName.toLowerCase().includes(search.toLowerCase());
    // });

    // Solution
    const filteredProducts = useMemo(() => {
        console.log('Product is filtering!!!');
        return products.filter((item, index) => item.productName.toLowerCase().includes(search.toLowerCase()));
    }, [products, search]);

    return (
        <div>
            <input
                type="email"
                placeholder='abc@xyz.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <h1> {headerText} </h1>

            <input
                type="text"
                placeholder='Search Product'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {
                    filteredProducts.map((item, index) => {
                        return <li key={item.productId}> {item.productName} </li>
                    })
                }
            </ul>
        </div>
    );
};

export default ProductsScreen;