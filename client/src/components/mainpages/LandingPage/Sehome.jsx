import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import swal from 'sweetalert'
import "./sehome.css";
import Sehomeimg from "../../assets/images/SEphoto.png"
import Sli1 from "../../assets/images/sli1.png"
import Sli2 from "../../assets/images/sli2.png"
import Sli3 from "../../assets/images/sli3.png"
import Sli4 from "../../assets/images/sli4.png"



function Sehome(){

  const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        swal({
            title: "Done!",
            text: "You are now loged out.!",
            icon: "info",
            button: false
        })
        .then((value) => {
            swal(window.location.href = "/");
        });

    }

    const loggedRouter = () =>{
      return(
          <>
              <a className='selog-btn' to="/" onClick={logoutUser}>⟲ Logout</a>
          </>
      )
  }

  return(

    <div id='myInfoavailable'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
      <section className="Sehome">
        <div className="se-anime-back">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

      <div className="SeNeonText-tltlebox" data-aos="slide-up">
        <div className="Se-Lightbar"></div>
        <div className="Se-toplayer"></div>
      <h2>➷ The Sri Lanka's Best ⦁<br/><span>⟿ E - sinhala Platform ⟿</span></h2><br/>
      </div>
        
      <div className="SEconteudo-main">
        <div className="SEconteudo" data-aos="zoom-in-up">
          <div className="Secarrousel">

              <div className="Secarrousel-img">
                <a href="https://www.youtube.com/@ayannakiyanna2242"><img src={Sli1} alt="" /></a>
                <h2></h2>
                </div>

              <div className="Secarrousel-img">
                <a><img src={Sli2} alt="" /></a>
                <h2></h2>
                </div>

              <div className="Secarrousel-img">
                <a><img src={Sli3} alt="" /></a>
                <h2></h2>
                </div>

              <div className="Secarrousel-img">
                <a><img src={Sli4} alt="" /></a>
                <h2></h2>
                </div>

              <div className="Secarrousel-img">
                <a><img src={Sli2} alt="" /></a>
                <h2></h2>
                </div>

              <div className="Secarrousel-img">
                <a><img src={Sli1} alt="" /></a>
                <h2></h2>
                </div>

          </div>
        </div>
        </div>


            <div className="scontent" data-aos="slide-up">

                <a href='#IACid'><div className='Sehome-largeimage-container-anime'>
              
                  <div className="Sehome-largeimage-container">
                    <img src={Sehomeimg} alt="" />
                    <img src={Sehomeimg} alt="" />
                    <img src={Sehomeimg} alt="" />
                    <img src={Sehomeimg} alt="" />
                  </div>

                </div></a>

                <div className="Sinfo-mainmy-box">
                  <div>
                  <div className="sinfo">
                      <p> “අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය. සිංහල විෂය සාධන මට්ටම ඉහළ දැමීම මෙන් ම ළමා මණසෙහි සියුම් වූ වේදයිතයන් අවදිකර රසවින්දනයෙන් පෝෂිත සමාජයක් බිහිකරලීම මෙම සඟරාව කිරීමෙහි මූලික අභිලාෂයයි.
                      </p>
                  </div>

                    <div className="Selogbtn_main-box">

                      <a href="#IACid" className="selog-btn" id='tohidephone'>⛚ Info Menu</a>

                      {
                      isLogged ? loggedRouter() : <a className="selog-btn" href="/login">➥ Login - Sign Up</a>
                      }

                    </div>

                  </div>

                  
                  <div className='SE2nddotslider'>

                    <input type="radio" id="trigger1" name="mysliderr" autoFocus/>
                    <label className='sradiolbl' for="trigger1"></label>
                    <div className='s2ndslideimg sbg1'></div>

                    <input type="radio" id="trigger2" name="mysliderr" />
                    <label className='sradiolbl' for="trigger2"></label>
                    <div className='s2ndslideimg sbg2'></div>

                    <input type="radio" id="trigger3" name="mysliderr"/>
                    <label className='sradiolbl' for="trigger3"></label>
                    <div className='s2ndslideimg sbg3'></div>

                    <input type="radio" id="trigger4" name="mysliderr"/>
                    <label className='sradiolbl' for="trigger4"></label>
                    <div className='s2ndslideimg sbg4'></div>

                    <input type="radio" id="trigger5" name="mysliderr"/>
                    <label className='sradiolbl' for="trigger5"></label>

                  </div>
                  
                </div>
                
                  
            </div>

            

          <div className="info-Awsome-container" id='IACid'>

          <div className="Semenutitlebox" data-aos="slide-right">
              <h2>❱❱ හරහා ගොස් ගවේෂණය කරන්න.. ❱❱</h2>
            </div>

            <div className="info-Awsome-container-card" data-aos="fade-up-right">
              <div className="info-Awsome-container-imgbx" data-text="Home">
              <i class="fa-solid fa-house-laptop"></i>
              </div>
              <div className="info-Awsome-container-content">
                <div>
                  <h3>Home</h3>
                  <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                     නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූය.</p>
                  <a href="#">Let's Go</a>
                </div>
              </div>
            </div>

            <div className="info-Awsome-container-card" data-aos="fade-up">
              <div className="info-Awsome-container-imgbx" data-text="About">
              <i class="fa-regular fa-address-card"></i>
              </div>
              <div className="info-Awsome-container-content">
                <div>
                  <h3>About</h3>
                  <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                     නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූය.</p>
                  <a href="#">Let's Go</a>
                </div>
              </div>
            </div>

            <div className="info-Awsome-container-card" data-aos="fade-up-left">
              <div className="info-Awsome-container-imgbx" data-text="Info">
              <i class="fa-solid fa-circle-info"></i>
              </div>
              <div className="info-Awsome-container-content">
                <div>
                  <h3>Info</h3>
                  <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                     නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූය.</p>
                  <a href="#">Let's Go</a>
                </div>
              </div>
            </div>

            <div className="info-Awsome-container-card" data-aos="fade-up-right">
              <div className="info-Awsome-container-imgbx" data-text="Services">
              <i class="fa-solid fa-book"></i>
              </div>
              <div className="info-Awsome-container-content">
                <div>
                  <h3>Services</h3>
                  <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                     නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූය.</p>
                  <a href="#">Let's Go</a>
                </div>
              </div>
            </div>

            <div className="info-Awsome-container-card" data-aos="fade-up">
              <div className="info-Awsome-container-imgbx" data-text="ForYou">
              <i class="fa-sharp fa-solid fa-feather-pointed"></i>
              </div>
              <div className="info-Awsome-container-content">
                <div>
                  <h3>For-You</h3>
                  <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                     නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූය.</p>
                  <a href="#">Let's Go</a>
                </div>
              </div>
            </div>

            <div className="info-Awsome-container-card" data-aos="fade-up-left">
              <div className="info-Awsome-container-imgbx" data-text="Contact">
              <i class="fa-solid fa-square-phone-flip"></i>
              </div>
              <div className="info-Awsome-container-content">
                <div>
                  <h3>Contact</h3>
                  <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                     නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූය.</p>
                  <a href="#">Let's Go</a>
                </div>
              </div>
            </div>

          </div>  

            


            <div className="smedia-icons">
                <a href="https://www.facebook.com/profile.php?id=100066826185077"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.youtube.com/@ayannakiyanna2242/videos"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>




        </section> 
    </div>
  );
}
export default Sehome