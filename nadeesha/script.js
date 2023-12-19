      
//rightclick
document.oncontextmenu =new Function("return false;")
      
      
 //home screen animation

let circle1 = document.querySelector('.circle1');

window.addEventListener('scroll', function() {
    let value= window.scrollY;

    circle1.style.marginTop = value * -1.5+ 'px';
   
    
})
  
  
 
//document.oncontextmenu =new Function("return false;")
 
//darkmode and light mode
        let mode = localStorage.getItem('mode') || 0;

function updateStyles() {
    switch (mode) {
        case '0':
          document.getElementById('body').style.color = '#AAAEB6';
          document.body.style.backgroundColor= '#202124';
          
          document.getElementById('a1').style.color = 'white';
          document.getElementById('a2').style.color = 'white';
          document.getElementById('a3').style.color = 'white';
          document.getElementById('a4').style.color = 'white';
          document.getElementById('a5').style.color = 'white';
         
          document.getElementById('mode1').className = 'bi bi-brightness-high-fill';
          document.getElementById('circle').style.background = 'linear-gradient(90deg, #3d3d7a, #512b77)';
          document.getElementById('circle').style.backgroundSize = '300% 300%';
          document.getElementById('mode1').style.color = 'white';
          document.getElementById('greeting').style.color = '#AAAEB6';
          document.getElementById('topic').style.color='#cdd9fa';
          document.getElementById('homeArrow').style.color = '#ebebeb';
          document.getElementById('titleTwo').style.color='#cfcfcf';
          document.getElementById('subTitle1').style.color='#cfcfcf';
          document.getElementById('titleThree').style.color='#cfcfcf';
          document.getElementById('subTitle2').style.color='#cfcfcf';
          document.getElementById('titleFour').style.color='#cfcfcf';


          document.getElementById('mySkills').style.color = '#AAAEB6';
          document.getElementById('im_a').style.color = '#ebebeb';
          document.getElementById('wrapper').style.color = '#AAAEB6';
          document.querySelector('input').style.background = '#252930';
          document.getElementById('email_id').style.background = '#252930';
          document.querySelector('textarea').style.background = '#252930';
          document.querySelector('input').style.color = '#AAAEB6';
          document.querySelector('textarea').style.color = '#AAAEB6';
          document.getElementById('email_id').style.color = '#AAAEB6';
          document.getElementById('a6').style.color = 'white';
          document.getElementById('a7').style.color = 'white';
          document.getElementById('a8').style.color = 'white';
          document.getElementById('a9').style.color = 'white';
          document.getElementById('a10').style.color = 'white';
          document.getElementById('a11').style.color = 'white';
          document.getElementById('a12').style.color = 'white';
          document.getElementById('a13').style.color = 'white';
          document.getElementById('a14').style.color = 'white';
          document.querySelector('footer').style.background = '#372d43';
          document.querySelector('footer').style.color = 'white';
          document.getElementById('footerLink').style.color = '#e5afff';
            // ... (other style updates)
            break;

        case '1':
          document.getElementById('body').style.color = 'black';
          document.body.style.backgroundColor= '#ffffff';
          document.getElementById('a1').style.color = 'black';
          document.getElementById('a2').style.color = 'black';
          document.getElementById('a3').style.color = 'black';
          document.getElementById('a4').style.color = 'black';
          document.getElementById('a5').style.color = 'black';
          
          document.getElementById('mode1').className = 'bi bi-moon-fill';
          document.getElementById('circle').style.background = 'linear-gradient(to right, #b993d6, #8ca6db';
          document.getElementById('circle').style.backgroundSize = '300% 300%';
          
          document.getElementById('mode1').style.color = 'black';
          document.getElementById('greeting').style.color = ' #7E1F86';
          document.getElementById('topic').style.color='black';
          document.getElementById('titleTwo').style.color='black';
          document.getElementById('subTitle1').style.color='black';
          document.getElementById('titleThree').style.color='black';
          document.getElementById('subTitle2').style.color='black';
          document.getElementById('titleFour').style.color='black';

          document.getElementById('mySkills').style.color = 'black';
          document.getElementById('im_a').style.color = 'black';
          document.getElementById('wrapper').style.color = ' rgb(24, 13, 132)';
          document.getElementById('homeArrow').style.color = 'black';
          document.querySelector('input').style.background = 'rgba(210, 210, 210, 0.39)';
          document.getElementById('email_id').style.background = 'rgba(210, 210, 210, 0.39)';
          document.querySelector('textarea').style.background = 'rgba(210, 210, 210, 0.39)';
          document.querySelector('input').style.color = 'black';
          document.querySelector('textarea').style.color = 'black';
          document.getElementById('email_id').style.color = 'black';
          document.getElementById('a6').style.color = 'black';
          document.getElementById('a7').style.color = 'black';
          document.getElementById('a8').style.color = 'black';
          document.getElementById('a9').style.color = 'black';
          document.getElementById('a10').style.color = 'black';
          document.getElementById('a11').style.color = 'black';
          document.getElementById('a12').style.color = 'black';
          document.getElementById('a13').style.color = 'black';
          document.getElementById('a14').style.color = 'black';
          document.querySelector('footer').style.background = '#ceb3ff';
          document.querySelector('footer').style.color = 'black';
          document.getElementById('footerLink').style.color = '#730087';
         
            // ... (other style updates)
            break;
    }
}

function changeMode() {
    mode = mode === '0' ? '1' : '0';
    localStorage.setItem('mode', mode);
    updateStyles();
}

// Call updateStyles on page load to apply the styles
updateStyles();


  
  //scrollbar
  let progress = document.getElementById('progressbar');
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){
      let progressHeight= (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + '%';
  }

//nav
      
        const navbar = document.querySelector('nav');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
 if (currentScrollY < lastScrollY) { navbar.style.opacity = 1; navbar.classList.remove('hidden'); } else { navbar.style.opacity = 0; navbar.classList.add('hidden'); } lastScrollY = currentScrollY; });

  







  // AOS
 AOS.init({
    duration: 1000,
})


//emailservice




    function SendMail(){
        var params ={
            from_name : document.getElementById('fullName').value,
            email_id : document.getElementById('email_id').value,
            message : document.getElementById('message').value,
        }
        emailjs.send('service_2zb1ejr', 'template_vl1bkyi', params).then(function(res){
            alert('Success ' + res.status);
        })
    }
      
      
      
       //topBtn

    "use strict";

var sttElem = document.querySelector('.stt');
var screanHeight = window.innerHeight;

var sttScroll = function sttScroll() {
  document.addEventListener('scroll', function (e) {
    if (screanHeight<= window.scrollY) {
      sttElem.classList.add('stt__active');
    } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
      sttElem.classList.remove('stt__active');
      sttElem.style.pointerEvents = 'auto';
    }
  });
};

var sttClick = function sttClick() {
  sttElem.addEventListener('click', function () {
    var docHeight = window.scrollY;
    var progress = 0;
    var position = docHeight;
    var speed = 5; // When increasing this value. The scrolling speed will increase

    sttElem.style.pointerEvents = 'none';

    var sttAnim = function sttAnim() {
      progress += 1;
      position -= progress * speed;
      window.scrollTo(0, position);

      if (position > 0) {
        requestAnimationFrame(sttAnim);
      }
    };

    requestAnimationFrame(sttAnim);
  });
};

var sttFunc = function sttFunc() {
  sttScroll();
  sttClick();
};

document.addEventListener('DOMContentLoaded', sttFunc);
      
      