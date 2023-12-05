//document.oncontextmenu =new Function("return false;")

        //darkmode and light mode
        let mode = 0;
        //mode =0 > light
        //mode =1 > dark
  
  function changeMode(){
      switch (mode){
          case 0:
              mode = 1;
              document.getElementById('body').style.color = '#AAAEB6';
              document.body.style.backgroundColor= '#202124';
              
              document.getElementById('a1').style.color = 'white';
              document.getElementById('a2').style.color = 'white';
              document.getElementById('a3').style.color = 'white';
              document.getElementById('a4').style.color = 'white';
              document.getElementById('a5').style.color = 'white';
              document.querySelector('nav').style.backgroundColor = '#202124';
              document.getElementById('mode1').className = 'bi bi-brightness-high-fill';
              document.getElementById('home').style.background = 'linear-gradient(90deg, #34384f, #372c42)';
              document.getElementById('home').style.backgroundSize = '300% 300%';
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
               break;
             
  
  
              case 1:
                  mode = 0;
                  
                  
                
                  document.getElementById('body').style.color = 'black';
                  document.body.style.backgroundColor= '#ffffff';
                  document.getElementById('a1').style.color = 'black';
                  document.getElementById('a2').style.color = 'black';
                  document.getElementById('a3').style.color = 'black';
                  document.getElementById('a4').style.color = 'black';
                  document.getElementById('a5').style.color = 'black';
                  document.querySelector('nav').style.backgroundColor = 'white';
                  document.getElementById('mode1').className = 'bi bi-moon-fill';
                  document.getElementById('home').style.background = 'linear-gradient(to right, #b993d6, #8ca6db)';
                  document.getElementById('home').style.backgroundSize = '300% 300%';
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
                 
                  
                  break;
      }
  
  }
  
  //navbar
  
  
  
  window.addEventListener('scroll', function(){
      var nav= this.document.querySelector("nav");
     
      nav.classList.toggle('sticky',this.window.scrollY>0);
     
      
  });
  
  
  //scrollbar
  let progress = document.getElementById('progressbar');
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){
      let progressHeight= (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + '%';
  }









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