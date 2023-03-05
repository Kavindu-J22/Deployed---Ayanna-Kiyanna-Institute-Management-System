import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from '../../GlobalState'
// import Menu from './icon/menu.svg'
// import Close from './icon/close.svg'
import {Link} from 'react-scroll'
import axios from 'axios'
import swal from 'sweetalert'
import Landingpage from "../mainpages/LandingPage/LandingPage"
import About from "../mainpages/LandingPage/About"
import Sehome from "../mainpages/LandingPage/Sehome"
import Boxes from "../mainpages/Other/Boxes"
import Products from '../mainpages/products/Products'
import Contactfooter from '../mainpages/LandingPage/contactFooter'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    // const li = document.querySelectorAll('.navLinks');
    // const sec = document.querySelectorAll('section');

    // const activeStatusMenu = () => {
    //     let len = sec.length;
    //     while(--len && window.scrollY <= sec[len].offsetTop){}
    //     li.forEach(ltx => ltx.classList.remove('activeMenu'));
    //     li[len].classList.add('activeMenu');
    // };

    // window.addEventListener("scroll",activeStatusMenu)
    

    const [show, setShow] = useState(true)
    const contralHeader = ()=>{
        if(window.scrollY>100) {
            setShow(false)
        }else{
            setShow(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',
        contralHeader)
        return () => {
            window.removeEventListener('scroll',
            contralHeader)
        }
    },[])

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        swal({
            title: "Done!",
            text: "You are now loged out.!",
            icon: "info",
            buttons: false,
            timer: 1000,
        })
        .then((value) => {
            window.location.href = "/";
        });

    }

    const adminRouter = () =>{
        return(
            <>
                <li><a href="/create_product">Add Items</a></li>
                <li><a href="/category">Add Categories</a></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                
                <li><a to="/" onClick={logoutUser}>Logout</a></li>
                
            </>
        )
    }

    return (
        <div>

            <div className={`myheadtopabs ${show && 'myheadtopabs_styles'}`}>

                <div className="logo">
                    <h1>
                        <a href="/">{isAdmin ? '-Admin-' : '“අයන්න කියන්න”'}</a>
                    </h1>
                </div>

                <ul>
                    <Link className='navLinks' to="fristhomeavailable" spy={true} smooth={true} offset={0} duration={1000}><li>{isAdmin ? 'Home' : 'Home'}</li></Link>
                    <Link className='navLinks' to="downfristabout" spy={true} smooth={true} offset={0} duration={1000}><li>{isAdmin ? 'About' : 'About'}</li></Link>
                    <Link className='navLinks' to="myInfoavailable" spy={true} smooth={true} offset={0} duration={500}><li>{isAdmin ? 'Info' : 'Info'}</li></Link>
                    <Link className='navLinks' to="serviceboxesavailable" spy={true} smooth={true} offset={0} duration={500}><li>{isAdmin ? 'Services' : 'Services'}</li></Link>
                    <Link className='navLinks' to="foryouBoxesavailable" spy={true} smooth={true} offset={0} duration={1000}><li>{isAdmin ? 'for you' : 'for you'}</li></Link>
                    <Link className='navLinks' to="contactboxavailable" spy={true} smooth={true} offset={0} duration={500}><li>{isAdmin ? 'Contact' : 'Contact'}</li></Link>

                    {isAdmin && adminRouter()}

                    {
                        isLogged ? loggedRouter() : <li><a href="/login">Login ✦ Register</a></li>
                    }

                </ul> 
            </div>
            
            <div>
                <Landingpage/>
            </div>

            <div>
                <About/>
            </div>

            <div>
                <Sehome/>
            </div>

            <div>
                <Boxes/>
            </div>

            <div>
                <Products/>
            </div>

            <div>
                <Contactfooter/>
            </div>
            
        </div>
    )
}

export default Header
