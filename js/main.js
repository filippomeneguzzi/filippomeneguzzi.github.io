/* loader page script */
document.addEventListener("DOMContentLoaded", ()=>{
    //imposto un timer di durata per la loader page
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 3000);

    function hideLoader(){
        const contentLoader = document.getElementById("contentLoader");
        contentLoader.style.display = "none";
        const loaderPage = document.getElementById("loaderPage");
        loaderPage.style.display = "none";
    }

    function showContent(){
        const homePage = document.getElementById("home");
        homePage.style.display = "block";
        const containerSkill = document.getElementById("mySkill");
        containerSkill.style.display = "block";
        const aboutMe = document.getElementById("aboutMe");
        aboutMe.style.display = "flex";
        const footer = document.getElementById("footer");
        footer.style.display = "flex";
        /* const slide = document.querySelectorAll(".containerSlide");
        slide.style.display = "flex"; */
    }
})


// hamburger menu
const containerNav = document.querySelector('.linkContainer');
const linkNav = document.querySelectorAll(".link");
const hamburger = document.getElementById('hamburger');

//show menu
hamburger.addEventListener('click',()=>{
    containerNav.classList.toggle('showMenu');
})
//chiude il menu ogni volta che clicco un link
linkNav.forEach((link)=>{
    link.addEventListener("click",()=>{
        containerNav.classList.toggle("showMenu");
    })
})
