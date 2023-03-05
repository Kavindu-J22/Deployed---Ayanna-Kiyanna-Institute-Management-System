import React from "react";
import "./about.css";
import Ayanna from "../../assets/images/Ayanna.png"
import Abt1 from "../../assets/images/Abt1.png"
import Abt2 from "../../assets/images/Abt2.png"
import Abt3 from "../../assets/images/Abt3.png"
import ProgressBar from "./ProgressBar";

function About(){

  return(

    <div>
      <section class="about" id="downfristabout">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 

            <div class="about-main" data-aos="slide-up">
                <div><img class="image-About" src={Ayanna} alt=""/></div>
                <div class="about-text">
                    <h1>අප ගැන යමක්..</h1>
                    <h5>ලෝබ නැතුව සතර බෙදන අසිරිමත් <br/>බුද්ධි මෙහෙවර..!</h5>
                    <p> “අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය. සිංහල විෂය සාධන මට්ටම ඉහළ දැමීම මෙන් ම ළමා මණසෙහි සියුම් වූ වේදයිතයන් අවදිකර රසවින්දනයෙන් පෝෂිත සමාජයක් බිහිකරලීම මෙම සඟරාව කිරීමෙහි මූලික අභිලාෂයයි.</p>
                    
                    <a href="#">
                    <button className="Abt-btn" type="button">Join With Us</button>
                    </a>

                    <a href="#">
                        <button className="Abt-btn" type="button">More About</button>
                    </a>
                    
                </div>
            </div>
          

          

          <div className="About-Card-container" data-aos="slide-up">
            <div className="About-card">
                <div className="About-imgbx">
                    <img src={Abt1} alt="" />
                </div>
                <div className="About-card-content" >
                      <h3>Our Vishion</h3>
                      <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව 
                        තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් 
                        දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                </div>
            </div>
            <div className="About-card">
                <div className="About-imgbx">
                    <img src={Abt2} alt="" />
                </div>
                <div className="About-card-content">
                      <h3>Our Mishion</h3>
                      <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව
                         තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන්
                          දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                </div>
            </div>
            <div className="About-card">
                <div className="About-imgbx">
                    <img src={Abt3} alt="" />
                </div>
                <div className="About-card-content">
                      <h3>Our Goals</h3>
                      <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව
                         තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන්
                          දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                </div>
            </div>

          </div>

        </section> 

        <div>
          <ProgressBar/>
        </div>

    </div>
  );
}
export default About
 