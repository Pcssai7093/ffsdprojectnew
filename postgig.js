// * to be done


let realbtn=document.getElementsByClassName('image-input');
let custbtn=document.getElementsByClassName('Cbtn');
let custtxt=document.getElementsByClassName('Ctxt');


for(let i=0;i<custbtn.length;i++)
custbtn[i].addEventListener('click',function(){
    realbtn[i].click();

    realbtn[i].addEventListener('change',function(){
        if(realbtn[i].value!=''){
            custtxt[i].innerText=realbtn[i].value;
        }
    });


}); 

