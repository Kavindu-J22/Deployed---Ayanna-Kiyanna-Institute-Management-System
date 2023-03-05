import React from 'react'
import { Link } from "react-router-dom";
import Staklogo from '../../../assets/images/AKlogo.png'
import backbtnmy from '../../../assets/images/B.png'

function PaperStructures() {

    return (
    
            <div className="Lit-main-box">
   
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className='AkstableLogo'><Link to="/"><img src={Staklogo}></img></Link></div>
            <div className='MainBackbtnmy' onClick={() => window.history.back()}><img src={backbtnmy}></img></div>

            <section className='v-section'>
                    <div className='v-text-container'>
                        <h1>✥ Paper Structures </h1>
                        <h4>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</h4>
                    </div>
                    <div className='v-cards'>
                        <div className='v-text-card' id='v-text-card-lastitem'>
                            <div className='v-content '>
                                <h2>01</h2>
                                
                                <h3>O/L</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <Link className='v-link' to="#">Explore</Link>
                            </div>
                        </div>

                        <div className='v-text-card' id='v-text-card-lastitem'>
                            <div className='v-content'>
                                <h2>02</h2>
                                
                                <h3>A/L</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <Link className='v-link' to="#">Explore</Link>
                                </div>
                        </div>

                        <div className='v-text-card' id='v-text-card-lastitem'>
                            <div className='v-content'>
                                <h2>02</h2>
                                
                                <h3>සිංහල සාහිත්‍යය (කාණ්ඩ විෂය)</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <Link className='v-link' to="#">Explore</Link>
                                </div>
                        </div>

                    </div>
                
            </section>
            
            </div>
            
    )
}

export default PaperStructures