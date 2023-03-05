import React from 'react'
import { Link } from "react-router-dom";
import "./nuthanagadya.css"
import Staklogo from '../../../assets/images/AKlogo.png'
import backbtnmy from '../../../assets/images/B.png'


function Nuthanagadya() {

    return (
        <div className="ThrPart-main-box">

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className='AkstableLogo'><Link to="/"><img src={Staklogo}></img></Link></div>
            <div className='MainBackbtnmy' onClick={() => window.history.back()}><img src={backbtnmy}></img></div>

                <div className='TPart-container'>

                        <div className='v-text-container' id='TP-Text-Container'>
                            <h1>✥ නූතන ගද්‍ය </h1>
                            <h4>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</h4>
                        </div>

                        
                            <div className='TP-Drop'>
                                <div className='TP-Drop_content'>
                                    <h2>01</h2>
                                    <h3>කෙටිකතා</h3>
                                    <Link to="#">Explore</Link>
                                </div>   
                            </div>
                            

                        <div className='TP-Drop'>
                            <div className='TP-Drop_content'>
                                <h2>02</h2>
                                <h3>නවකතා</h3>
                                <Link to="#">Explore</Link>
                            </div>
                        </div>
                    
                </div>
            
            </div>
    )
}

export default Nuthanagadya