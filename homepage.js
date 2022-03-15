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
    document.getElementsByClassName("navover")[0].style="background-color:cornflowerblue; padding:20px 0;";

  } else {
    document.getElementsByClassName("navover")[0].style="background-color:white";

  }
}