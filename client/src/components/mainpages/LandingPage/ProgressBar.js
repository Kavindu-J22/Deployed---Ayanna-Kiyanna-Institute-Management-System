import React from 'react'
import "./progressBar.css"

function ProgressBar() {
    let valueDisplaycount = document.querySelectorAll(".upnums")
    let contInterval = 4000;

    valueDisplaycount.forEach((valueDisplaycount) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplaycount.getAttribute("data-val"));

        let duration = Math.floor(contInterval/endValue);
        let counter = setInterval(function() {
            startValue += 1;
            valueDisplaycount.textContent = startValue;
            if(startValue == endValue) {
                clearInterval(counter);
            }
        },duration);
        
    });

  return (
    <div className='myProgressBar' id='progressbarAvailable'>
        <div className='myProgressBar-wrapper' data-aos="slide-up">

            <div className='myProgressBar-container'>
                <i class="fa-solid fa-users"></i>
                <div className='forPlussmark'><span className='upnums' data-val="2500">000</span><p>+</p></div>
                <span className='upnumsText'>Students</span>
            </div>
            <div className='myProgressBar-container'>
                <i class="fa-solid fa-book-open"></i>
                <div className='forPlussmark'><span className='upnums' data-val="550">000</span><p>+</p></div>
                <span className='upnumsText'>Books and Documents</span>
            </div>
            <div className='myProgressBar-container'>
                <i class="fa-solid fa-crown"></i>
                <div className='forPlussmark'><span className='upnums' data-val="20">00</span><p>+</p></div>
                <span className='upnumsText'>Experience(Years)</span>
            </div>
            <div className='myProgressBar-container'>
                <i class="fa-solid fa-person-chalkboard"></i>
                <div className='forPlussmark'><span className='upnums' data-val="25">00</span><p>+</p></div>
                <span className='upnumsText'>All Classes</span>
            </div>

        </div>
    </div>
  )
}

export default ProgressBar