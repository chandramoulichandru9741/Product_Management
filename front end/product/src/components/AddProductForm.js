import React, {useState} from "react";
import api from "../api";

const AddProductForm = () => {
    const [product, setProducts] = useState({name : '', quantity: '', price : ''});

    const handleChange = e => {
        setProducts({ ...product, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        api.post('/addProduct', product)
            .then(res => {
                alert('Product added!');
                setProducts({name:'', quantity:'', price:''});
            })
            .catch(err => console.error(err));
    };


    return(
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" required/>
                <input type="number" name="quantity" value={product.quantity} onChange={handleChange} placeholder="Quantity" required />
                <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddProductForm;