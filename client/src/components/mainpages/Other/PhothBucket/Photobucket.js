import React from 'react'
import { Link } from "react-router-dom";
import Staklogo from '../../../assets/images/AKlogo.png'
import backbtnmy from '../../../assets/images/B.png'


function PhotoBucket() {

    return (
        

            <div className="AksharaMalawa-main-box">
   
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className='AkstableLogo'><Link to="/"><img src={Staklogo}></img></Link></div>
            <div className='MainBackbtnmy' onClick={() => window.history.back()}><img src={backbtnmy}></img></div>

            <section className='v-section'>
                    <div className='v-text-container'>
                        <h1>✥ අයන්න කියන්න - Photo bucket </h1>
                        <h4>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</h4>
                    </div>
                    <div className='v-cards'>
                        <div className='v-text-card'>
                            <div className='v-content '>
                                <h2>01</h2>
                                
                                <h3>සිංහල මහා සම්මන්ත්‍රණය</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a className='v-link' href="https://drive.google.com/drive/folders/1aJkGz7F9pcbugQ8Fei17ciRywQI4igjk?usp=sharing">Explore</a>
                            </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>02</h2>
                                
                                <h3>our classes</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a className='v-link' href="https://drive.google.com/drive/folders/1_gnQhXpGlr1I5J31Zbwgx6J-bMZHVEKi?usp=sharing">Explore</a>
                                </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>03</h2>
                                
                                <h3>our events</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a className='v-link' href="https://drive.google.com/drive/folders/1n2zZ8U5Bu44w9nPv68oHJo1vUyCvWIu-?usp=sharing">Explore</a>
                                </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>04</h2>
                                
                                <h3>other photos</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමට.</h5>   
                                <a className='v-link' href="https://drive.google.com/drive/folders/1sCuYa3rA-eJIJ6b1FV8o56Jy7ZweZfMd?usp=sharing">Explore</a>
                                </div>
                        </div>

                    </div>
                
            </section>
            
            </div>
            
    )
}

export default PhotoBucket