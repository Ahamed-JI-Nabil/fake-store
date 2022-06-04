import './AllProducts.css'
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../SingleProduct/SingleProduct';

const AllProducts = (props) => {

    const { setCartCount } = props
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className="row container">
            {
                product.map(pd => (
                    <SingleProduct setCartCount={setCartCount} key={pd.id} products={pd}></SingleProduct>
                ))
            }

        </div>
    );
};

export default AllProducts;