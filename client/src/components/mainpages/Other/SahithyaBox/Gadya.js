import React from 'react'
import { Link } from "react-router-dom";
import "./gadya.css"
import Staklogo from '../../../assets/images/AKlogo.png'
import backbtnmy from '../../../assets/images/B.png'


function Gadya() {

    return (
        <div className="SecPart-main-box">

             <div className='AkstableLogo'><Link to="/"><img src={Staklogo} alt="AyannaKiyanna"></img></Link></div>
            <div className='MainBackbtnmy' onClick={() => window.history.back()}><img src={backbtnmy}></img></div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            

                <div className='G-container'>
                    <div className='v-text-container'>
                        <h1>✥ ගද්‍ය </h1>
                        <h4>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය. .නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</h4>
                    </div> 

                        <div className='G-gcard'>
                        <a href="https://drive.google.com/drive/folders/1LWT8kC5dXBVv7wjkH1q_0UOS1K_ZwdxN?usp=sharing">
                            <div className='G-icon'><i class="fa-brands fa-pied-piper-hat"></i></div>
                            <div className='G-Content'>
                                <h3>පුරාතන ගද්‍ය</h3>
                                <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                            </div>   
                        </a>
                        </div>
                        

                        <div className='G-gcard'>
                        <Link to="/gadya/Nuthanagadya">
                            <div className='G-icon'><i class="fa-solid fa-book-open-reader"></i></div>
                            <div className='G-Content'>
                                <h3>නූතන ගද්‍ය</h3>
                                <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                            </div>
                        </Link>
                        </div>
                </div>
                
            

        </div>
    )
}

export default Gadya