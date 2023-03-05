import React from 'react'
import { Link } from "react-router-dom";
import Staklogo from '../../../assets/images/AKlogo.png'
import backbtnmy from '../../../assets/images/B.png'


function Natya() {

    return (

            

            <div className="SecPart-main-box">

             <div className='AkstableLogo'><Link to="/"><img src={Staklogo} alt="AyannaKiyanna"></img></Link></div>
            <div className='MainBackbtnmy' onClick={() => window.history.back()}><img src={backbtnmy}></img></div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            

                <div className='G-container'>
                    <div className='v-text-container'>
                        <h1>✥ නාට්‍ය </h1>
                        <h4>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය. .නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</h4>
                    </div> 

                        <div className='G-gcard'>
                        <Link to="#">
                            <div className='G-icon'><i class="fa-brands fa-pied-piper-alt"></i></div>
                            <div className='G-Content'>
                                <h3>ලෝක ධර්මී නාට්‍ය</h3>
                                <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී ය.</p>
                            </div>   
                        </Link>
                        </div>

                    <div></div><div></div>

                        <div className='G-gcard'>
                        <Link to="#">
                            <div className='G-icon'><i class="fa-solid fa-masks-theater"></i></div>
                            <div className='G-Content'>
                                <h3>නාට්‍ය ධර්මී නාට්‍ය</h3>
                                <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී ය.</p>
                            </div>
                        </Link>
                        </div>
                </div>
                
            

        </div>
            
    )
}

export default Natya