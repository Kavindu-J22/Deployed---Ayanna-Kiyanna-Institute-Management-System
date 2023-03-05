import React from 'react'
import "./viyabox.css"
import { Link } from "react-router-dom";
import Staklogo from '../../assets/images/AKlogo.png'
import backbtnmy from '../../assets/images/B.png'


function ViyaBox() {

    return (
        <div className="v-main-box">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            
            <section className='v-section'>
            <div className='AkstableLogo'><Link to="/"><img src={Staklogo}></img></Link></div>
            <div className='MainBackbtnmy' onClick={() => window.history.back()}><img src={backbtnmy}></img></div>
            
                    <div className='v-text-container'>
                        <h1>✥ ව්‍යාකරණ </h1>
                        <h4>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</h4>
                    </div>
                    <div className='v-cards'>
                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>01</h2>
                                
                                <h3>පිල්ලම් භාවිතය</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                            </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>02</h2>
                                
                                <h3>නාම පද</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                                </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>03</h2>
                                
                                <h3>ක්‍රියා පද</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                                </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>04</h2>
                                
                                <h3>උක්ත ආඛ්‍යාත පද සම්බන්ධය</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                                </div>
                        </div>

                    </div>
                
            </section>

            <section className='v-section'>
                
                    <div className='v-cards'>
                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>05</h2>
                                
                                <h3>විභක්ති</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                                </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>06</h2>
                                
                                <h3>සන්ධි</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                                </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>07</h2>
                                
                                <h3>සමාස</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                                </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>08</h2>
                                
                                <h3>ප්‍රත්‍යාර්ථ නාම</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                                </div>
                        </div>

                    </div>
                
            </section>

            <section className='v-section'>
                
                    <div className='v-cards'>
                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>09</h2>
                                
                                <h3>අව්‍ය පද හා ප්‍රකෘති</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                                </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>10</h2>
                                
                                <h3>ගල පද හා බහුඅර්ථ</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                                </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>11</h2>
                                
                                <h3>සමාන හා විරුද්ධ පද</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                                </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>12</h2>
                                
                                <h3>ඉඟිවැකි, තනිපද හා වෙනත්</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                                </div>
                        </div>

                    </div>
                
            </section>
            <section className='v-section'>
                
                    <div className='v-cards'>

                        <div className='v-text-card' id='v-text-card-lastitem'>
                            <div className='v-content'>
                                <h2>13</h2>
                                
                                <h3>ශ්‍රේණියේ අනුව හදාරන්න</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <a href='#'>Explore</a>
                                </div>
                        </div>

                    </div>
                
            </section>

            </div>
    )
}

export default ViyaBox