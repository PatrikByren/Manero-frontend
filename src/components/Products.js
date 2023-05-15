import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://manero.azurewebsites.net/api/product')
            .then(response => {
                console.log(response.data);  // för att se vad response.data innehåller
                setProducts(response.data.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div className='d-inline-flex p-2'>
            {products.map((product, index) => (
                <div key={index}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p>{product.type}</p>
                    <p>{product.tags}</p>
                    <h3>Variants</h3>
                    {product.variants.map((variant, variantIndex) => (
                        <div key={variantIndex}>
                              <img src={variant.imageName} alt={variant.imageAlt} style={{height: '200px'}}/>
                            <p>{variant.sku}</p> {/* Anpassa till rätt egenskap för variant */}
                            <p>{variant.price}</p> 
                            <p>{variant.color}</p> 
                            <p>{variant.size}</p> 
                            <p>{variant.stock}</p> 
                            
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Products;
