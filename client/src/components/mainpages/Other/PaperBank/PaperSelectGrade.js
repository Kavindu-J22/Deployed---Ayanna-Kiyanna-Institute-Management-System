import React from 'react'
import { Link } from "react-router-dom";
import Staklogo from '../../../assets/images/AKlogo.png'
import backbtnmy from '../../../assets/images/B.png'


function PselectGrade() {

    return (

            <div className="SecPart-main-box">

             <div className='AkstableLogo'><Link to="/"><img src={Staklogo} alt="AyannaKiyanna"></img></Link></div>
            <div className='MainBackbtnmy' onClick={() => window.history.back()}><img src={backbtnmy}></img></div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            

                <div className='G-container'>
                    <div className='v-text-container'>
                        <h1>✥ Paper Bank ✥</h1>
                        <h2> සිංහල භාෂාව හා සාහිත්‍යය </h2>
                    </div> 

                        <div className='G-gcard'>
                        <Link to="#">
                            <div className='G-icon'><i>09</i></div>
                            <div className='G-Content'>
                                <h3>9 ශ්‍රේණිය</h3>
                                <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                            </div>   
                        </Link>
                        </div>
                        

                        <div className='G-gcard'>
                        <Link to="#">
                            <div className='G-icon'><i>10</i></div>
                            <div className='G-Content'>
                                <h3>10 ශ්‍රේණිය</h3>
                                <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                            </div>
                        </Link>
                        </div>
                        <div className='G-gcard'>
                        <Link to="#">
                            <div className='G-icon'><i>11</i></div>
                            <div className='G-Content'>
                                <h3>11 ශ්‍රේණිය</h3>
                                <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                            </div>
                        </Link>
                        </div>
                        <div className='G-gcard'>
                        <Link to="#">
                            <div className='G-icon'><i>A/L</i></div>
                            <div className='G-Content'>
                                <h3>A/L</h3>
                                <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                            </div>
                        </Link>
                        </div>
                </div>
                
            

        </div>
            
    )
}

export default PselectGrade