import React from 'react'

import './productList.css'
import Product from '../product/Product'
import { products } from '../../data'

function ProductList() {
  return (
    <div className="productList">
        <div className="productList-text">
            <h1 className="productList-title">Create & inspire. It's Lama</h1>
            <p className="productList-desc">
                Lama is a creative portfolio that your work has been waiting for.
                Beautiful homes, stunning portfolio styles & a whole lot more awaits
                inside.
            </p>
        </div>
        <div className="productList-list">
            {
                products.map(product => (
                    <Product key={product.id} img={product.img} link={product.link}/>
                ))
            }
        </div>
    </div>
  )
}

export default ProductList