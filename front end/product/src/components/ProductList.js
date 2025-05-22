import { useEffect, useState } from "react";

import api from "../api";

function ProductList(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products')
        .then(res => setProducts(res.data))
        .catch(err => console.error(err));
        
    }, []);


    return (
        <div>
            <h1>Product list</h1>
            {products.length === 0 ? (
                <p>No products fount</p>
            ) : (
                <ul>{products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                    </li>
                ))}</ul>
            )}
        </div>
    );
}

export default ProductList;