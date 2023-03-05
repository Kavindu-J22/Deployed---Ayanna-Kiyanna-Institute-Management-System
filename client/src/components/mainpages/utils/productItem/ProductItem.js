import React from 'react'
import BtnRender from './BtnRender'

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    return (
        <div className="product_card" data-aos="zoom-in-up">
            <div className='N-productBox'>
                <span></span>
                <div className='N-product-Content'>

                    {
                    isAdmin && <input type="checkbox" checked={product.checked}
                    onChange={() => handleCheck(product._id)} />
                    }
                    <img src={product.images.url} alt="" />
                    
                    <div className="product_box">
                    <h2 title={product.title}>{product.title}</h2>
                    <h3>(Part/Rs):-{product.price}</h3>
                    <p>{product.description}</p>
                    </div>

                    <BtnRender product={product} deleteProduct={deleteProduct} />

                </div>
            </div>

            {/* <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>(Part/Rs):-{product.price}</span>
                <p>{product.description}</p>
            </div>

            
            <BtnRender product={product} deleteProduct={deleteProduct} /> */}
        </div>
    )
}

export default ProductItem
