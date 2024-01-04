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
                    <p> “අයන්න කියන්න” අයන්න කියන්න සිංහල ශිල්ප අත්වැල 2007 වසරේ සිට ආරම්භ වූයේ ප්‍රවීණ විද්‍යා දේශක පද්මකුමාර ජයසිංහයන්ගේ රුවන්වැල්ල මානව උසස් අධ්‍යාපන ආයතනයෙනි. එදා මෙදා තුර පුරා වසර 18ක පමණ කාලයක් තිස්සේ ලෝභ නැතිව සිංහල දැනුම බෙදන්නට අප උත්සුක වුනෙමු. “සිංහල සාර සංග්‍රහය”, “අයන්න කියන්න සිංහල සඟරාව”, “අයන්න කියන්න සිංහල මහා සම්මන්ත්‍රණය”, “අයන්න කියන්න වැඩපොත් පෙළ”, “සුහුරු සිංහල අක්ෂර මාලාව”, “අයන්න කියන්න යූ ටියුබ් නාලිකාව” අප ආ ගමන් මගේ පසුකළ තීරණාත්මක සැතපුම් කණු බඳුය. අයන්න කියන්න වෙබ් අඩවිය මුලින් ම නිර්මාණය වූයේ මීට වසර කිහිපයකට උඩ දීය. ඒ www.ayannakiyanna.com නමිනි. විවිධ හේතූන් මත අක්‍රිය ව ගිය එය 2024 වසරේ පටන් www.ayannakiyanna.lk වශයෙන් ක්‍රියාත්මක වෙයි. සිංහල දැනුම් පිපාසිත ශ්‍රී ලාංකේය ගුරු, සිසු පරපුර උදෙසා නිබඳ ව දැනුම ලබන්නට අපි ආරධනා කරමු.</p>
                    
                    <a href="#">
                    <button className="Abt-btn" type="button">Join With Us</button>
                    </a>

                    <a href="/boxes/ClassDetails">
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
                      <p>“අයන්න කියන්න” ශ්‍රී ලංකාවේ හොඳම සිංහල වෙබ් පිටුව බවට පත්වීම අපගේ දැක්මයි.</p>
                </div>
            </div>
            <div className="About-card">
                <div className="About-imgbx">
                    <img src={Abt2} alt="" />
                </div>
                <div className="About-card-content">
                      <h3>Our Mishion</h3>
                      <p>සිංහල විෂයෙහි සෑම අංශයකට ම අයත් දැනුම නිවැරදි ව ඇසිල්ලකින් ලබා දීම අපගේ මෙහෙවරයි.</p>
                </div>
            </div>
            <div className="About-card">
                <div className="About-imgbx">
                    <img src={Abt3} alt="" />
                </div>
                <div className="About-card-content">
                      <h3>Our Goals</h3>
                      <p>“අයන්න කියන්න” නමින් සක්‍රිය වෙබ් අඩවියක් පවත්වාගෙන යාමට අප තුළ වූ අභිලාශය වසර ගණනක සිට දුටු සිහිනයකි. එකම තැනකින් විශ්මිත වූ ඒ සියලු දැනුම ලබන්නට ඔබට ඇති එකම මාවත වන්නේ මෙම  වෙබ් අඩවියයි.</p>
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
 