import React, { useState } from 'react'
import './newSinhalaHodiya.css'
import { Link } from "react-router-dom";
import Staklogo from '../../../assets/images/AKlogo.png'
import backbtnmy from '../../../assets/images/B.png'
import VrnaLet from '../../../assets/images/VranaLet.png'

function NewSinhalaHodiya() {

    // swara letters

    const [showA, setShowA] = useState(false);
    const [showAa, setShowAa] = useState(false);
    const [showAe, setShowAe] = useState(false);
    const [showAee, setShowAee] = useState(false);
    const [showE, setShowE] = useState(false);
    const [showEe, setShowEe] = useState(false);
    const [showU, setShowU] = useState(false);
    const [showUu, setShowUu] = useState(false);
    const [showEru, setShowEru] = useState(false);
    const [showEruu, setShowEruu] = useState(false);
    const [showElu, setShowElu] = useState(false);
    const [showEluu, setShowEluu] = useState(false);
    const [showAea, setShowAea] = useState(false);
    const [showAeae, setShowAeae] = useState(false);
    const [showAeaei, setShowAeaei] = useState(false);
    const [showO, setShowO] = useState(false);
    const [showOo, setShowOo] = useState(false);
    const [showOu, setShowOu] = useState(false);

    //vinjana Lettes

    const [showAn,setShowAn] = useState(false);
    const [showAh,setShowAh] = useState(false);

    const [showKa,setShowKa] = useState(false);
    const [showKha,setShowKha] = useState(false);
    const [showGa,setShowGa] = useState(false);
    const [showGha,setShowGha] = useState(false);
    const [showXha,setShowXha] = useState(false);
    const [showXgha,setShowXgha] = useState(false);

    const [showCa,setShowCa] = useState(false);
    const [showCha,setShowCha] = useState(false);
    const [showJa,setShowJa] = useState(false);
    const [showJha,setShowJha] = useState(false);
    const [showChaha,setShowChaha] = useState(false);
    const [showXJhaha,setShowXJhaha] = useState(false);

    const [showTa,setShowTa] = useState(false);
    const [showTtha,setShowTtha] = useState(false);
    const [showDa,setShowDa] = useState(false);
    const [showDdha,setShowDdha] = useState(false);
    const [showMna,setShowMna] = useState(false);
    const [showMdhaha,setShowMdhaha] = useState(false);

    const [showTha,setShowTha] = useState(false);
    const [showThha,setShowThha] = useState(false);
    const [showTDa,setShowTDa] = useState(false);
    const [showTDdha,setShowTDdha] = useState(false);
    const [showNa,setShowNa] = useState(false);
    const [showdhaha,setShowdhaha] = useState(false);

    const [showPa,setShowPa] = useState(false);
    const [showPha,setShowPha] = useState(false);
    const [showBa,setShowBa] = useState(false);
    const [showBha,setShowBha] = useState(false);
    const [showMa,setShowMa] = useState(false);
    const [showBhaha,setShowBhaha] = useState(false);

    const [showYa,setShowYa] = useState(false);
    const [showRa,setShowRa] = useState(false);
    const [showLa,setShowLa] = useState(false);
    const [showWa,setShowWa] = useState(false);
    const [showSha,setShowSha] = useState(false);
    const [showSsha,setShowSsha] = useState(false);
    const [showSa,setShowSa] = useState(false);
    const [showha,setShowha] = useState(false);
    const [showLLa,setShowLLa] = useState(false);
    const [showFa,setShowFa] = useState(false);

    const [showSwara,setShowSwara] = useState(false);
    const [showViyan,setShowViyan] = useState(false);
    const [showVargak,setShowVargak] = useState(false);

    const [showKantaja,setShowKantaja] = useState(false);
    const [showThaluja,setShowThaluja] = useState(false);
    const [showMurdaja,setShowMurdaja] = useState(false);
    const [showDanthaja,setShowDanthaja] = useState(false);
    const [showOshtaja,setShowOshtaja] = useState(false);
    const [showDwijakshara,setShowDwijakshara] = useState(false);

    const [showLetNotInc,setShowLetNotInc] = useState(false);
    const [showCatNotInc,setShowCatNotInc] = useState(false);

    const [LetterBoxActive,setLetterBoxActive] = useState("Fristbox");

  return (
    <div className='NuthanahodiyaMain'>
        <div className='AkstableLogo'><Link to="/"><img src={Staklogo}></img></Link></div>
            <div className='MainBackbtnmy' onClick={() => window.history.back()}><img src={backbtnmy}></img></div>
        <div className='NuthanahodiyaMain-MAinTitelbox'>
            <h1>❂ නූතන සිංහල වර්ණ මාලාව ❂</h1>
            <h2>- Smart Sinhala Alphabet -</h2>
        </div>
        <div className='mainhodibox'>

          <div>

          {LetterBoxActive === "Fristbox" && <div className='sinhalaAkurumainbox' data-aos="fadeInUp">
               <div className='whatisbox'>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>
                <div className='swaraAkuruMaincontainer'>

                <div className='vargaLableBox'>
                    <h2 onClick={()=>setShowSwara(!showSwara)}>ස්වර</h2>
                </div>
                    <div className='MainSwaraya'>
                        <div className='emtySpaceSwarabox'></div>
                    <div className='swaraAkuruMain'>

                        <div className='AkuruColoms'>

                            <div className='akuruAK' id='swaraAkurahodi'>
                                <div className='akurucontent' onClick={()=>setShowA(!showA)}>
                                    <p>01</p>
                                    <h5 id='hreasSwara'>අ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowAa(!showAa)}>
                                    <p>02</p>
                                    <h5 id='deergaSware'>ආ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowAe(!showAe)}>
                                    <p>03</p>
                                    <h5 id='hreasSwara'>ඇ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowAee(!showAea)}>
                                    <p>04</p>
                                    <h5 id='deergaSware'>ඈ</h5>
                                </div> 
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowE(!showE)}>
                                    <p>05</p>
                                    <h5 id='hreasSwara'>ඉ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowEe(!showEe)}>
                                    <p>06</p>
                                    <h5 id='deergaSware'>ඊ</h5>
                                </div>
                            </div>

                        </div>
                         <div className='AkuruColoms'>

                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowU(!showU)}>
                                    <p>07</p>
                                    <h5 id='hreasSwara'>උ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowUu(!showUu)}>
                                    <p>08</p>
                                    <h5 id='deergaSware'>ඌ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowEru(!showEru)}>
                                    <p>09</p>
                                    <h5 id='hreasSwara'>ඍ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowEruu(!showEruu)}>
                                    <p>10</p>
                                    <h5 id='deergaSware'>ඎ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowElu(!showElu)}>
                                    <p>11</p>
                                    <h5 id='hreasSwara'>ඏ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowEluu(!showEluu)}>
                                    <p>12</p>
                                    <h5 id='deergaSware'>ඐ</h5>
                                </div>
                            </div>

                        </div>
                         <div className='AkuruColoms'>

                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowAea(!showAea)}>
                                    <p>13</p>
                                    <h5 id='hreasSwara'>එ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowAeae(!showAeae)}>
                                    <p>14</p>
                                    <h5 id='deergaSware'>ඒ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowAeaei(!showAeaei)}>
                                    <p>15</p>
                                    <h5 id='deergaSware'>ඓ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowO(!showO)}>
                                    <p>16</p>
                                    <h5 id='hreasSwara'>ඔ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowOo(!showOo)}>
                                    <p>17</p>
                                    <h5 id='deergaSware'>ඕ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowOu(!showOu)}>
                                    <p>18</p>
                                    <h5 id='deergaSware'>ඖ</h5>
                                </div>
                            </div>

                        </div>
                        

                    </div>
                    </div>
                </div>

                <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>

                            <div className='akuruAK' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowAn(!showAn)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowAh(!showAh)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowKa(!showKa)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowKha(!showKha)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowGa(!showGa)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowGha(!showGha)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowXha(!showXha)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowCa(!showCa)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowCha(!showCha)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowJa(!showJa)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowJha(!showJha)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowChaha(!showChaha)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowTa(!showTa)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowTtha(!showTtha)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowDa(!showDa)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowDdha(!showDdha)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMna(!showMna)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowTha(!showTha)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowThha(!showThha)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowTDa(!showTDa)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowTDdha(!showTDdha)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowNa(!showNa)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowPa(!showPa)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowPha(!showPha)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowBa(!showBa)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowBha(!showBha)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMa(!showMa)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>

                                <div className='akuruAK' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowXgha(!showXgha)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowXJhaha(!showXJhaha)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowMdhaha(!showMdhaha)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowdhaha(!showdhaha)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowBhaha(!showBhaha)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                        <div className='akuruAK dvija' id='Dvijaksharabox'>
                            <div className='akurucontent' onClick={()=>setShowDwijakshara(!showDwijakshara)}>
                                            <h5>ද්විජාක්ෂර</h5>
                                        </div>
                            </div>

                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowYa(!showYa)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowRa(!showRa)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLa(!showLa)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowWa(!showWa)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSha(!showSha)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSsha(!showSsha)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSa(!showSa)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK' id='yatamaAkuru' onClick={()=>setShowha(!showha)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLLa(!showLLa)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowFa(!showFa)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>
                    
               </div>
               }

               {LetterBoxActive === "hraswaswaraMainBox" && <div className='hraswaswaraMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>
                    <div className='whatisbox'>
                         <h1>❐ හ්‍රස්ව ස්වර ❐</h1>
                         <p>හ්‍රස්ව ස්වර යනු කෙටි ස්වරයි. උච්චාරණයේ දී ඇදලා නොකියවෙන හෙවත් නෑදෙන ස්වරයි. එක් නිමේෂයක් තුළ උච්චාරණය කළ හැකි මෙම ස්වර මාත්‍රා එකකින් යුතුව කියවේ. මාත්‍රාවක් යනු නිමේෂයක් හෙවත් ඇසිපියක් හෙළීමට හෝ අසුරක් ගැසීමට ගතවන කාලයකි. එබඳු කාල පරාසයක් තුළ කියවෙන ස්වර, හ්‍රස්ව ස්වර නම් වේ. හ්‍රස්ව ස්වර හැඳින්වීමට "ලඝු ස්වර, ලුහු ස්වර"  ("එක් මත් ඇතියේ ලුහු නම්" - සිදත)  යන නම් ද භාවිත කෙරේ. නූතන සිංහල හෝඩියෙහි හ්‍රස්ව ස්වර අටකි. ඒවා පහතින් දැක්වේ.</p>
                    </div>
               <div className='swaraAkuruMaincontainer'>

                         <div className='vargaLableBox'>
                         <h2 onClick={()=>setShowSwara(!showSwara)}>ස්වර</h2>
                         </div>
                         <div className='MainSwaraya'>
                              
                         <div className='swaraAkuruMain'>

                              <div className='AkuruColoms'>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                        <div className='akurucontent' onClick={()=>setShowA(!showA)}>
                                             <p>01</p>
                                             <h5 id='hreasSwara'>අ</h5>
                                        </div>
                                   </div>
                                   </div>

                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>02</p>
                                             <h5 id='deergaSware'>ආ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowAe(!showAe)}>
                                             <p>03</p>
                                             <h5 id='hreasSwara'>ඇ</h5>
                                        </div>
                                   </div></div>

                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>04</p>
                                             <h5 id='deergaSware'>ඈ</h5>
                                        </div> 
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowE(!showE)}>
                                             <p>05</p>
                                             <h5 id='hreasSwara'>ඉ</h5>
                                        </div>
                                   </div></div>

                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>06</p>
                                             <h5 id='deergaSware'>ඊ</h5>
                                        </div>
                                   </div>

                              </div>
                              <div className='AkuruColoms'>

                              <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowU(!showU)}>
                                             <p>07</p>
                                             <h5 id='hreasSwara'>උ</h5>
                                        </div>
                                   </div></div>

                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>08</p>
                                             <h5 id='deergaSware'>ඌ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowEru(!showEru)}>
                                             <p>09</p>
                                             <h5 id='hreasSwara'>ඍ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>10</p>
                                             <h5 id='deergaSware'>ඎ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowElu(!showElu)}>
                                             <p>11</p>
                                             <h5 id='hreasSwara'>ඏ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>12</p>
                                             <h5 id='deergaSware'>ඐ</h5>
                                        </div>
                                   </div>

                              </div>
                              <div className='AkuruColoms'>

                              <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowAea(!showAea)}>
                                             <p>13</p>
                                             <h5 id='hreasSwara'>එ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>14</p>
                                             <h5 id='deergaSware'>ඒ</h5>
                                        </div>
                                   </div>
                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>15</p>
                                             <h5 id='deergaSware'>ඓ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowO(!showO)}>
                                             <p>16</p>
                                             <h5 id='hreasSwara'>ඔ</h5>
                                        </div>
                                   </div></div>

                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>17</p>
                                             <h5 id='deergaSware'>ඕ</h5>
                                        </div>
                                   </div>
                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>18</p>
                                             <h5 id='deergaSware'>ඖ</h5>
                                        </div>
                                   </div>

                              </div>
                              

                         </div>
                         </div>
                         </div>
               </div>

               }

               {LetterBoxActive === "DeergswaswaraMainBox" && <div className='DeergswaswaraMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>
                    <div className='whatisbox'>
                         <h1>❐ දීර්ඝ ස්වර ❐</h1>
                         <p>දීර්ඝ ස්වර යනු දික් ස්වරයි. උච්චාරණයේ දී ඇදලා කියවෙන ස්වරයි. මාත්‍රා දෙකකින් යුතුව මෙම අකුරු උච්චාරණය කෙරේ. "දෙමත් ඇතියේ ගුරු නම්" යනුවෙන් සිදතෙහි දක්වා ඇති පරිදි මෙම ස්වර හැඳින්වීම සඳහා "ගුරු ස්වර" යන නම ද භාවිත කෙරේ. නූතන සිංහල අක්ෂර මාලාවේ දීර්ඝ ස්වර 10කි. මෙහි පහතින් දැක්වෙන්නේ එම ස්වර 10 යි.</p>
                    </div>
               <div className='swaraAkuruMaincontainer'>

                         <div className='vargaLableBox'>
                         <h2 onClick={()=>setShowSwara(!showSwara)}>ස්වර</h2>
                         </div>
                         <div className='MainSwaraya'>
                              
                         <div className='swaraAkuruMain'>

                              <div className='AkuruColoms'>

                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                        <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>01</p>
                                             <h5 id='hreasSwara'>අ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowAa(!showAa)}>
                                             <p>02</p>
                                             <h5 id='deergaSware'>ආ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>03</p>
                                             <h5 id='hreasSwara'>ඇ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowAee(!showAee)}>
                                             <p>04</p>
                                             <h5 id='deergaSware'>ඈ</h5>
                                        </div> 
                                   </div></div>
                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>05</p>
                                             <h5 id='hreasSwara'>ඉ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowEe(!showEe)}>
                                             <p>06</p>
                                             <h5 id='deergaSware'>ඊ</h5>
                                        </div>
                                   </div></div>

                              </div>
                              <div className='AkuruColoms'>

                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>07</p>
                                             <h5 id='hreasSwara'>උ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowUu(!showUu)}>
                                             <p>08</p>
                                             <h5 id='deergaSware'>ඌ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>09</p>
                                             <h5 id='hreasSwara'>ඍ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowEruu(!showEruu)}>
                                             <p>10</p>
                                             <h5 id='deergaSware'>ඎ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>11</p>
                                             <h5 id='hreasSwara'>ඏ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowEluu(!showEluu)}>
                                             <p>12</p>
                                             <h5 id='deergaSware'>ඐ</h5>
                                        </div>
                                   </div></div>

                              </div>
                              <div className='AkuruColoms'>

                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>13</p>
                                             <h5 id='hreasSwara'>එ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowAeae(!showAeae)}>
                                             <p>14</p>
                                             <h5 id='deergaSware'>ඒ</h5>
                                        </div>
                                   </div></div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowAeaei(!showAeaei)}>
                                             <p>15</p>
                                             <h5 id='deergaSware'>ඓ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>16</p>
                                             <h5 id='hreasSwara'>ඔ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowOo(!showOo)}>
                                             <p>17</p>
                                             <h5 id='deergaSware'>ඕ</h5>
                                        </div>
                                   </div></div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowOu(!showOu)}>
                                             <p>18</p>
                                             <h5 id='deergaSware'>ඖ</h5>
                                        </div>
                                   </div></div>

                              </div>
                              

                         </div>
                         </div>
                         </div>
               </div>

               }

               {LetterBoxActive === "AlpapranaDiscMainBox" && <div className='AlpapranaDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ අල්පප්‍රාණ ❐</h1>
                         <p>'ප්‍රාණ' යනු හුස්මයි. අල්ප ප්‍රාණ යනු අඩු හුස්මක් යන්නයි. කිසියම් අක්ෂරයක් උච්චාරණයේ දී අඩු හුස්මකින් යුතුව කියවෙන අක්ෂර අල්ප ප්‍රාණ නම් වේ. එක් එක් වර්ගයේ පළමුවන හා තුන්වන අක්ෂර අල්පප්‍රාණ නම් වේ. මේවා ශිතිලාක්ෂර යන නමින් ද හැඳින්වේ. (ස්පර්ෂ අක්ෂර බලන්න) මෙහි පහතින් දැක්වෙන්නේ අල්පප්‍රාණ වේ.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>

                            <div className='akuruAK noalp' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='akuruAK noalp' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                            <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowKa(!showKa)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div></div>

                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowGa(!showGa)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                                   <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowCa(!showCa)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowJa(!showJa)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                                   <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowTa(!showTa)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div></div>
                                    
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowDa(!showDa)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div></div>

                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                               <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowTha(!showTha)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowTDa(!showTDa)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div></div>

                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                              <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowPa(!showPa)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div></div>

                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowBa(!showBa)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div></div>

                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMa(!showMa)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>

                                <div className='akuruAK noalp' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noalp' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noalp' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noalp' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noalp' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                        <div className='akuruAK dvija' id='Dvijaksharabox'>
                            <div className='akurucontent' onClick={()=>setShowDwijakshara(!showDwijakshara)}>
                                            <h5>ද්විජාක්ෂර</h5>
                                        </div>
                            </div>

                            <div className='akuruAK noalp'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK noalp' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp' id='yatamaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "MahappranaDiscMainBox" && <div className='MahappranaDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ මහප්‍රාණ ❐</h1>
                         <p>'ප්‍රාණ' යනු හුස්මයි. මහ ප්‍රාණ යනු වැඩි හුස්මක් යන්නයි. කිසියම් අක්ෂරයක් උච්චාරණයේ දී වැඩි හුස්මකින් යුතුව කියවෙන අක්ෂර මහප්‍රාණ නම් වේ. එක් එක් වර්ගයේ දෙවන  හා හතරවන අක්ෂර මහප්‍රාණ නම් වේ. මේවා ධනිතාක්ෂර යන නමින් ද හැඳින්වේ. (ස්පර්ෂ අක්ෂර බලන්න) මෙහි පහතින් දැක්වෙන්නේ මහප්‍රාණ වේ.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>

                            <div className='akuruAK noMahap' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='akuruAK noMahap' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noMahap' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowKha(!showKha)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowGha(!showGha)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowCha(!showCha)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowJha(!showJha)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowTtha(!showTtha)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowDdha(!showDdha)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowThha(!showThha)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowTDdha(!showTDdha)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowPha(!showPha)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowBha(!showBha)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>

                                <div className='akuruAK noMahap' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noMahap' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noMahap' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noMahap' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noMahap' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                        <div className='akuruAK dvija' id='Dvijaksharabox'>
                            <div className='akurucontent' onClick={()=>setShowDwijakshara(!showDwijakshara)}>
                                            <h5>ද්විජාක්ෂර</h5>
                                        </div>
                            </div>

                            <div className='akuruAK noMahap'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK noMahap' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap' id='yatamaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "VargaAnuDiscMainBox" && <div className='VargaAnuDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ වර්ගාන්තාක්ෂර ❐</h1>
                         <p>එක් එක් වර්ගයෙහි අන්තයෙහි හෙවත් කෙළවර පවත්නා අක්ෂර සාම්ප්‍රදායික ව්‍යාකරණයෙහි වර්ගාන්තාක්ෂර ලෙස නම් කර ඇත. ඒ අනුව පහතින් දැක්වෙන ඞ්, ඤ්, ණ්, න්, ම් යන අක්ෂර වර්ගාන්ත ඝෝෂ ස්පර්ෂ අක්ෂර ලෙස සැළකිය හැකි වේ. නූතන ව්‍යාකරණඥයින්ගේ මතයට අනුව වර්ගාක්ෂර තිහක් ලෙස ගතහොත් මෙම අක්ෂර වර්ගාන්තාක්ෂර ලෙස සැලකීමට නොහැකි වේ. නමුත් එතුළින් නව අර්බුද ගණනාවක් නිර්මාණය වන බැවින් වර්ගාන්තාක්ෂර ලෙස මෙම අක්ෂර පහ පමණක් සැලකීම වැදගත් වේ.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>
                         <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowAn(!showAn)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div></div>
                            
                            <div className='akuruAK Novran' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK Novran' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowXha(!showXha)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowChaha(!showChaha)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMna(!showMna)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowNa(!showNa)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMa(!showMa)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div></div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>

                                <div className='akuruAK Novran' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK Novran' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK Novran' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK Novran' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK Novran' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                        <div className='akuruAK dvija' id='Dvijaksharabox'>
                            <div className='akurucontent' onClick={()=>setShowDwijakshara(!showDwijakshara)}>
                                            <h5>ද්විජාක්ෂර</h5>
                                        </div>
                            </div>

                            <div className='akuruAK Novran'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK Novran' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran' id='yatamaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "SanjakaDiscMainBox" && <div className='SanjakaDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ සඤ්ඤකාක්ෂර ❐</h1>
                         <p>නූතන සිංහල අක්ෂර මාලාවට අලුතින් ම එක් කර ඇති අක්ෂර විශේෂය සඤ්ඤකාක්ෂරයි. මේවා අර්ධයක් නාසයට බරව උච්චාරණය කෙරෙන බැවින් අර්ධානුනාසික්‍ය අක්ෂර යන නමින් ද හඳුන්වනු ලැබේ. ඝෝෂ ස්පර්ෂ ගණයට අයත් වන මෙම අක්ෂර අතර ඇති සඤ්ඤක 'ඦ' යන අක්ෂරය භාෂාවේ භාවිතය ඉතා විරළ වේ. මෙම අක්ෂරයන්ගෙන් ආරම්භ වන වචන භාෂාවේ අපට හමු නොවේ. එසේම මෙකී අක්ෂර වචනයක මැද හල්ව යෙදෙන අවස්ථාවන් ද භාෂාවේ අපට හමු නොවේ.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>

                            <div className='akuruAK noSanjaka' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='akuruAK noSanjaka' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara' id='vrdisforTitle'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>
                              <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowXgha(!showXgha)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowXJhaha(!showXJhaha)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowMdhaha(!showMdhaha)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowdhaha(!showdhaha)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowBhaha(!showBhaha)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div></div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                        <div className='akuruAK dvija' id='Dvijaksharabox'>
                            <div className='akurucontent' onClick={()=>setShowDwijakshara(!showDwijakshara)}>
                                            <h5>ද්විජාක්ෂර</h5>
                                        </div>
                            </div>

                            <div className='akuruAK noSanjaka'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK noSanjaka' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka' id='yatamaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "AnthahsDiscMainBox" && <div className='AnthahsDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ අන්තඃස්ථාක්ෂර ❐</h1>
                         <p>ස්වරයක් හා ව්‍යඤ්ජනයක් අතරමැද පවත්නා අක්ෂර විශේෂය අන්තඃස්ථාක්ෂර නම් වේ. මෙම අක්ෂර සෑදී ඇත්තේ පහත අක්ෂරයන්හි එකතුවෙන් බව පොදු පිළිගැනීමයි.</p>
                         <ul className='NewnewUlNewThree'>
                            <li>ඉ 	+ 	අ 	= ය</li>
                            <li>ඍ 	+ 	අ 	= ර</li>
                            <li>ඏ 	+ 	අ 	= ල, ළ</li>
                            <li>උ 	+ 	අ	= ව</li>
                         </ul>

                         <p>මෙම අක්ෂර හැඳින්වීම සඳහා අර්ධස්වර යන නම ද භාවිත කෙරේ.</p>
                        </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>

                            <div className='akuruAK noMahap' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='akuruAK noMahap' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowCatNotInc(!showCatNotInc)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>

                                <div className='akuruAK noAnthahstha' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noAnthahstha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noAnthahstha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noAnthahstha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noAnthahstha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                        <div className='akuruAK dvija' id='Dvijaksharabox'>
                            <div className='akurucontent' onClick={()=>setShowDwijakshara(!showDwijakshara)}>
                                            <h5>ද්විජාක්ෂර</h5>
                                        </div>
                            </div>

                         <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowYa(!showYa)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowRa(!showRa)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLa(!showLa)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowWa(!showWa)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div></div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK noAnthahstha' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noAnthahstha' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noAnthahstha' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noAnthahstha' id='yatamaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLLa(!showLLa)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div></div>
                            <div className='akuruAK noAnthahstha' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "UshmakDiscMainBox" && <div className='UshmakDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ ඌෂ්මාක්ෂර ❐</h1>
                         <p>උණුසුම්ව උසුරුවන බැවින් හෙවත් උච්චාරණයේ දී මුඛයෙන් වායු ධාරාව උණුසුම් ව පිටකෙරෙන බැවින් මෙනමින් මෙම අක්ෂර හඳුන්වනු ලැබේ.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>

                            <div className='akuruAK noush' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowAh(!showAh)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div></div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowCatNotInc(!showCatNotInc)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noush' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>

                                <div className='akuruAK noush' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noush' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noush' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noush' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noush' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                        <div className='akuruAK dvija' id='Dvijaksharabox'>
                            <div className='akurucontent' onClick={()=>setShowDwijakshara(!showDwijakshara)}>
                                            <h5>ද්විජාක්ෂර</h5>
                                        </div>
                            </div>

                            <div className='akuruAK noush'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noush'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noush'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noush'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>
                        <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSha(!showSha)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSsha(!showSsha)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSa(!showSa)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru' onClick={()=>setShowha(!showha)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div></div>
                            <div className='akuruAK noush'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowFa(!showFa)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div></div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "GoshaDiscMainBox" && <div className='GoshaDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ ඝෝෂාක්ෂර ❐</h1>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>
                         <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowAn(!showAn)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div></div>
                            <div className='akuruAK agoagoo' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK agoagoo' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowGa(!showGa)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowGha(!showGha)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowXha(!showXha)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowJa(!showJa)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowJha(!showJha)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowChaha(!showChaha)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowDa(!showDa)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowDdha(!showDdha)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMna(!showMna)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowTDa(!showTDa)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowTDdha(!showTDdha)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowNa(!showNa)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowBa(!showBa)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowBha(!showBha)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMa(!showMa)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div></div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>
                        <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowXgha(!showXgha)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowXJhaha(!showXJhaha)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowMdhaha(!showMdhaha)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowdhaha(!showdhaha)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowBhaha(!showBhaha)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div></div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                        <div className='akuruAK dvija' id='Dvijaksharabox'>
                            <div className='akurucontent' onClick={()=>setShowDwijakshara(!showDwijakshara)}>
                                            <h5>ද්විජාක්ෂර</h5>
                                        </div>
                            </div>

                        <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowYa(!showYa)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowRa(!showRa)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLa(!showLa)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowWa(!showWa)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div></div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK agoagoo' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK agoagoo' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK agoagoo' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru' onClick={()=>setShowha(!showha)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLLa(!showLLa)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div></div>
                            <div className='akuruAK agoagoo' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               }

            {LetterBoxActive === "AGoshaDiscMainBox" && <div className='AGoshaDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ අඝෝෂාක්ෂර ❐</h1>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>
                         
                            <div className='akuruAK notAgosha' id='anahboxAkuru'>
                            <div className='akurucontent notAgosha' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowAh(!showAh)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div></div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>
                            <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowKa(!showKa)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowKha(!showKha)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div></div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                            <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowCa(!showCa)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowCha(!showCha)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div></div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                            <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowTa(!showTa)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowTtha(!showTtha)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div></div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                            <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowTha(!showTha)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowThha(!showThha)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div></div>
                                   
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                            <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowPa(!showPa)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowPha(!showPha)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div></div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>
                        
                                <div className='akuruAK notAgosha' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                
                                <div className='akuruAK notAgosha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                
                                <div className='akuruAK notAgosha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                
                                <div className='akuruAK notAgosha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                
                                <div className='akuruAK notAgosha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                        <div className='akuruAK dvija' id='Dvijaksharabox'>
                            <div className='akurucontent' onClick={()=>setShowDwijakshara(!showDwijakshara)}>
                                            <h5>ද්විජාක්ෂර</h5>
                                        </div>
                            </div>
                        
                            <div className='akuruAK notAgosha'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            
                            <div className='akuruAK notAgosha'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            
                            <div className='akuruAK notAgosha'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            
                            <div className='akuruAK notAgosha'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>
                        <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSha(!showSha)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSsha(!showSsha)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSa(!showSa)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div></div>
                            
                            <div className='akuruAK notAgosha' id='yatamaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            
                            <div className='akuruAK notAgosha'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowFa(!showFa)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div></div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "SandaysharaMainBox" && <div className='SandaysharaMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ සන්ධ්‍යක්ෂර ❐</h1>
                         <p>වෙනත් ස්වර දෙකක් සන්ධි වීමෙන් සෑදෙන අක්ෂර සන්ධ්‍යක්ෂර නම් වේ. (සන්ධි + අක්ෂර = සන්ධ්‍යක්ෂර) සංස්කෘත භාෂාවෙහි සන්ධ්‍යක්ෂර ලෙස දක්වා ඇත්තේ "ඒ,ඓ, ඕ, ඖ" යන ස්වර හතර පමණකි. නමුත් සිංහලයේ "එ, ඒ, ඓ, ඔ, ඕ, ඖ" යන ස්වර හයම සන්ධ්‍යක්ෂර ලෙස දැක්වීමට හැකිය.</p>
                         <h2>සංයුක්ත ස්වර</h2>
                         <p>අක්ෂර උච්චාරණයේ දී එකවර අක්ෂර දෙකක් එකට කියවෙන අවස්ථාවක් සේ සළකා සංයුක්ත ස්වර නම් වූ ප්‍රභේදයක් දක්නට ලැබේ. සංස්කෘතයේ සංයුක්ත ස්වර හා සන්ධ්‍යක්ෂර එකක් සේ සළකා ඇති බවක් පෙනේ. සිංහලයේ සංයුක්ත ස්වර ලෙස දක්වා ඇත්තේ "ඓ හා ඖ" යන ස්වර දෙකයි.</p>
                    </div>
                    </div>
                }

                {LetterBoxActive === "NamyaswaswaraMainBox" && <div className='NamyaswaswaraMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ නම්‍ය ස්වර ❐</h1>
                         <p>භාෂාවේ භාවිත කිරීමේ දී පවත්නා ස්වරූපයෙන් වෙනස් ස්වරූපයක් බවට පත්වන හෙවත් නැමෙන ස්වර නම්‍ය ස්වර නම් වේ. සිංහලයේ එබඳු නම්‍ය ස්වර තුනකි. එනම් "අ, උ, ඔ" යන ස්වර තුනයි. මෙම ස්වර නාමපදවල ලිංග භජනයේ දී ත්, ක්‍රියාපදවල කාල භජනයේ දී ත් වෙනස් ස්වරූපයකට නැමෙන බව හෙවත් වෙනස් වන බව පැහැදිලි ව පෙනේ. එම ස්වර වෙනස් වන්නේ පහත අයුරිනි.</p>
                         <ul className='NewnewUlNewThree'>
                            <li>අ ❭  ඇ වන අයුරු<br/>බල්ලා (බ්+අ) - බැල්ලී (බ්+ඇ), වස්සා - වැස්සී, බස්සා - බැස්සී, මරයි - මැරීය, අල්ලයි - ඇල්ලීය, වසයි - වැසීය</li>
                            <li>උ ❭  ඉ	 වන අයුරු<br/>කුකුළා (ක්+උ) - කිකිළී (ක්+ඉ), කුක්කා - කික්කී, උකුණා - ඉකිණී, උස්සයි - ඉස්සීය, උරයි - ඉරීය, උතුරයි - ඉතිරීය, දුවයි - දිවීය</li>
                            <li>ඔ ❭  එ	 වන අයුරු<br/>කොල්ලා - කෙල්ල, කොකා - කෙකින්න, සොරා - සෙර, ඔතයි - එතීය, සොයයි - සෙවීය, ගොතයි - ගෙතීය</li>
                         </ul>
                    </div>
                    </div>
                }

                {LetterBoxActive === "AnamyaswaswaraMainBox" && <div className='AnamyaswaswaraMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ අනම්‍ය ස්වර ❐</h1>
                         <p>භාෂාවේ භාවිත කිරීමේ දී පවත්නා ස්වරූපයෙන් වෙනස් ස්වරූපයක් බවට පත් නොවන හෙවත් නොනැමෙන ස්වර අනම්‍ය ස්වර නම් වේ. සිංහලයේ එබඳු අනම්‍ය ස්වර තුනකි. එනම් "ඇ, ඉ, එ" යන ස්වර තුනයි. මෙම ස්වර නාමපදවල ලිංග භජනයේ දී ත්, ක්‍රියාපදවල කාල භජනයේ දී ත් වෙනස් ස්වරූපයකට නොනැමෙන බව හෙවත් වෙනස් නොවන බව පැහැදිලි ව පෙනේ. එම ස්වර වෙනස් නොවන්නේ පහත අයුරිනි.</p>
                         <ul className='NewnewUlNewThree'>
                            <li>'ඇ' නොවෙනස් වන අයුරු<br/>ඇතා -ඇතින්න, මැස්සා - මැස්සී, වැද්දා - වැද්දී, ගැත්තා - ගැත්තී, කැරපොත්තා - කැරපොත්තී, ඇවිදියි - ඇවිදීය, ඇහැරෙයි - ඇහැරීය, වැහැරෙයි - වැහැරීය</li>
                            <li>'ඉ' නොවෙනස් වන අයුරු<br/>ඉබ්බා - ඉබ්බී, ඉස්සා - ඉස්සී, පිස්සා - පිස්සී, ගිරවා - ගිරවී, ඉවසයි - ඉවසීය, ඉරයි - ඉරීය, කිරයි - කිරීය, දිරයි - දිරීය</li>
                            <li>'එ' නොවෙනස් වන අයුරු<br/>එළුවා - එළිච්චී, ගෙම්බා - ගෙම්බී, ලේනා - ලේනී, දෙමලිච්චා - දෙමළිච්චී, එළයි - එළීය, පෙළයි - පෙළීය, එරෙයි - එරීය, නෙළයි - නෙළීය</li>
                         </ul>
                    </div>
                    </div>
                }
                    


               </div>
                
                    {/* Discriptiop buttons  */}

                    <div className='sinhalaAkuruDiscbox'data-aos="fadeInUp">
                         
                         <div className='swarabtnsboxnn'>
                            <div onClick={()=>setLetterBoxActive("hraswaswaraMainBox")} className="listboxes">
                                <div className='cbforborder hColorbox'><span></span></div><div><h5>හ්‍රස්ව ස්වර</h5>
                                <p>(ලුහ ස්වර, ලඝු ස්වර) 08</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("DeergswaswaraMainBox")} className="listboxes">
                                <div className='cbforborder DColorbox'><span></span></div><div><h5>දීර්ඝ ස්වර</h5>
                                <p>(ගුරු ස්වර දික් ස්වර) 10</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("SandaysharaMainBox")} className="listboxes">
                                <div className='cbforborder SandyaColorbox'><i class="fa-sharp fa-solid fa-pen-nib"></i></div><div><h5>සන්ධ්‍යක්ෂර</h5>
                                <p>(සංයුක්ත ස්වර) 02 <span id='otherNum'>(06)</span></p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("NamyaswaswaraMainBox")} className="listboxes">
                                <div className='cbforborder NamyaColorbox'><i class="fa-sharp fa-solid fa-pen-nib"></i></div><div><h5>නම්‍ය ස්වර</h5>
                                <p>(නම්‍ය ස්වර) 03</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("AnamyaswaswaraMainBox")} className="listboxes">
                                <div className='cbforborder AnamyaColorbox'><i class="fa-sharp fa-solid fa-pen-nib"></i></div><div><h5>අනම්‍ය ස්වර</h5>
                                <p>(අනම්‍ය ස්වර) 03</p></div>
                            </div>
                         </div>

                         <div className='viyanjanabtnsboxnn'>
                            <div onClick={()=>setLetterBoxActive("AlpapranaDiscMainBox")} className="listboxes">
                                <div className='cbforborder AlColorbox'><span></span></div><div><h5>අල්පප්‍රාණ</h5>
                                <p>(ශිථිලාක්ෂර) 10</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("MahappranaDiscMainBox")} className="listboxes">
                                <div className='cbforborder MhColorbox'><span></span></div><div><h5>මහප්‍රාණ</h5>
                                <p>(ධනිතාක්ෂර) 10</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("VargaAnuDiscMainBox")} className="listboxes">
                                <div className='cbforborder VrhColorbox'><span></span></div><div><h5>වර්ගාන්තාක්ෂර</h5>
                                <p>(අනුනාසික්‍ය) 05 <span id='otherNum'>(06)</span></p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("SanjakaDiscMainBox")} className="listboxes">
                                <div className='cbforborder SjColorbox'><span></span></div><div><h5>සඤ්ඤකාක්ෂර</h5>
                                <p>(අර්ධනාසික්‍ය) 05</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("AnthahsDiscMainBox")} className="listboxes">
                                <div className='cbforborder AthhColorbox'><span></span></div><div><h5>අන්තඃස්ථාක්ෂර</h5>
                                <p>(අර්ධස්වර) 04 <span id='otherNum'>(05)</span></p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("UshmakDiscMainBox")} className="listboxes">
                                <div className='cbforborder UshColorbox'><span></span></div><div><h5>ඌෂ්මාක්ෂර</h5>
                                <p>(ඝර්ෂ අක්ෂර) 06</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("AGoshaDiscMainBox")} className="listboxes">
                                <div className='cbforborder AGooColorbox'></div><div><h5>අඝෝෂාක්ෂර</h5>
                                <p>(අඝෝෂ) 15</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("GoshaDiscMainBox")} className="listboxes">
                                <div className='cbforborder GooColorbox'></div><div><h5>ඝෝෂාක්ෂර</h5>
                                <p>(ඝෝෂ) 45</p></div>
                            </div>
                            
                         </div>
                    </div>


          </div>

        <div>

         {/* end of hodiya letters cording */}

        {
            showA && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                        <div className='MyCloseBtn'><a onClick={()=>setShowA(!showA)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>අ</h1>
                            <p id='titleP'>'අ' යන්න. (කණ්ඨජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                           <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන මුල් ම අකුරයි. </li>
                            <li>එය ස්වරයකි. </li>
                            <li>එයිනුදු හ්‍රස්ව ස්වර (ලඝු/ලුහු) ගණයට අයත් වේ. </li>
                            <li>එය කණ්ඨජ අක්ෂරයකි.</li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li>එය නම්‍ය ස්වරයකි (අ ❭ ඇ)*නම්‍ය ස්වර බලන්න.</li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 01 වේ. </li>
                            <li>මෙම ස්වරය ව්‍යඤ්ජන අකුරකට ආරූඪ කළ විට පිල්ලක් නොයෙදේ. (ක් + අ = ක) </li>   
                           </ul>
                        </div>
                        
                </div>
        }

{
            showAa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAa(!showAa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ආ</h1>
                            <p id='titleP'>'ආ' යන්න. (කණ්ඨජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li> අක්ෂර මාලාවේ අපට හමුවන දෙවන අකුරයි. </li>
                            <li> එය  ස්වරයකි. </li>
                            <li>එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. </li>
                            <li>එය කණ්ඨජ අක්ෂරයකි. </li>
                            <li> ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න) </li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 02 වේ. </li>
                            <li>ආ යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල ඇලපිල්ල ය. (ක් + ආ = කා)</li>
                           </ul>
                        </div>
                        
                </div>
        }

{
            showAe && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAe(!showAe)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඇ</h1>
                            <p id='titleP'>'ඇ' යන්න. (කණ්ඨජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li> සිංහල අක්ෂර මාලාවට අනන්‍ය අක්ෂරයකි. පෙරදිග භාෂා හෝඩිවල මෙය දක්නට ලැබෙන්නේ සිංහල අක්ෂර මාලාවේ පමණි. </li>
                            <li>අක්ෂර මාලාවේ අපට හමුවන තෙවන අකුරයි. </li>
                            <li>එය ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. </li>
                            <li>එය කණ්ඨජ අක්ෂරයකි.(මුලින් මෙය කණ්ඨතාලුජ ලෙස නම් කර තිබුණි.) </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li> අනම්‍ය ස්වරයකි.(ඇ ❭ ඇ)*අනම්‍ය ස්වර බලන්න</li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 03 වේ. </li>
                            <li>ඇ යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල ඇදයයි. කෙටි ඇද පිල්ල, ඇක්ම, ඇකාරාංශය යන නම්වලින් ද එය හැඳින්වේ. (ක් + ඇ = කැ)</li>
                            </ul>
                        </div>
                        
                </div>
        }

{
            showAee && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAee(!showAee)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඈ</h1>
                            <p id='titleP'>'ඈ' යන්න. (කණ්ඨජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>සිංහල අක්ෂර මාලාවට අනන්‍ය අක්ෂරයකි. පෙරදිග භාෂා හෝඩිවල මෙය දක්නට ලැබෙන්නේ සිංහල අක්ෂර මාලාවේ පමණි.</li> 
                            <li>අක්ෂර මාලාවේ අපට හමුවන සිව්වන අකුරයි. </li>
                            <li>එය  ස්වරයකි. </li>
                            <li>එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. </li>
                            <li>එය කණ්ඨජ අක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 04 වේ. </li>
                            <li>ඈ යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල දීර්ඝ ඇදයයි. (ක් + ඈ = කෑ)</li>
                            </ul>
                        </div>
                        
                </div>
        }

{
            showE && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowE(!showE)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඉ</h1>
                            <p id='titleP'>'ඉ' යන්න. (තාලුජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන පස්වන අකුරයි.</li> 
                            <li>එය ස්වරයකි. </li>
                            <li>එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. </li>
                            <li>එය තාලුජ අක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li>අනම්‍ය ස්වරයකි.(ඉ ❭ ඉ)*අනම්‍ය ස්වර බලන්න</li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 05 වේ. </li>
                            <li>ඉ යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල ඉස්පිල්ලයි.  (ක් + ඉ = කි)</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showEe && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowEe(!showEe)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඊ</h1>
                            <p id='titleP'>'ඊ' යන්න. (තාලුජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන හයවැනි අකුරයි.</li> 
                            <li>එය  ස්වරයකි. </li>
                            <li>එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. </li>
                            <li>එය තාලුජ අක්ෂරයකි. </li>
                            <li> ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න) </li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 06 වේ. </li>
                            <li>'ඊ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල දීර්ඝ ඉස්පිල්ලයි. (ක් + ඊ = කී)</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showU && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowU(!showU)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>උ</h1>
                            <p id='titleP'>'උ' යන්න. (ඕෂ්ඨජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන සත්වැනි අකුරයි.</li> 
                            <li>එය ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. </li>
                            <li> එය ඕෂ්ඨජ අක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li>නම්‍ය ස්වරයකි. (උ ❭ ඉ)*නම්‍ය ස්වර බලන්න</li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 07 වේ. </li>
                            <li>උ යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිලි කිහිපයකි.</li>

                            </ul>
                                   <ul>
                                        <li>ක් + උ = කු - කෙටි වක් පාපිල්ල</li>
                                        <li>ප් + උ = පු - කෙටි කොන් පාපිල්ල</li>
                                        <li>ර් + උ = රු - කෙටි ඇද පාපිල්ල</li>
                                   </ul>
                        </div>
                        
                </div>
        }

{
            showUu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowUu(!showUu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඌ</h1>
                            <p id='titleP'>'ඌ' යන්න. (ඕෂ්ඨජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                           <ul>
                           <li>අක්ෂර මාලාවේ අපට හමුවන අටවැනි අකුරයි.</li> 
                           <li>එය ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. </li>
                           <li>එය ඕෂ්ඨජ අක්ෂරයකි. </li>
                           <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                           <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 08 වේ. ඌ යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිලි කිහිපයකි.</li>

                           </ul>
                                   <ul>
                                        <li>ක් + ඌ = කූ - දික් වක් පාපිල්ල</li>
                                        <li>ප් + ඌ = පු - දික් කොන් පාපිල්ල</li>
                                        <li>ර් + ඌ = රූ - දික් ඇද පාපිල්ල</li>
                                        <li>ළ් + ඌ	= ළුෑ	- දික් ඇද පාපිල්ල</li>
                                   </ul>
                        </div>
                        
                </div>
        }

{
            showEru && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowEru(!showEru)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඍ</h1>
                            <p id='titleP'>'ඍ' යන්න. (මුර්ධජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන නවවැනි අකුරයි.</li> 
                            <li>එය මාතෘ භාෂාවන් ආශ්‍රයෙන් සිංහල හෝඩියට එක්වූ ස්වරයකි. </li>
                            <li>එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. </li>
                            <li>එය මුර්ධජ අක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න) </li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 09 වේ. </li>
                            <li>'ඍ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල ගැටය සහිත ඇලපිල්ලයි. </li>
                            <li>(ක් + ඍ = කෘ)</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showEruu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                        <div className='MyCloseBtn'><a onClick={()=>setShowEruu(!showEruu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඎ</h1>
                            <p id='titleP'>'ඎ' යන්න. (මුර්ධජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන දසවැනි අකුරයි.</li> 
                            <li>එය මාතෘ භාෂාවන් ආශ්‍රයෙන් සිංහල හෝඩියට එක්වූ ස්වරයකි. </li>
                            <li>එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. </li>
                            <li>එය මුර්ධජ අක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 10 වේ. </li>
                            <li>'ඎ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල ගැටය සහිත ඇලපිලි දෙකයි.</li>
                            <li>(ක් + ඎ = කෲ)</li>
  
                            </ul>
                                    <ul>
                                        <li>(ක් + ඎ = කෲ)</li>
                                   </ul>
                        </div>
                        
                </div>
        }

{
            showElu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowElu(!showElu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඏ</h1>
                            <p id='titleP'>'ඐ' යන්න. (දන්තජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන එකොළොස්වැනි අකුරයි. </li>
                            <li>එය ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ.</li> 
                            <li>එය දන්තජ අක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li>මාතෘ භාෂාවන් ආශ්‍රයෙන් සිංහල භාෂාවට එක් වී ඇති මෙම ස්වරය, අක්ෂර මාලාවේ දක්නට ලැබෙන්නේ වුවද භාෂාවේ එකදු වචනයක හෝ නොයෙදේ. එබැවින් මහාචාර්ය ජේ.බී.දිසානායකයන් සිය සමකාලීන සිංහල හෝඩියේ දී  මෙම අක්ෂරය ඉවත් කර ඇත.</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showEluu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowEluu(!showEluu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඐ</h1>
                            <p id='titleP'>'ඐ' යන්න. (දන්තජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන දොළොස්වැනි අකුරයි. </li>
                            <li>එය ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. </li>
                            <li>එය දන්තජ අක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li>මාතෘ භාෂාවන් ආශ්‍රයෙන් සිංහල භාෂාවට එක් වී ඇති මෙම ස්වරය, අක්ෂර මාලාවේ දක්නට ලැබෙන්නේ වුවද භාෂාවේ එකදු වචනයක හෝ නොයෙදේ. එබැවින් මහාචාර්ය ජේ.බී.දිසානායකයන් සිය සමකාලීන සිංහල හෝඩියේ දී  මෙම අක්ෂරය ඉවත් කර ඇත.</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showAea && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAea(!showAea)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>එ</h1>
                            <p id='titleP'>'එ' යන්න. (කණ්ඨතාලුජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන දහතුන්වැනි අකුරයි. </li>
                            <li>එය ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. </li>
                            <li>එය කණ්ඨතාලුජ අක්ෂරයකි හෙවත් ද්විජාක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li>සන්ධ්‍යක්ෂරයකි. </li>
                            <li>අනම්‍ය ස්වරයකි. (ඇ ❭ ඇ)*අනම්‍ය ස්වර බලන්න.</li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 13 වේ. </li>
                            <li>'එ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල කොම්ඹුවයි. (ක් + එ = කෙ)</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showAeae && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAeae(!showAeae)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඒ</h1>
                            <p id='titleP'>'ඒ' යන්න. (කණ්ඨතාලුජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන දාහතරවැනි අකුරයි. </li>
                            <li>එය ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. </li>
                            <li>එය කණ්ඨතාලුජ අක්ෂරයකි හෙවත් ද්විජාක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 14 වේ.</li> 
                            <li>'ඒ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිලි දෙකකි. එනම් කොම්ඹුව හා දීර්ඝත්ව සළකුණයි. (ක් + ඒ =කේ)</li>
                            </ul>
                        </div>
                        
                </div>
        }

{
            showAeaei && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAeaei(!showAeaei)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඓ</h1>
                            <p id='titleP'>'ඓ' යන්න. (කණ්ඨතාලුජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන පහළොස්වැනි අකුරයි. </li>
                            <li>එය ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ.</li>
                            <li>එය කණ්ඨතාලුජ අක්ෂරයකි හෙවත් ද්විජාක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. </li>
                            <li>සංයුක්ත ස්වරයකි. එසේම එය සන්ධ්‍යක්ෂර ගණයට ද අයත්වේ. </li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 15 වේ.</li>
                            <li>'ඓ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල වන්නේ කොම්ඹු දෙකයි. </li>
                            <li>(ක් + ඓ = කෛ)</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showO && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowO(!showO)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඔ</h1>
                            <p id='titleP'>'ඔ' යන්න. (කණ්ඨෞෂ්ඨජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන දහසය වැනි අකුරයි.</li> 
                            <li>එය ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ.</li> 
                            <li>එය කණ්ඨෞෂ්ඨජ අක්ෂරයකි හෙවත් ද්විජාක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li>නම්‍ය ස්වරයකි. </li>
                            <li>සන්ධ්‍යක්ෂරයකි.  </li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 16 වේ. </li>
                            <li>'ඔ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිලි දෙකකි. එනම් කෙම්ඹුව හා ඇලපිල්ලයි. (ක් + ඔ = කො) (ො) </li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showOo && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowOo(!showOo)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඕ</h1>
                            <p id='titleP'>'ඕ' යන්න. (කණ්ඨෞෂ්ඨජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන දාහත්වැනි අකුරයි. </li>
                            <li>එය ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. </li>
                            <li>එය කණ්ඨෞෂ්ඨජ අක්ෂරයකි හෙවත් ද්විජාක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 14 වේ. </li>
                            <li>'ඕ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිලි දෙකකි. එනම් කොම්ඹුව හා දීර්ඝත්ව සළකුණ සහිත ඇලපිල්ලයි. (ක් + ඕ = කෝ)</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showOu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowOu(!showOu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඖ</h1>
                            <p id='titleP'>'ඖ' යන්න. (කණ්ඨෞෂ්ඨජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <ul>
                            <li>අක්ෂර මාලාවේ අපට හමුවන අවසාන ස්වරය හෙවත් දහඅට වන  අකුරයි.</li> 
                            <li>එය ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. </li>
                            <li>එය කණ්ඨෞෂ්ඨජ අක්ෂරයකි හෙවත් ද්විජාක්ෂරයකි. </li>
                            <li>ඝෝෂයකි. (ඝෝෂ අක්ෂර බලන්න)</li>
                            <li>සංයුක්ත ස්වරයකි. එසේම එය සන්ධ්‍යක්ෂර ගණයට ද අයත්වේ.</li> 
                            <li>අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 18 වේ. </li>
                            <li>'ඖ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිලි වන්නේ කොම්ඹුව හා ගයනුකිත්ත යන දෙකයි. (ක් + ‌ඖ = කෞ)</li>
 
                            </ul>
                        </div>
                        
                </div>
        }

{
            showAn && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent VarAnuContentt'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAn(!showAn)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>අං</h1>
                            <p id='titleP'>(අ)ං යන්න. (අනුස්වාරය)</p>
                            <ul>
                            <li>නිරන්තරයෙන් ස්වරයකට පසුව පමණක් යෙදෙන බැවින් "අනුස්වාරය" ලෙස හැඳින්වෙයි. මෙම අක්ෂරය ස්වරවලට හෝ ව්‍යඤ්ජන යන දෙකට ම අයත් නොවන බවද කියවේ. බිංදුව භාෂාවේ තනි නොයෙදිය හැකි බැවින් ස්වරයක් කීමට ද, පිලි නෙයෙදිය හැකි බැවින් ව්‍යඤ්ජනයක් කීමට ද නොහැක. කෙසේ වුවද නූතන සිංහල වර්ණමාලාව තුළ එය ඇතුළත් කර ඇත්තේ ව්‍යඤ්ජන අක්ෂර ගණයටය. </li>
                            <li>මෙය ව්‍යඤ්ජන මාලාවේ පළමු ව හමුවන අක්ෂරයයි. 'බිංදුව' ලෙස ද හැඳින්වෙන මෙය කණ්ඨජ ඝෝෂ නාසික්‍යයක් ලෙස ද පෙන්වා දිය හැකිය. සම්පූර්ණයෙන් නාසයට බරව උච්චාරණය කෙරෙන බැවින් "පූර්ණ නාසික්‍ය" අක්ෂරයක් ලෙස ද හැඳින්විය හැකිය. </li>
                            <li>මෙය අස්පර්ශ පූර්ණ නාසික්‍ය අක්ෂරයයි.</li>
                            <li>මෙය සියලු ම නාසික්‍ය අක්ෂරයන්ට පොදුවේ භාවිත කෙරෙනු ඇතැම් තැනෙක දක්නට ලැබේ. </li>
                            <li>අකාරාදිය පිළිවෙළ අනුව මෙයට හිමි ස්ථානය වන්නේ 19 යි.</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showAh && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentUshh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAh(!showAh)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>අඃ</h1>
                            <p id='titleP'>(අ)ඃ යන්න. (විසර්ගය)</p>
                            <ul>
                            <li>සංස්කෘත භාෂාවෙන් සිංහල භාෂාවට එක් වූ මෙය සංස්කෘත තත්සම වචන සිංහලෙන් ලියා දැක්වීමේ දී භාෂාවේ යෙදේ. </li>
                            <li>එය හඳුන්වනු ලබන්නේ විසර්ගය ලෙසයි. </li>
                            <li>එය කණ්ඨජ අඝෝෂ ඌෂ්ම අක්ෂරයක් ලෙස පෙන්වා දිය හැකිය.  </li>
                            <li>මෙය ව්‍යඤ්ජන මාලාවේ දෙවනුව හමුවන අක්ෂරයයි. අකාරාදිය පිළිවෙළ අනුව මෙයට හිමි ස්ථානය වන්නේ 19 යි.</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showKa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowKa(!showKa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ක්</h1>
                            <p id='titleP'>'ක්' යන්න. (කණ්ඨජ අඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li>
                            <li>ක් + අ = ක (ස්වරයක් ආරූඪ කළ පසු)</li>
                            <li>ව්‍යඤ්ජන මාලාවේ අපට හමුවන මුල් ම හල් අකුරයි. </li>
                            <li>එය වර්ගාක්ෂරයන්හි ක'වර්ගයේ වර්ගමූල අක්ෂරයයි.</li> 
                            <li>එය කණ්ඨජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li>එසේම එය අඝෝෂයකි. </li>
                            <li>අල්පප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 21 වේ. </li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showKha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowKha(!showKha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඛ්</h1>
                            <p id='titleP'>'ඛ්' යන්න. (කණ්ඨජ අඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li>
                            <li>ඛ් + අ = ඛ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ක'වර්ගයට අයත් අකුරකි.</li>
                            <li>මෙය කණ්ඨජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li>අඝෝෂයකි. </li>
                            <li>මහප්‍රාණයකි.</li> 
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 22 වේ. </li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showGa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowGa(!showGa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ග්</h1>
                            <p id='titleP'>'ග්' යන්න. (කණ්ඨජ ඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li>
                            <li>ග් + අ = ග (ස්වරයක් ආරූඪ කළ පසු)</li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ක'වර්ගයේ අකුරක් වන මෙය කණ්ඨජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li>ඝෝෂයකි. </li>
                            <li>අල්පප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 23 වේ. </li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showGha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowGha(!showGha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඝ්</h1>
                            <p id='titleP'>'ඝ්' යන්න. (කණ්ඨජ ඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li>
                            <li>ඝ් + අ = ඝ (ස්වරයක් ආරූඪ කළ පසු)</li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ක'වර්ගයේ අකුරක් වන මෙය කණ්ඨජ අක්ෂර ගණයට අයත් වේ.</li> 
                            <li>ඝෝෂයකි. </li>
                            <li>මහප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 24 වේ. </li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showXha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent VarAnuContentt'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowXha(!showXha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඞ්</h1>
                            <p id='titleP'>'ඞ්' යන්න. (කණ්ඨජ ඝෝෂ වර්ගාන්ත නාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li> 
                            <li>ඞ් + අ = ඞ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි. </li>
                            <li>ක'වර්ගයට අයත් වන මෙය ක'වර්ගයේ වර්ගාන්තාක්ෂරයයි. </li>
                            <li>කණ්ඨජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li>ඝෝෂයකි. </li>
                            <li>එය නාසයට බරව උච්චාරණය කෙරෙන හෙයින් නාසික්‍ය හෙවත් අනුනාසික ගණයට අයත් වේ. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 25 වේ. </li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showXgha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentSanjakaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowXgha(!showXgha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඟ</h1>
                            <p id='titleP'>'ඟ' යන්න. (කණ්ඨජ ඝෝෂ අර්ධානුනාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>නූතන සිංහල වර්ණ මාලාවට අලුතෙන් ම හඳුන්වාදෙනු ලැබූ මෙය සඤ්ඤක අක්ෂරයකි.</li>
                            <li>කණ්ඨජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li>ඝෝෂයකි. </li>
                            <li>අර්ධයක් නාසයට බරව උච්චාරණය කෙරෙන බැවින් එය අර්ධානුනාසික ශබ්දයක් ලෙස හැඳින්වේ. </li>
                            <li>මෙම අකුරෙන් පටන් ගන්නා කිසිඳු වචනයක් භාෂාවේ හමු නොවේ. </li>
                            <li>මෙය කිසිවිටෙකත් වචනයක හල්ව නොයෙදේ. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 26 වේ.</li>
                            <li>මෙය සෑදී ඇත්තේ  ඞ් + ඟ් + අ = ඟ යන පරිදිය.</li>
                            </ul>
                        </div>
                        
                </div>
        }

{
            showCa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowCa(!showCa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ච්</h1>
                            <p id='titleP'>'ච්' යන්න. (තාලුජ අඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li> 
                            <li>ච් + අ = ච (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ච'වර්ගයේ වර්ගමූල අක්ෂරයයි.  </li>
                            <li>මෙය තාලුජ අක්ෂර ගණයට අයත් වේ.</li> 
                            <li>අඝෝෂයකි. </li>
                            <li>අල්පප්‍රාණ අක්ෂරයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 27 වේ. </li>
 
                            </ul>
                        </div>
                        
                </div>
        }

{
            showCha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowCha(!showCha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඡ්</h1>
                            <p id='titleP'>'ඡ්' යන්න. (තාලුජ අඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ඡ් + අ = ඡ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li> ච'වර්ගයේ අකුරකි. </li>
                            <li> මෙය තාලුජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li>අඝෝෂයකි. </li>
                            <li>මහප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 28 වේ. </li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showJa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowJa(!showJa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ජ්</h1>
                            <p id='titleP'>'ජ්' යන්න. (තාලුජ ඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li> 
                            <li>ජ් + අ = ජ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ච'වර්ගයේ අකුරකි.</li>
                            <li>මෙය තාලුජ අක්ෂර ගණයට අයත් ඝෝෂයකි. </li>
                            <li>අල්පප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 29 වේ.</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showJha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowJha(!showJha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඣ්</h1>
                            <p id='titleP'>'ඣ්' යන්න. (තාලුජ ඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ඣ් + අ = ඣ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li> ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li> ච'වර්ගයේ අකුරකි. </li>
                            <li>මෙය තාලුජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li>ඝෝෂයකි. </li>
                            <li>මහප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 30 වේ. </li>
                            </ul>
                        </div>
                        
                </div>
        }

{
            showChaha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent VarAnuContentt'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowChaha(!showChaha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඤ්</h1>
                            <p id='titleP'>'ඤ්' යන්න. (තාලුජ ඝෝෂ වර්ගාන්ත නාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ඤ් + අ = ඤ (ස්වරයක් ආරූඪ කළ පසු)</li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි. </li>
                            <li> ච'වර්ගයට අයත් වන මෙය ච'වර්ගයේ වර්ගාන්තාක්ෂරයයි. </li>
                            <li>තාලුජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li>ඝෝෂයකි. </li>
                            <li>එය නාසයට බරව උච්චාරණය කෙරෙන හෙයින් නාසික්‍ය හෙවත් අනුනාසික ගණයට අයත් වේ.</li>
                            <li>එය ස්පර්ෂ නාසික්‍ය අක්ෂරයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 31 වේ.</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showXJhaha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentSanjakaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowXJhaha(!showXJhaha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඦ</h1>
                            <p id='titleP'>'ඦ' යන්න. (තාලුජ ඝෝෂ අර්ධානුනාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <li>නූතන සිංහල වර්ණ මාලාවට අලුතෙන් ම හඳුන්වාදෙනු ලැබූ අක්ෂරයකි.</li> 
                            <li>එය සඤ්ඤක අක්ෂරයකි. </li>
                            <li>තාලුජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li>ඝෝෂයකි. </li>
                            <li>අර්ධයක් නාසයට බරව උච්චාරණය කෙරෙන බැවින් එය අර්ධානුනාසික ශබ්දයක් ලෙස හැඳින්වේ. </li>
                            <li>මෙම අක්ෂරය යෙදී ඇති එකම එක වචනයක් භාෂාවේ පවතී. එනම් සුනඛයින්ට අසුරු ගැසීමේ දී යෙදෙන "ඉඦුඃ" යන්නෙහි පමණි. මහාචාර්ය ජේ.බී.දිසානායකයන්ගේ සමකාලීන සිංහල හෝඩියෙන් මෙම අක්ෂරය ඉවත් කොට ඇති අතර එම ස්ථානයට "ඥ" අක්ෂරය එක් කර ඇත. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 32 වේ.</li>
                            <li>මෙය සෑදී ඇත්තේ  ඤ් + ජ් + අ = ඦ යන පරිදිය.</li>

                        </div>
                        
                </div>
        }

{
            showTa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowTa(!showTa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ට්</h1>
                            <p id='titleP'>'ට්' යන්න. (මුර්ධජ අඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ට් + අ = ට (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ට'වර්ගයේ වර්ගමූල අක්ෂරයයි. </li>
                            <li>මෙය මුර්ධජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li>අඝෝෂයකි. </li>
                            <li>අල්පප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 33 වේ. </li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showTtha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowTtha(!showTtha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඨ්</h1>
                            <p id='titleP'>'ඨ්' යන්න. (මුර්ධජ අඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li> සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ඪ් + අ = ඪ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ට'වර්ගයේ අකුරක් වන මෙය මුර්ධජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li>එය අඝෝෂයකි. </li>
                            <li>මහප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 34 වේ.</li>
 
                            </ul>
                        </div>
                        
                </div>
        }
        {
            showDa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowDa(!showDa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඩ්</h1>
                            <p id='titleP'>'ඩ්' යන්න. (මුර්ධජ ඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li> 
                            <li> ඩ් + අ = ඩ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li> ට'වර්ගයේ අකුරකි.</li>
                            <li> මෙය මුර්ධජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li> ඝෝෂයකි. </li>
                            <li>අල්පප්‍රාණයකි. </li>
                            <li> අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 35 වේ.</li>
 
                            </ul>
                        </div>
                        
                </div>
        }
        {
            showDdha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowDdha(!showDdha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඪ්</h1>
                            <p id='titleP'>'ඪ්' යන්න. (මුර්ධජ ඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li> 
                            <li>ඪ් + අ = ඪ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ට'වර්ගයේ අකුරකි. </li>
                            <li>මෙය මුර්ධජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li>ඝෝෂයකි. </li>
                            <li>මහප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 36 වේ. </li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showMna && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent VarAnuContentt'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowMna(!showMna)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ණ්</h1>
                            <p id='titleP'>'ණ්' යන්න. (මුර්ධජ ඝෝෂ වර්ගාන්ත නාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ණ් + අ = ණ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි. </li>
                            <li>ට'වර්ගයේ අකුරක් වන මෙය ට'වර්ගයේ වර්ගාන්තාක්ෂරයයි. </li>
                            <li>මුර්ධජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li> ඝෝෂයකි. </li>
                            <li>එය නාසයට බරව උච්චාරණය කෙරෙන හෙයින් නාසික්‍ය හෙවත් අනුනාසික ගණයට අයත් වේ.</li> 
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 37 වේ.</li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showMdhaha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentSanjakaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowMdhaha(!showMdhaha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඬ</h1>
                            <p id='titleP'>'ඬ' යන්න. (මුර්ධජ ඝෝෂ අර්ධානුනාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>නූතන සිංහල වර්ණ මාලාවට අලුතෙන් ම හඳුන්වාදෙනු ලැබූ අකුරකි.</li> 
                            <li>මෙය සඤ්ඤක අක්ෂරයකි. </li>
                            <li>මුර්ධජ අක්ෂර ගණයට අයත් ඝෝෂයකි. </li>
                            <li>අර්ධයක් නාසයට බරව උච්චාරණය කෙරෙන බැවින් එය අර්ධානුනාසික ශබ්දයක් ලෙස හැඳින්වේ. </li>
                            <li>මෙම අකුරෙන් පටන් ගන්නා කිසිඳු වචනයක් භාෂාවේ හමු නොවේ. මෙය කිසිවිටෙකත් වචනයක හල්ව නොයෙදේ. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 38 වේ.</li>
                            <li>මෙය සෑදී ඇත්තේ  ණ් + ඩ් + අ = ඬ යන පරිදිය.</li>

                            </ul>
                        </div>
                        
                </div>
        }

{
            showTha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowTha(!showTha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ත්</h1>
                            <p id='titleP'>'ත්' යන්න. (දන්තජ අඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li> 
                            <li> ත් + අ = ත (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.</li>  
                            <li> ත'වර්ගයේ වර්ගමූල අක්ෂරයයි. </li>
                            <li>මුර්ධජ අක්ෂර ගණයට අයත් අඝෝෂයකි. </li>
                            <li>අල්පප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 39 වේ.</li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showThha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowThha(!showThha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ථ්</h1>
                            <p id='titleP'>'ථ්' යන්න. (දන්තජ අඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li> 
                            <li>ථ් + අ = ථ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ත'වර්ගයේ අකුරකි. </li>
                            <li>මෙය දන්තජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li>අඝෝෂයකි. </li>
                            <li>මහප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 40 වේ.</li>
 
                            </ul>
                        </div>
                        
                </div>
        }
        {
            showTDa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowTDa(!showTDa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ද්</h1>
                            <p id='titleP'>'ද්' යන්න. (දන්තජ ඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li> 
                            <li>ද් + අ = ද (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li> ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි. </li> 
                            <li> ත'වර්ගයේ අකුරකි. </li>
                            <li> දන්තජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li>ඝෝෂයකි. </li>
                            <li>අල්පප්‍රාණයකි. </li>
                            <li> අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 41 වේ.</li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showTDdha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowTDdha(!showTDdha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ධ්</h1>
                            <p id='titleP'>'ධ්' යන්න. (දන්තජ ඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li> ධ් + අ = ධ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ත'වර්ගයේ අකුරකි. </li>
                            <li>දන්තජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li>ඝෝෂයකි. </li>
                            <li>මහප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 42 වේ. </li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showNa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent VarAnuContentt'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowNa(!showNa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>න්</h1>
                            <p id='titleP'>'න්' යන්න. (දන්තජ ඝෝෂ වර්ගාන්ත නාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>න් + අ = න (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි. </li>
                            <li>ත'වර්ගයේ අකුරක් වන මෙය ත'වර්ගයේ වර්ගාන්තාක්ෂරයයි. </li>
                            <li>දන්තජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li>ඝෝෂයකි. </li>
                            <li>එය නාසයට බරව උච්චාරණය කෙරෙන හෙයින් නාසික්‍ය හෙවත් අනුනාසික ගණයට අයත් වේ. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 43 වේ.</li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showdhaha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentSanjakaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowdhaha(!showdhaha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඳ</h1>
                            <p id='titleP'>'ඳ' යන්න. (දන්තජ ඝෝෂ අර්ධානුනාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li> නූතන සිංහල වර්ණ මාලාවට අලුතෙන් ම හඳුන්වාදෙනු ලැබූ අකුරක් වන මෙය ද සඤ්ඤක අක්ෂරයකි. </li>
                            <li> දන්තජ අක්ෂර ගණයට වේ.</li>
                            <li>ඝෝෂයකි. </li>
                            <li>අර්ධයක් නාසයට බරව උච්චාරණය කෙරෙන බැවින් එය අර්ධානුනාසික ශබ්දයක් ලෙස හැඳින්වේ. මෙම අකුරෙන් පටන් ගන්නා කිසිඳු වචනයක් භාෂාවේ හමු නොවේ. මෙය කිසිවිටෙකත් වචනයක හල්ව නොයෙදේ. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 44 වේ.</li>
                            <li> මෙය සෑදී ඇත්තේ  න් + ද් + අ = ඳ යන පරිදිය.</li>
 
                            </ul>
                        </div>
                        
                </div>
        }

{
            showPa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowPa(!showPa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ප්</h1>
                            <p id='titleP'>'ප්' යන්න. (ඕෂ්ඨජ අඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ප් + අ = ප (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ප'වර්ගයේ වර්ගමූල අක්ෂරයයි. </li>
                            <li>ඕෂ්ඨජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li>අඝෝෂයකි. </li>
                            <li>අල්පප්‍රාණයකි. </li>
                            <li> අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 45 වේ.</li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showPha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowPha(!showPha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඵ්</h1>
                            <p id='titleP'>'ඵ්' යන්න. (ඕෂ්ඨජ අඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li> සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ඵ් + අ = ඵ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ප'වර්ගයේ අකුරකි. </li>
                            <li> ඕෂ්ඨජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li> අඝෝෂයකි. </li>
                            <li>මහප්‍රාණයකි. </li>
                            <li> අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 46 වේ.</li>
 
                            </ul>
                        </div>
                        
                </div>
        }
        {
            showBa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowBa(!showBa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>බ්</h1>
                            <p id='titleP'>'බ්' යන්න. (ඕෂ්ඨජ ඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී.</li> 
                            <li>බ් + අ = බ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ප'වර්ගයේ අකුරකි. </li>
                            <li>ඕෂ්ඨජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li>ඝෝෂයකි. </li>
                            <li>අල්පප්‍රාණයකි. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 47 වේ.</li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showBha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowBha(!showBha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>භ්</h1>
                            <p id='titleP'>'භ්' යන්න. (ඕෂ්ඨජ ඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li> භ් + අ = භ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  </li>
                            <li>ප'වර්ගයේ අකුරකි. </li>
                            <li>ඕෂ්ඨජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li>ඝෝෂයකි. </li>
                            <li>මහප්‍රාණයකි. </li>
                            <li> අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 48 වේ. </li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showMa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent VarAnuContentt'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowMa(!showMa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ම්</h1>
                            <p id='titleP'>'ම්' යන්න. (ඕෂ්ඨජ ඝෝෂ වර්ගාන්ත නාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li> ම් + අ = ම (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි. </li>
                            <li>ප'වර්ගයේ අකුරකි. </li>
                            <li>ප'වර්ගයේ වර්ගාන්තාක්ෂරයයි. </li>
                            <li>ඕෂ්ඨජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li>ඝෝෂයකි. </li>
                            <li>එය නාසයට බරව උච්චාරණය කෙරෙන හෙයින් නාසික්‍ය හෙවත් අනුනාසික ගණයට අයත් වේ. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 49 වේ.</li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showBhaha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentSanjakaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowBhaha(!showBhaha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඹ</h1>
                            <p id='titleP'>'ඹ' යන්න. (ඕෂ්ඨජ ඝෝෂ අර්ධානුනාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <ul>
                            <li>නූතන සිංහල වර්ණ මාලාවට අලුතෙන් ම හඳුන්වාදෙනු ලැබූ අකුරක් වන මෙය ද සඤ්ඤක අක්ෂරයකි. </li>
                            <li> ඕෂ්ඨජ අක්ෂර ගණයට අයත් වේ. </li>
                            <li> ඝෝෂයකි. </li>
                            <li>අර්ධයක් නාසයට බරව උච්චාරණය කෙරෙන බැවින් එය අර්ධානුනාසික ශබ්දයක් ලෙස හැඳින්වේ. මෙම අකුරෙන් පටන් ගන්නා කිසිඳු වචනයක් භාෂාවේ හමු නොවේ. මෙය කිසිවිටෙකත් වචනයක හල්ව නොයෙදේ. </li>
                            <li>අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 50 වේ.</li>
                            <li>මෙය සෑදී ඇත්තේ  ම් + බ් + අ = ඹ යන පරිදිය.</li>

                            </ul>
                        </div>
                        
                </div>
        }


{
            showYa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAnthahh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowYa(!showYa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ය්</h1>
                            <p id='titleP'>'ය්' යන්න. (තාලුජ ඝෝෂ අර්ධස්වරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ය් + අ = ය (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li> අවර්ගාක්ෂර ගණයට අයත් ව්‍යඤ්ජනයකි. </li>
                            <li> ස්වරයක් හා ව්‍යඤ්ජනයක් අතර මැද පවත්නා බැවින් අන්තඃස්ථාක්ෂර යන කොටසට හෙවත් අර්ධස්වර ගණයට අයත් වේ. </li>
                            <li> උප්පත්ති ස්ථානය අනුව තාලුජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li>ඝෝෂයකි. </li>
                            <li> අක්ෂර මාලාවේ එයට හිමි ස්ථානය වන්නේ 51 යි. </li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showRa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAnthahh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowRa(!showRa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ර්</h1>
                            <p id='titleP'>'ර්' යන්න. (මුර්ධජ ඝෝෂ අර්ධස්වරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li> ර් + අ = ර (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>අවර්ගාක්ෂර ගණයට අයත් ව්‍යඤ්ජනයකි. </li>
                            <li>ස්වරයක් හා ව්‍යඤ්ජනයක් අතර මැද පවත්නා බැවින් අන්තඃස්ථාක්ෂර යන කොටසට හෙවත් අර්ධස්වර ගණයට අයත් වේ. </li>
                            <li>උප්පත්ති ස්ථානය අනුව මුර්ධජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li> ඝෝෂයකි. </li>
                            <li> අක්ෂර මාලාවේ එයට හිමි ස්ථානය වන්නේ 52 යි.</li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showLa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAnthahh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowLa(!showLa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ල්</h1>
                            <p id='titleP'>'ල්' යන්න. (දන්තජ ඝෝෂ අර්ධස්වරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ල් + අ = ල (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>අවර්ගාක්ෂර ගණයට අයත් ව්‍යඤ්ජනයකි.</li> 
                            <li>ස්වරයක් හා ව්‍යඤ්ජනයක් අතර මැද පවත්නා බැවින් අන්තඃස්ථාක්ෂර යන කොටසට හෙවත් අර්ධස්වර ගණයට අයත් වේ.</li> 
                            <li>උප්පත්ති ස්ථානය අනුව දන්තජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li>ඝෝෂයකි. </li>
                            <li>අක්ෂර මාලාවේ එයට හිමි ස්ථානය වන්නේ 53 යි.</li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showWa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAnthahh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowWa(!showWa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ව්</h1>
                            <p id='titleP'>'ව්' යන්න. (දන්තෞෂ්ඨජ ඝෝෂ අර්ධස්වරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li> ව් + අ = ව (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>අවර්ගාක්ෂර ගණයට අයත් ව්‍යඤ්ජනයකි. </li>
                            <li>ස්වරයක් හා ව්‍යඤ්ජනයක් අතර මැද පවත්නා බැවින් අන්තඃස්ථාක්ෂර යන කොටසට හෙවත් අර්ධස්වර ගණයට අයත් වේ. </li>
                            <li>උප්පත්ති ස්ථානය අනුව දන්තෞෂ්ඨජ අක්ෂර ගණයට අයත් වේ.</li>
                            <li>ඝෝෂයකි. </li>
                            <li>ද්විජාක්ෂරයකි. </li>
                            <li>අක්ෂර මාලාවේ එයට හිමි ස්ථානය වන්නේ 54 යි.</li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showSha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentUshh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowSha(!showSha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ශ්</h1>
                            <p id='titleP'>'ශ්' යන්න. (තාලුජ අඝෝෂ ඝර්ෂ අක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ශ් + අ = ශ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>උණුසුම්ව උසුරුවන බැවින් හෙවත් මෙම අක්ෂරය උච්චාරණය කිරීමේ දී මුඛයෙන් වායු ධාරාව උණුසුම් ව පිට කෙරෙන බැවින් ඌෂ්මන් අක්ෂරයක් ලෙස හැඳින්වේ. </li>
                            <li>මාතෘ භාෂාවන්ගෙන් සිංහලයට පැමිණි අක්ෂරයකි. </li>
                            <li>ඝර්ෂ යන නම ද එබඳු අක්ෂර හැඳින්වීම සඳහා යෙදේ. </li>
                            <li>එය තාලුජ ගණයට අයත් වේ. </li>
                            <li>අඝෝෂ අක්ෂරයකි. </li>
                            <li>අක්ෂර මාලාවේ එයට හිමි ස්ථානය වී ඇත්තේ 55 යි.</li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showSsha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentUshh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowSsha(!showSsha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ෂ්</h1>
                            <p id='titleP'>'ෂ්' යන්න. (මුර්ධජ අඝෝෂ ඝර්ෂ අක්ෂරය)</p>
                            <ul>
                            <li> සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ෂ් + අ = ෂ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>උණුසුම්ව උසුරුවන බැවින් හෙවත් මෙම අක්ෂරය උච්චාරණය කිරීමේ දී මුඛයෙන් වායු ධාරාව උණුසුම් ව පිට කෙරෙන බැවින් ඌෂ්මන් අක්ෂරයක් ලෙස හැඳින්වේ. </li>
                            <li>මාතෘ භාෂාවන්ගෙන් සිංහලයට පැමිණි අක්ෂරයකි. </li>
                            <li>ඝර්ෂ යන නම ද එබඳු අක්ෂර හැඳින්වීම සඳහා යෙදේ. </li>
                            <li>එය මුර්ධජ ගණයට අයත් වේ.</li>
                            <li>අඝෝෂ අක්ෂරයකි. </li>
                            <li> අක්ෂර මාලාවේ එයට හිමි ස්ථානය වී ඇත්තේ 56 යි. </li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showSa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentUshh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowSa(!showSa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ස්</h1>
                            <p id='titleP'>'ස්' යන්න. (දන්තජ අඝෝෂ ඝර්ෂ අක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ස් + අ = ස (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>උණුසුම්ව උසුරුවන බැවින් හෙවත් මෙම අක්ෂරය උච්චාරණය කිරීමේ දී මුඛයෙන් වායු ධාරාව උණුසුම් ව පිට කෙරෙන බැවින් ඌෂ්මන් අක්ෂරයක් ලෙස හැඳින්වේ.</li>
                            <li>ආරම්භයේ පටන් ම සිංහල හෝඩියෙහි දක්නට ලැබුනු අක්ෂරයකි. </li>
                            <li>මෙය ද ඝර්ෂ අක්ෂරයකි. </li>
                            <li>එය දන්තජ ගණයට අයත් වේ.</li>
                            <li>අඝෝෂ අක්ෂරයකි. </li>
                            <li>අක්ෂර මාලාවේ එයට හිමි ස්ථානය වී ඇත්තේ 57 යි. </li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentUshh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowha(!showha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>හ්</h1>
                            <p id='titleP'>'හ්' යන්න. (කණ්ඨජ ඝෝෂ ඝර්ෂ අක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>හ් + අ = හ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>උණුසුම්ව උසුරුවන බැවින් හෙවත් මෙම අක්ෂරය උච්චාරණය කිරීමේ දී මුඛයෙන් වායු ධාරාව උණුසුම් ව පිට කෙරෙන බැවින් ඌෂ්මන් අක්ෂරයක් ලෙස හැඳින්වේ. </li>
                            <li>මෙය ද ඝර්ෂ අක්ෂරයකි. </li>
                            <li>එය කණ්ඨජ ගණයට අයත් වේ.</li>
                            <li>ඝෝෂ අක්ෂරයකි. </li>
                            <li>අක්ෂර මාලාවේ එයට හිමි ස්ථානය වී ඇත්තේ 58 යි.</li>

                            </ul>
                        </div>
                        
                </div>
        }
        {
            showLLa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAnthahh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowLLa(!showLLa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ළ්</h1>
                            <p id='titleP'>'ළ්' යන්න. (මුර්ධජ ඝෝෂ අර්ධස්වරය)</p>
                           <ul>
                           <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                           <li> ළ් + අ = ළ (ස්වරයක් ආරූඪ කළ පසු) </li>
                           <li>අවර්ගාක්ෂර ගණයට අයත් ව්‍යඤ්ජනයකි. </li>
                           <li>ස්වරයක් හා ව්‍යඤ්ජනයක් අතර මැද පවත්නා බැවින් අන්තඃස්ථාක්ෂර යන කොටසට හෙවත් අර්ධස්වර ගණයට අයත් වේ. </li>
                           <li>මුර්ධජ අක්ෂර ප්‍රභේදයට අයත් වේ. </li>
                           <li>මෙය ඝෝෂයකි. </li>
                           <li>අක්ෂර මාලාවේ එයට හිමි ස්ථානය වන්නේ 59 යි.</li>

                           </ul>
                        </div>
                        
                </div>
        }
        {
            showFa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentUshh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowFa(!showFa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ෆ</h1>
                            <p id='titleP'>'ෆ' යන්න. (දන්තෞෂ්ඨජ අඝෝෂ ඝර්ෂ අක්ෂරය)</p>
                            <ul>
                            <li>සාමාන්‍යයෙන් හල් අකුරක් වශයෙන් පවතී. </li>
                            <li>ෆ් + අ = ෆ (ස්වරයක් ආරූඪ කළ පසු) </li>
                            <li>අවර්ගාක්ෂර ගණයට අයත් ව්‍යඤ්ජනයකි. </li>
                            <li>නූතන සිංහල අක්ෂර මාලාවට අලුතෙන් ම එක් කෙරුණු මෙය ඉංග්‍රීසි තත්සම වචන සිංහලෙන් ලියා දැක්වීමේ කාලීන අවශ්‍යතාව සලකා අක්ෂර මාලාවට එක් කරන ලද්දකි.</li> 
                            <li>එය ද උච්චාරණයේ දී උණුසුම් වායු ධාරවක් මුඛයෙන් පිටවන බැවින් ඌෂ්මන් අක්ෂර ගණයට අයත් වේ. </li>
                            <li>අක්ෂර උප්පත්ති ස්ථාන අනුව දන්තෞෂ්ඨජ අක්ෂරයක් වේ.</li>
                            <li>අඝෝෂ ඝර්ෂයකි. </li>

                            </ul>
                        </div>
                        
                </div>
        }


{
            showSwara && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent MAINswyawiyaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowSwara(!showSwara)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ස්වර</h1>
                            <p>වෙනත් කිසිදු අක්ෂරයක උපකාරකින් තොරව භාෂාවේ තනිව ශබ්ද කළ හැකි අක්ෂර විශේෂය ස්වර නම් වේ. එලෙස තනිව හැසිරිය හැකි බැවින් මෙම අක්ෂරයන්ට පණ ඇති සේ සලකා "පණකුරු" හෙවත් "ප්‍රාණාක්ෂර"ලෙසින් ද හැඳින්වේ. ස්වකීය රාවයක් හෙවත් තමන්ගේ ම හඬක් මෙම අක්ෂරයන්ට ඇත.</p>
                            <p>ස්වරවල ප්‍රභේද :- සියලු ම ස්වර,</p>
                            <ul>
                            <li>1.	හ්‍රස්ව ස්වර ("හ්‍රස්ව ස්වර" යටතේ වැඩිදුර විස්තර ඇත.)</li><hr/>
                            <li>2.	දීර්ඝ ස්වර  ("දීර්ඝ ස්වර" යටතේ වැඩිදුර විස්තර ඇත.)</li><hr/>
                            </ul>
                                    
                            <p>යනුවෙන් මූලික කොටස් දෙකකට බෙදා දැක්විය හැකි වේ. ඊට අමතරව ස්වර මාලාවේ දක්නට ලැබෙන තවත් ප්‍රභේදයන් කිහිපයකි. එනම්,</p>
                            

                                   <a className='moreStudy' href='#'>වැඩිදුර අධ්‍යනය කරන්න ➢</a>
                        </div>
                        
                </div>
        }
        {
            showViyan && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent MAINswyawiyaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowViyan(!showViyan)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ව්‍යංජන</h1>
                            <p>භාෂාවේ තනිව හැසිරීමට නොහැකි අක්ෂර විශේෂයකි. මේවා සාමාන්‍යයෙන් පවතින්නේ හල් කිරීම සහිතව ය. හල් කිරීම යනු ශුද්ධ ව්‍යඤ්ජනයක් හෙවත් ස්වරයක් ආරූඪ නොකරන ලද ව්‍යඤ්ජනයක් හඳුනාගැනීමට ඇති මූලික ලක්ෂණයයි. හල් කිරීම සහිතව පවතින බැවින් "හලකුරු" යන්න මෙම අකුරුවලට නමකි. භාෂාවේ තනිව හැසිරීමට නොහැකි බැවින් හෙවත් පණ නැති බැවින් "මළකුරු" යනුවෙන් ද, පවතින්නේ ගතක් හෙවත් ශරීරයක් පමණක් බැවින් "ගතකුරු" හෙවත් "ගාත්‍රාක්ෂර" යනුවෙන් ද මෙම අක්ෂරයෝ සාමාන්‍යයෙන් හැඳින්වෙති. නූතන සිංහල අක්ෂර මාලාවේ ව්‍යඤ්ජන අක්ෂර 42 කි. ඒවා පහත දැක්වේ.</p>
                        </div>
                        
                </div>
        }

{
            showVargak && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent PinkWargaMaint'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowVargak(!showVargak)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>වර්ගාක්ෂර</h1>
                            <p>සංස්කෘත භාෂා ආශ්‍රයෙන් සිංහලයට පැමිණි වර්ගාක්ෂර යන ප්‍රභේදය පැහැදිලි වශයෙන් ම 'ක' සිට 'ම' තෙක් ඇති අක්ෂර විසි පහක් බව සංස්කෘතයේ ප්‍රමාණ කර ඇත්තකි. එම මූලික බෙදීම සිදුකර ඇත්තේ අක්ෂර උප්පත්ති ස්ථාන පිළිබඳ සැලකිල්ල යොමු කිරීමෙනි. මෙය මූලික වශයෙන් බෙදා ඇති වර්ග සංඛ්‍යාව පහකි. එනම්, </p>
                            <ul>
                                <li>ක'වර්ගය	- ක, ඛ, ග, ඝ, ඞ</li>
                                <li> ච'වර්ගය	- ච, ඡ, ජ, ඣ, ඤ</li>
                                <li>ට' වර්ගය	- ට, ඨ, ඩ, ඪ, ණ</li>
                                <li>ත'වර්ගය	- ත, ථ, ද, ධ, න</li>
                                <li>ප' වර්ගය	- ප, ඵ, බ, භ, ම</li>

                            </ul>
                            <p>නමුත් එකී උප්පත්ති ස්ථානයන් ම පදනම් කරගනිමින් මෑතක දී සිංහල හෝඩියට අලුතෙන් එක් කරන ලද ඟ, ඦ, ඬ, ඳ, ඹ යන අක්ෂර පහද මෙම අක්ෂර ගණයට ම එක් කළ යුතු බව වර්තමාන වියරණ ඇදුරෝ පවසති. මෙහිදී මූලික වශයෙන් ම සැලකිල්ල යොමු වී ඇත්තේ අක්ෂර උපතේ දී සිදුවන ස්පර්ෂ, අස්පර්ෂ භේදයයි. මෙම අක්ෂර තිහම ස්පර්ෂ සේ සලකා එම වර්ගයට ඇතුළත් කර ඇත.( මේ පිළිබඳ දීර්ඝ විස්තරයක් අපගේ වර්ණමාලාව කොටසට ඇතුළත් කර ඇත)</p>
                                   
                        </div>
                        
                </div>
        }

{
            showKantaja && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentVargasTitle'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowKantaja(!showKantaja)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>කණ්ඨජාක්ෂර</h1>
                            <p>දිවෙහි මුල උගුරෙහි ස්පර්ෂ වීමෙන් හෙවත් උගුර කරා සමීප වීමෙන් ජනිත වන අක්ෂර කණ්ඨජාක්ෂර නම් වේ. උගුර ඇසුරෙන් හටගන්නා අක්ෂර පහත පරිදි වේ.</p>

                                   <ul>
                                        <li>ස්වර		- අ, ආ, ඇ, ඈ</li>
                                        <li>ව්‍යඤ්ජන	- ක, ඛ, ග, ඝ, ඞ, ඟ, හ, (අ)ං, (අ)ඃ</li>
                    
                                   </ul>
                                   <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }
        {
            showThaluja && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentVargasTitle'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowThaluja(!showThaluja)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>තාලුජාක්ෂර</h1>
                            <p>දිවෙහි මැද තල්ලෙහි ස්පර්ෂ වීමෙන් හෙවත් තල්ල කරා සමීප වීමෙන් ජනිත වන අක්ෂර තාලුජාක්ෂර නම් වේ. තාලුජාක්ෂර පහත පරිදි වේ.</p>
                        

                                   <ul>
                                        <li>ස්වර		- ඉ, ඊ</li>
                                        <li>ව්‍යඤ්ජන	- ච, ඡ, ජ, ඣ, ඤ, ඦ, ය, ශ</li>
                                        
                                   </ul>
                                   <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }
        {
            showMurdaja && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentVargasTitle'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowMurdaja(!showMurdaja)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>මුර්ධජාක්ෂර</h1>
                            <p>දිවෙහි තුඩ හෙවත් දිවෙහි අග මුදුනෙහි ස්පර්ෂ වීමෙන් හෙවත් මුදුන කරා සමීප වීමෙන් ජනිත වන අක්ෂර මුර්ධජාක්ෂර නම් වේ. මුර්ධජාක්ෂර පහත පරිදි වේ.</p>
                            

                                   <ul>
                                        <li>ස්වර		- ඍ, ඎ</li>
                                        <li>ව්‍යඤ්ජන	- ට, ඨ, ඩ, ඪ, ණ, ඬ, ර, ළ, ෂ</li>
                                        
                                   </ul>
                                   <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }
        {
            showDanthaja && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentVargasTitle'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowDanthaja(!showDanthaja)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>දන්තජාක්ෂර</h1>
                            <p>දිවෙහි අග හෙවත් දිව් තුඩ උඩු දත් ඇන්ද සහ උඩු දත් වැටියෙහි ස්පර්ෂ වීමෙන් ජනිත වන අක්ෂර දන්තජාක්ෂර නම් වේ. දන්තජාක්ෂර පහත පරිදි වේ.</p>
                            

                                   <ul>
                                        <li>ස්වර		- ඏ, ඐ</li>
                                        <li>ව්‍යඤ්ජන	- ත, ථ, ද, ධ, න, ඳ, ල, ස</li>
                                        
                                   </ul>
                                   <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }
        {
            showOshtaja && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentVargasTitle'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowOshtaja(!showOshtaja)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඕෂ්ඨජාක්ෂර</h1>
                            <p>යටි තොල උඩු තොල කරා පැමිණීමෙන් හෙවත් ස්පර්ශ වීමෙන් හට ගන්නා අක්ෂර ඕෂ්ඨජ අක්ෂර නම් වේ. ඕෂ්ඨජාක්ෂර පහත පරිදි වේ.</p>
                            

                                   <ul>
                                        <li>ස්වර		- උ, ඌ</li>
                                        <li>ව්‍යඤ්ජන	- ප, ඵ, බ, භ, ම, ඹ</li>
                                        
                                   </ul>
                                   <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showLetNotInc && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent notincludeContent'>
                       <div className='MyOkBtn'><a onClick={()=>setShowLetNotInc(!showLetNotInc)}>OK</a></div>
                            <p>මෙම අක්ෂරය මෙම අක්ෂර කාණ්ඩයට ඇතුලත් නොවේ..!</p>
                            <p>This character is not included in this character category..!</p>
                        </div>
                        
                </div>
        }
        {
            showCatNotInc && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent notincludeContent'>
                       <div className='MyOkBtn'><a onClick={()=>setShowCatNotInc(!showCatNotInc)}>OK</a></div>
                            <p>මෙම තීරුවේ මෙම අක්ශර ප්‍රවර්ගයට අයත් අක්ශර මේ මොහොතේ අක්රියව පවතී...!</p>
                            <p>The characters belonging to this character category in this column are currently inactive..!</p>
                        </div>
                        
                </div>
        }
                {
            showDwijakshara && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentVargasTitle'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowDwijakshara(!showDwijakshara)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                        <h1>ද්විජාක්ෂර</h1>
                            <p>මෙහි කලින් දක්වා ඇති කණ්ඨජ, තාලුජ, මූර්ධජ, දන්තජ හා ඕෂ්ඨජ යන සියලු අක්ෂර එක් ස්ථානයක් පමණක් ඇසුරු කරගනිමින් උපදනා බැවින් "ඒකජාක්ෂර" නම් වේ. ද්විජාක්ෂර යනු මුඛයෙහි ස්ථාන දෙකක් පාදක කරගනිමින් හටගන්නා අක්ෂරයන් ය. එලෙස හටගන්නා අක්ෂර වර්ත කිහිපයකි.</p>
                            <ul>
                                        <li>1.	කණ්ඨතාලුජාක්ෂර<br/>කණ්ඨතාලුජාක්ෂර යනු උගුර සහ තල්ල ඇසුරෙන් හටගන්නා අක්ෂරයි. ඊට අයත් වන්නේ "එ, ඒ, ඓ" යන අක්ෂර තුනයි. අතීතයේ දී "ඇ, ඈ" යන ස්වර දෙක ද මෙම ගණයට ඇතුළත් කෙරිණි. නමුත් වත්මන් වියරන ඇදුරෝ එම අක්ෂර කණ්ඨජාක්ර ගණයට ඇතුළත් කරති.</li><hr/>
                                        <li>2.	කණ්ඨෞෂ්ඨජ අක්ෂර<br/>උගුර සහ තොල් ඇසුරෙන් හටගන්නා අක්ෂරයි. ඊට අයත් වන්නේ "ඔ, ඕ, ඖ" යන අක්ෂර තුනයි.</li><hr/>
                                        <li>3.	දන්තෞෂ්ඨජ අක්ෂර<br/>දත් සහ තොල් ඇසුරෙන් හට ගන්නා අක්ෂරයි. "ව" සහ "ෆ" යන අක්ෂර දෙක මෙම ගණයට අයත් වේ.</li><hr/>
                                        
                                   </ul>
                        </div>
                        
                </div>
        }

        </div>
        
        
    </div>
  )
}

export default NewSinhalaHodiya