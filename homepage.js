let elem=document.getElementsByClassName('filter-btn');
elem[0].addEventListener('click',function(){
    document.getElementsByClassName('filters-section')[0].classList.toggle('active');
})

let elem2=document.getElementsByClassName('sort-btn');
elem2[0].addEventListener('click',function(){
    document.getElementsByClassName('mobsort-menu')[0].classList.toggle('active');
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // document.getElementById("nav-container").style="background-color:cornflowerblue;";
    document.getElementById("nav-container").classList.add('active');

  } else {
    // document.getElementById("nav-container").style="background-color:none";
    document.getElementById("nav-container").classList.remove('active');


  }
}


let menu=document.getElementById('menu-icon');

menu.addEventListener('click',function(){
    document.getElementById('nav-container').classList.toggle('active1');
    document.getElementById('nav-list').classList.toggle('active');
});
