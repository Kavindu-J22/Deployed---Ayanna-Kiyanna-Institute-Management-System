import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'
import Header from '../headers/Header'

import Viyabox from './Other/ViyaBox'
import Sahithyabox from './Other/SahithyaBox/LitboxMain'

import Gadya from './Other/SahithyaBox/Gadya'
import Padya from './Other/SahithyaBox/Padya'
import Natya from './Other/SahithyaBox/Natya'
import Nuthanagadya from './Other/SahithyaBox/Nuthanagadya'
import AksharaMalawa from './Other/Aksharamalawa/Akshara'
import Paperbank from './Other/PaperBank/Paperbank'
import PselectGrade from './Other/PaperBank/PaperSelectGrade'
import OnlineExams from './Other/OnlineExams/OnlineExam'
import Oegrade from './Other/OnlineExams/OEgrade'
import Olonline from './Other/OnlineExams/OeOlExList'
import AlOnline from './Other/OnlineExams/OeAlExList'
import LitOnline from './Other/OnlineExams/OeLitExList'
import Qtgrade from './Other/QuickTests/QtGrade'
import Qtnine from './Other/QuickTests/QtlistNine'
import QtTen from './Other/QuickTests/QtlistTen'
import QtEleven from './Other/QuickTests/QtlistEleven'
import QtAl from './Other/QuickTests/QtlistAL'
import Emagazine from './Other/Emagazine/Emagazine'
import Rasavindana from './Other/Rasavindana/Rasavindana'
import TeacherBook from './Other/TeachersBook/Teacherbook'
import Vishayanirdesha from './Other/TeachersBook/VNgradelist'
import Guruathpoth from './Other/TeachersBook/GAgradelist'
import ClassDetails from './Other/ClassDetails/Classdetaitls'
import StudentColors from './Other/StudentColours/StudentColors'
import PhotoBucket from './Other/PhothBucket/Photobucket'
import VideoLessons from './Other/VideoLessons/Videolessons'
import PaperStructures from './Other/PaperStructures/PaperStructures'
import SpeOthers from './Other/SpeOthers/SpeOthers'
import NewSinhalaHodiya from './Other/Aksharamalawa/NewSinhalaHodiya'

// Main Grade Selector

import MainGradeNine from './Other/MainGradeSelector/Grade9/MainGradenine'
import MainGradeTen from './Other/MainGradeSelector/Grade10/MainGradeTen'
import MainGradeEleven from './Other/MainGradeSelector/Grade11/MainGradeEleven'
import MainGradeAL from './Other/MainGradeSelector/AdvanceLevel/MainAL'
import MainGradeLit from './Other/MainGradeSelector/Lit/MainLit'

// header Re-Derects

import NewHeader from '../headers/NewHeader'
import Landingpage from '../mainpages/LandingPage/LandingPage'
import About from './LandingPage/About'
import Sehome from './LandingPage/Sehome'
import Boxes from './Other/Boxes'
import Products from './products/Products'
import ProgressBar from './LandingPage/ProgressBar'
import Contactfooter from './LandingPage/contactFooter'



import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path="/Header/NewHeader" exact component={NewHeader} />


            <Route path="/boxes/viyabox" exact component={isLogged ? Viyabox :Login} />
            <Route path="/boxes/litbox" exact component={isLogged ? Sahithyabox :Login} />
            <Route path="/boxes/AksharaMalawa" exact component={isLogged ? AksharaMalawa :Login} />
            <Route path="/boxes/Paperbank" exact component={isLogged ? Paperbank :Login} />
            <Route path="/boxes/OnlineExams" exact component={isLogged ? OnlineExams :Login} />
            <Route path="/boxes/Qtgrade" exact component={isLogged ? Qtgrade :Login} />
            <Route path="/boxes/Emagazine" exact component={isLogged ? Emagazine :Login} />
            <Route path="/boxes/Rasavindana" exact component={isLogged ? Rasavindana :Login} />
            <Route path="/boxes/TeacherBook" exact component={isLogged ? TeacherBook :Login} />
            <Route path="/boxes/ClassDetails" exact component={isLogged ? ClassDetails :Login} />
            <Route path="/boxes/StudentColors" exact component={isLogged ? StudentColors :Login} />
            <Route path="/boxes/PhotoBucket" exact component={isLogged ? PhotoBucket :Login} />
            <Route path="/boxes/VideoLessons" exact component={isLogged ? VideoLessons :Login} />
            <Route path="/boxes/PaperStructures" exact component={isLogged ? PaperStructures :Login} />
            <Route path="/boxes/SpeOthers" exact component={isLogged ? SpeOthers :Login} />


            <Route path="/boxes/MainGradeNine" exact component={isLogged ? MainGradeNine :Login} />
            <Route path="/boxes/MainGradeTen" exact component={isLogged ? MainGradeTen :Login} />
            <Route path="/boxes/MainGradeEleven" exact component={isLogged ? MainGradeEleven :Login} />
            <Route path="/boxes/MainGradeAL" exact component={isLogged ? MainGradeAL :Login} />
            <Route path="/boxes/MainGradeLit" exact component={isLogged ? MainGradeLit :Login} />


            <Route path="/sahithya/gadya" exact component={Gadya} />
            <Route path="/sahithya/padya" exact component={Padya} />
            <Route path="/sahithya/natya" exact component={Natya} />
            <Route path="/gadya/Nuthanagadya" exact component={Nuthanagadya} />
            <Route path="/sinhalapaper/selectgrade" exact component={PselectGrade} />
            <Route path="/OnlineExam/Oegrade" exact component={Oegrade} />
            <Route path="/OnlineExam/LitOnline" exact component={LitOnline} />
            <Route path="/Oegrade/Olonline" exact component={Olonline} />
            <Route path="/Oegrade/AlOnline" exact component={AlOnline} />
            <Route path="/Qtgrade/Qtnine" exact component={Qtnine} />
            <Route path="/Qtgrade/QtTen" exact component={QtTen} />
            <Route path="/Qtgrade/QtEleven" exact component={QtEleven} />
            <Route path="/Qtgrade/QtAl" exact component={QtAl} />
            <Route path="/TeacherBook/Vishayanirdesha" exact component={Vishayanirdesha} />
            <Route path="/TeacherBook/Guruathpoth" exact component={Guruathpoth} />

            {/* aksharamalawa */}
            <Route path="/aksharamalawa/newHodya" exact component={NewSinhalaHodiya} />




            <Route path="/Home/Landingpage" exact component={Landingpage} />
            <Route path="/Home/About" exact component={About} />
            <Route path="/Home/Info" exact component={Sehome} />
            <Route path="/Home/Service" exact component={Boxes} />
            <Route path="/Home/Products" exact component={Products} />
            <Route path="/Home/ProgressBar" exact component={ProgressBar} />
            <Route path="/Home/Contactfooter" exact component={Contactfooter} />

            
            <Route path="/login" exact component={isLogged ? Header : Login} />
            <Route path="/register" exact component={isLogged ? Header : Register} />
            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />



            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
