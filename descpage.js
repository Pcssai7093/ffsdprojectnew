// * nothing



// * photo gallery
let elem1=document.getElementsByClassName('m');
elem1[0].style="display:block;";

let elem2=document.getElementsByClassName('g');

for(let i=0;i<elem2.length;i++){
    elem2[i].addEventListener('click',function(){
        for(let j=0;j<elem1.length;j++){
            elem1[j].style="display:none;"; 
        }
        elem1[i].style="display:block;";
    });
}




// * product package menu
let elem5=document.getElementsByClassName('category');
let elem4=document.getElementsByClassName('product-package-body');
elem4[0].style="display:block";
elem5[0].classList.add('active');

for(let i=0;i<elem5.length;i++){
    elem5[i].addEventListener('click',function(){
        for(let j=0;j<elem4.length;j++){
            elem4[j].style="display:none";
            elem5[j].classList.remove('active');
        }
        elem4[i].style="display:block";
        elem5[i].classList.add('active');
        });
}




let maxwid=window.innerWidth;
if(maxwid>1100){
    console.log('hello');
    window.onscroll = function() {
    scrollFunction1();

};
}



function scrollFunction1() {

    let pos=document.getElementById('footer').offsetTop;
    
    if (document.body.scrollTop > pos-430|| document.documentElement.scrollTop > pos-430) {
        document.getElementsByClassName("product-package")[0].style="top:auto;bottom:100px";
    console.log("scrolled");
    }
    else    if (document.body.scrollTop > 150|| document.documentElement.scrollTop > 150) {
        document.getElementsByClassName("product-package")[0].style="position:fixed";
    // console.log("scrolled");
    }
   else {
    document.getElementsByClassName("product-package")[0].style="position:absolute";
  }
}