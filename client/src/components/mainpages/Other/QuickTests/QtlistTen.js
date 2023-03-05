import React from 'react'
import { Link } from "react-router-dom";
import Staklogo from '../../../assets/images/AKlogo.png'
import backbtnmy from '../../../assets/images/B.png'

function QtTen() {

    return (

            <div className="ThrPart-main-box" id='OEmain_box'>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<div className='AkstableLogo'><Link to="/"><img src={Staklogo}></img></Link></div>
<div className='MainBackbtnmy' onClick={() => window.history.back()}><img src={backbtnmy}></img></div>

    <div className='TPart-container'>

            <div className='v-text-container OETextcont'>
                <h1>✥  Speed Test List </h1>
                <h2>Grade 10</h2>
            </div>

            
                <div className='TP-Drop OE-Drop'>
                    <div className='TP-Drop_content' id='OeEX1'>
                        <h2>01</h2>
                        <h3 id='OEh3'>RAM 1</h3>
                        <Link to="#">Attempt</Link>
                    </div>   
                </div>
                

            <div className='TP-Drop OE-Drop'>
                <div className='TP-Drop_content' id='OeEX2'>
                    <h2>02</h2>
                    <h3 id='OEh3'>RAM 2</h3>
                    <Link to="#">Attempt</Link>
                </div>
            </div>

            <div className='TP-Drop OE-Drop'>
                <div className='TP-Drop_content' id='OeEX3'>
                    <h2>03</h2>
                    <h3 id='OEh3'>RAM 3</h3>
                    <Link to="#">Attempt</Link>
                </div>
            </div>

            <div className='TP-Drop OE-Drop'>
                <div className='TP-Drop_content' id='OeEX4'>
                    <h2>04</h2>
                    <h3 id='OEh3'>RAM 4</h3>
                    <Link to="#">Attempt</Link>
                </div>
            </div>

            <div className='TP-Drop OE-Drop'>
                <div className='TP-Drop_content' id='OeEX5'>
                    <h2>05</h2>
                    <h3 id='OEh3'>RAM 5</h3>
                    <Link to="#">Attempt</Link>
                </div>
            </div>
        
    </div>

</div>
            
    )
}

export default QtTen