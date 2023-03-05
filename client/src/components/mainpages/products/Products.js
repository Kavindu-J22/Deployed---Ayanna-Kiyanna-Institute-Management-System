import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import Filters from './Filters'
import LoadMore from './LoadMore'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }

    if(loading) return <div><Loading /></div>
    return (
        <div className='main-product-box' id='foryouBoxesavailable'>
        <div id='foryouDiv'>
            <div className='product-text-card' data-aos="fadeInUp">
                <h1>✥ අයන්න කියන්න - ඔබ සඳහා වෙන්වූ විශේෂිත විශේෂාංග</h1>
                <h4>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.
                “අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.
                </h4>
            </div>
            <Filters />
            
            
            {
                isAdmin && 
                <div className="delete-all">
                    <span>Select all</span>
                    <input type="checkbox" checked={isCheck} onChange={checkAll} />
                    <button onClick={deleteAll}>Delete ALL</button>
                </div>
            }

            <div className="products" data-aos="fadeInUp">
                {
                    products.map(product => {
                        return <ProductItem key={product._id} product={product}
                        isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                    })
                } 
            </div>

            <LoadMore />
            {products.length === 0 && <Loading />}
            </div>
            
        </div> 
    )
}

export default Products
