import React from 'react'
import './boxes.css'
import {Link} from 'react-scroll'


function Boxes() {

    return (
        <div className="main-box" id='serviceboxesavailable'>
            <section className='B-section' id='vvvv001'>
                <div className='B-container' data-aos="zoom-in-up">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <h1>- අපගේ සේවාවන් -</h1>
                <div className='B-section-newupbtns'>
                    <Link to="vvvv001" smooth={true} offset={10} duration={500}><span></span><span></span><span></span><span></span><i class="fa-solid fa-book"></i>විෂය සමගාමි</Link>
                    <Link to='vvvv002' smooth={true} offset={10} duration={500}><span></span><span></span><span></span><span></span><i class="fa-solid fa-paperclip"></i>පරීක්ෂණාත්මක</Link>
                    <Link to='vvvv003' smooth={true} offset={10} duration={500}><span></span><span></span><span></span><span></span><i class="fa-solid fa-star"></i>වැදගත් විශේෂාංග</Link>
                    <Link to='vvvv004' smooth={true} offset={10} duration={500}><span></span><span></span><span></span><span></span><i class="fa-solid fa-person-booth"></i>වෙනත් විශේෂාංග</Link>
                    <Link to='vvvv005' smooth={true} offset={10} duration={500}><span></span><span></span><span></span><span></span><i class="fa-solid fa-building-columns"></i>Institute information</Link>
                    <Link to='vvvv006' smooth={true} offset={10} duration={500}><span></span><span></span><span></span><span></span><i class="fa-solid fa-user-graduate"></i>ශ්‍රේණියේ අනුව</Link>
                </div>

                    <h2>✥ විෂය සමගාමි ✥</h2>
                    <div className='B-cards'>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>ව්‍යාකරණ</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. </p>
                            <a href="/boxes/viyabox">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>  
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>සාහිත්‍ය</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/litbox">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>අක්ෂර මාලාව</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/AksharaMalawa">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='B-section' id='vvvv002'>
                <div className='B-container' data-aos="zoom-in-up">
                    <h2>✥ පරීක්ෂණාත්මක ✥</h2>
                    <div className='B-cards'>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Paper Bank</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/Paperbank">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Online Exams</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/OnlineExams">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Speed Tests</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/Qtgrade">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className='B-section-newupbtns-sidemenu'>
                        <ul>
                            <Link to='vvvv001' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="විෂය සමගාමි"> 
                            <i class="fa-solid fa-book"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv002' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' id='activatevbbb' data-text="පරීක්ෂණාත්මක">
                            <i class="fa-solid fa-paperclip"></i>    
                            </li>
                            </Link>

                            <Link to='vvvv003' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="වැදගත් විශේෂාංග">
                            <i class="fa-solid fa-star"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv004' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="වෙනත් විශේෂාංග">
                            <i class="fa-solid fa-person-booth"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv005' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="Institute Related information">
                            <i class="fa-solid fa-building-columns"></i>
                            </li>
                            </Link>

                            <Link to='vvvv006' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="ශ්‍රේණියේ අනුව අධ්‍යයනය කරන්න">
                            <i class="fa-solid fa-user-graduate"></i>
                            </li>
                            </Link>
                            
                        </ul>
                    </div>

                </div>
            </section>

            <section className='B-section' id='vvvv003'>
                <div className='B-container' data-aos="zoom-in-up">
                    <h2>✥ වැදගත් විශේෂාංග ✥</h2>
                    <div className='B-cards'>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>අයන්න කියන්න<br/>E-Magazine</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/Emagazine">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>විචාර හා ගී<br/>රසවින්දන</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/Rasavindana">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>විෂය නිර්දේශ සහ ගුරු අත් පොත්</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/TeacherBook">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className='B-section-newupbtns-sidemenu'>
                        <ul>
                        <Link to='vvvv001' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="විෂය සමගාමි">   
                            <i class="fa-solid fa-book"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv002' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="පරීක්ෂණාත්මක">
                            <i class="fa-solid fa-paperclip"></i>    
                            </li>
                            </Link>

                            <Link to='vvvv003' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' id='activatevbbb' data-text="වැදගත් විශේෂාංග">
                            <i class="fa-solid fa-star"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv004' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="වෙනත් විශේෂාංග">
                            <i class="fa-solid fa-person-booth"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv005' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="Institute Related information">
                            <i class="fa-solid fa-building-columns"></i>
                            </li>
                            </Link>

                            <Link to='vvvv006' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="ශ්‍රේණියේ අනුව අධ්‍යයනය කරන්න">
                            <i class="fa-solid fa-user-graduate"></i>
                            </li>
                            </Link>
                            
                        </ul>
                    </div>

                </div>
            </section>

            <section className='B-section' id='vvvv004'>
                <div className='B-container' data-aos="zoom-in-up">
                    <h2>✥ වෙනත් විශේෂාංග ✥</h2>
                    <div className='B-cards'>
                        <span></span>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>වීඩියෝ පාඩම්</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/VideoLessons">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Paper Structures</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/PaperStructures">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Others</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/SpeOthers">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className='B-section-newupbtns-sidemenu'>
                        <ul>
                        <Link to='vvvv001' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="විෂය සමගාමි">   
                            <i class="fa-solid fa-book"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv002' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="පරීක්ෂණාත්මක">
                            <i class="fa-solid fa-paperclip"></i>    
                            </li>
                            </Link>

                            <Link to='vvvv003' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="වැදගත් විශේෂාංග">
                            <i class="fa-solid fa-star"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv004' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' id='activatevbbb' data-text="වෙනත් විශේෂාංග">
                            <i class="fa-solid fa-person-booth"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv005' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="Institute Related information">
                            <i class="fa-solid fa-building-columns"></i>
                            </li>
                            </Link>

                            <Link to='vvvv006' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="ශ්‍රේණියේ අනුව අධ්‍යයනය කරන්න">
                            <i class="fa-solid fa-user-graduate"></i>
                            </li>
                            </Link>
                            
                        </ul>
                    </div>

                </div>
            </section>

            <section className='B-section' id='vvvv005'>
                <div className='B-container' data-aos="flip-up">
                    <h2>✥ Institute Related information ✥</h2>
                    <div className='B-cards'>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Academic Information</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/ClassDetails">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Extracurricular Infomation</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/StudentColors">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Photo<br/>Bucket</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/PhotoBucket">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className='B-section-newupbtns-sidemenu'>
                        <ul>
                        <Link to='vvvv001' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="විෂය සමගාමි">   
                            <i class="fa-solid fa-book"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv002' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="පරීක්ෂණාත්මක">
                            <i class="fa-solid fa-paperclip"></i>    
                            </li>
                            </Link>

                            <Link to='vvvv003' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="වැදගත් විශේෂාංග">
                            <i class="fa-solid fa-star"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv004' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="වෙනත් විශේෂාංග">
                            <i class="fa-solid fa-person-booth"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv005' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' id='activatevbbb' data-text="Institute Related information">
                            <i class="fa-solid fa-building-columns"></i>
                            </li>
                            </Link>

                            <Link to='vvvv006' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="ශ්‍රේණියේ අනුව අධ්‍යයනය කරන්න">
                            <i class="fa-solid fa-user-graduate"></i>
                            </li>
                            </Link>
                            
                        </ul>
                    </div>

                </div>
            </section>


            <section className='B-section' id='vvvv006'>
                <div className='B-container' data-aos="zoom-in-up">
                    <h2>✥ ශ්‍රේණියේ අනුව අධ්‍යයනය කරන්න ✥</h2>
                    <div className='B-cards'>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>9 ශ්‍රේණිය</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/MainGradeNine">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>10 ශ්‍රේණිය</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/MainGradeTen">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>11 ශ්‍රේණිය</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/MainGradeEleven">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>A/L</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/MainGradeAL">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>සිංහල සාහිත්‍යය<br/>(කාණ්ඩ විෂය)</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <a href="/boxes/MainGradeLit">
                                <a class="B-button" type="submit">See More</a>
                            </a>
                            </div>
                        </div>

                        <div className='B-section-newupbtns-sidemenu'>
                        <ul>
                        <Link to='vvvv001' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="විෂය සමගාමි">   
                            <i class="fa-solid fa-book"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv002' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="පරීක්ෂණාත්මක">
                            <i class="fa-solid fa-paperclip"></i>    
                            </li>
                            </Link>

                            <Link to='vvvv003' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="වැදගත් විශේෂාංග">
                            <i class="fa-solid fa-star"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv004' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="වෙනත් විශේෂාංග">
                            <i class="fa-solid fa-person-booth"></i> 
                            </li>
                            </Link>

                            <Link to='vvvv005' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' data-text="Institute Related information">
                            <i class="fa-solid fa-building-columns"></i>
                            </li>
                            </Link>

                            <Link to='vvvv006' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' id='activatevbbb' data-text="ශ්‍රේණියේ අනුව අධ්‍යයනය කරන්න">
                            <i class="fa-solid fa-user-graduate"></i>
                            </li>
                            </Link>

                            <Link to='foryouDiv' smooth={true} offset={10} duration={500}>
                            <li className='newB-section-sidemenu-list' id='nextgotonextinboxes' data-text="ඊළඟ පිටුවට ➷">
                            <i class="fa-solid fa-download"></i>
                            </li>
                            </Link>
                        </ul>
                    </div>
                    </div>
                    

                </div>

            </section>
            
        </div>
    )
}

export default Boxes