
function cookieParse(cookie){
    var arrCookie = cookie.split('; ');

   var newArr =  arrCookie.map(function(elem){
       var [key, value] =  elem.split("=");
       return {
           key,
           value
       }
    })

    return newArr;
}

function getCookie(key){
    let cookieArr = cookieParse(document.cookie);
    let curCookie = cookieArr.find(function(elem){
        return elem.key === key
    })
    return (curCookie === undefined || curCookie.value=='0')? 0:1
}


let cookieBtn = document.getElementsByClassName('iconBlind')[0]
cookieBtn.addEventListener('click', function () { 
    document.cookie = `BlindMode=${(getCookie('BlindMode'))?0:1}`;
    console.log(document.cookie);
    setMode();
 })

 var gallery = document.querySelector(".gallery");
 var lines = document.querySelectorAll(".line");
 var nav = document.querySelector("nav");
 var mainContent = document.querySelector(".mainContent");
 var aside = document.querySelector("aside");
 var header = document.querySelector('header');
 var footer = document.querySelector('footer');
 var modeBlind = document.querySelector('.contactCompany .iconBlind  p');


 function setMode(){
    if(getCookie('BlindMode')){
        document.body.classList.add('bodyPrt');
        gallery.classList.add('galleryBlind');
        nav.classList.add('navBlind');
        mainContent.classList.add('mainContentBlind');
        aside.classList.add('asideBlind');
        header.classList.add('headerBlind');
        footer.classList.add('footerBlind');
        modeBlind.innerText = "обычный режим"
        for( let i = 0; i < lines.length; i++){
            lines[i].classList.add('lineBlind');
        }

    }else{
        document.body.classList.remove('bodyPrt');
        gallery.classList.remove('galleryBlind');
        nav.classList.remove('navBlind');
        mainContent.classList.remove('mainContentBlind');
        aside.classList.remove('asideBlind');
        header.classList.remove('headerBlind');
        footer.classList.add('footerBlind');
        modeBlind.innerText = "для слабовидящих"
        for( let i = 0; i < lines.length; i++){
            lines[i].classList.remove('lineBlind');
        }
    }
   
 }

 setMode()


