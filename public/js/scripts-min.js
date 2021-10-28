"use strict";var buttonDarkMode=document.getElementById("buttonDarkMode"),prefresDarkScheme=window.matchMedia("(prefers-color-scheme: dark)"),body=document.getElementById("body"),buttonDarkModeIcon=document.getElementById("buttonDarkModeIcon"),buttonDarkModeText=document.getElementById("buttonDarkModeText");function changeMode(){"dark_mode"==buttonDarkModeIcon.innerHTML?(buttonDarkModeText.innerHTML="Modo Claro",buttonDarkModeIcon.innerHTML="light_mode"):(buttonDarkModeText.innerHTML="Modo Oscuro",buttonDarkModeIcon.innerHTML="dark_mode")}"dark"==localStorage.getItem("mode")?body.classList.toggle("dark-mode"):"light"==localStorage.getItem("mode")&&body.classList.toggle("light-mode"),prefresDarkScheme.matches&&changeMode(),buttonDarkMode&&buttonDarkMode.addEventListener("click",(function(){var e;changeMode(),prefresDarkScheme.matches?(body.classList.toggle("light-mode"),e=body.classList.contains("light-mode")?"light":"dark"):(body.classList.toggle("dark-mode"),e=body.classList.contains("dark-mode")?"dark":"light"),localStorage.setItem("mode",e)}));var navbarHeader=document.getElementById("navbar-header"),initialScroll=window.pageYOffset,mainScroll=document.querySelector("main").offsetTop,hamburguer=document.getElementById("hamburguer");function disableScroll(){var e=window.scrollX,t=window.scrollY;window.onscroll=function(){window.scrollTo(e,t)}}function enableScroll(){window.onscroll=null}hamburguer.addEventListener("click",(function(){document.querySelector(".hamburguer__div-center").classList.toggle("hamburguer--simple"),navbarHeader.classList.toggle("navbar-header--hamburguer"),navbarHeader.classList.contains("navbar-header--hamburguer")?disableScroll():enableScroll()})),window.addEventListener("scroll",(function(){if(!navbarHeader.classList.contains("navbar-header--hamburguer")){var e=window.pageYOffset;e>=initialScroll&&e>=mainScroll?(navbarHeader.classList.add("navbar-header--hide"),navbarHeader.classList.add("navbar-header--scroll")):e<=mainScroll?navbarHeader.classList.add("navbar-header--hide"):navbarHeader.classList.remove("navbar-header--hide"),0==e&&(navbarHeader.classList.remove("navbar-header--scroll"),navbarHeader.classList.remove("navbar-header--hide")),initialScroll=e}}));var searchButtonNavBar=document.getElementById("searchButtonNavBar"),search=document.querySelector(".search"),searchButtonClose=document.getElementById("searchButtonClose");searchButtonNavBar.addEventListener("click",(function(){search.classList.toggle("search--visible"),search.classList.contains("search--visible")?disableScroll():enableScroll()})),searchButtonClose.addEventListener("click",(function(){search.classList.toggle("search--visible"),search.classList.contains("search--visible")?disableScroll():enableScroll()}));var swiperHeader=document.querySelector(".swiper-header");if(swiperHeader){var swiper=new Swiper(swiperHeader,{centeredSlides:!0,slidesPerView:1,spaceBetween:30,grabCursor:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:!1,keyboard:!0});swiper=new Swiper(".swiper-index-main",{centeredSlides:!0,slidesPerView:"auto",spaceBetween:30,grabCursor:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0,type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:!1,keyboard:!0})}var userButtonNavBar=document.getElementById("userButtonNavBar"),user=document.querySelector(".user"),userButtonClose=document.getElementById("userButtonClose"),singInLogIn=document.getElementById("singInLogIn"),singIn=document.getElementById("singIn"),logIn=document.getElementById("logIn"),userButtonGoBack=document.getElementById("userButtonGoBack");userButtonNavBar.addEventListener("click",(function(){user.classList.toggle("user--visible"),user.classList.contains("user--visible")?disableScroll():enableScroll()})),userButtonClose.addEventListener("click",(function(){user.classList.toggle("user--visible"),user.classList.contains("user--visible")?disableScroll():enableScroll()})),singInLogIn.addEventListener("click",(function(){userButtonGoBack.classList.toggle("opacity"),singIn.classList.toggle("display-none"),logIn.classList.toggle("display-none")})),userButtonGoBack.addEventListener("click",(function(){userButtonGoBack.classList.toggle("opacity"),singIn.classList.toggle("display-none"),logIn.classList.toggle("display-none")}));var getScrollBarWidth=function(){return innerWidth-document.documentElement.clientWidth};document.documentElement.style.setProperty("--scroll-bar",getScrollBarWidth());