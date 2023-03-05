import React, { useEffect, useState } from 'react'

const GoToTop = () => {
    const [isVisible, setVisible] = useState(false);

    const gototop = () => {
        window.scrollTo({top:0, left:0, behavior: "smooth"});
    };

    const listenToScroll = () => {
        

        let heightToHide =250;
        const winScroll = 
        document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHide){
            setVisible(true);
        }else{
            setVisible(false);
        }

    };
   

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    },[]);

  return (

    <div>

        {isVisible &&(

            <div className='top-btn' data-aos="fadeInUp" onClick={gototop}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <i class="fa-solid fa-up-long"></i>
            </div> 

        )}

     </div>

  );
};


export default GoToTop;