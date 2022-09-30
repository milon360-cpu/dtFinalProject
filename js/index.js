// header input control started here
let toggle = false;
let inputFiled = document.querySelector('.serach-input');
document.querySelector('.search-icon').addEventListener('click',(e)=>
{
    if(toggle === false)
    {
        console.log("Hello");
        inputFiled.classList.add("search-input-filed");
        toggle = true;
    }
    else if(toggle === true)
    {
        console.log("hi");
        inputFiled.classList.remove('search-input-filed');
        toggle = false;
        
       
    }
   
})
// header input control end here


// Type js code started here 
var typed = new Typed('.banner-title', {
    strings: ['Company slogan here'],
    typeSpeed:100,
    backSpeed : 100,
    loop: true,
    smartBackspace: true,
    cursor:"|"
  });
// Type js code end here 


// count up 
$('.count-up-1').counterUp
({
    delay: 10,
    time: 4000
})
$('.count-up-2').counterUp
({
    delay: 10,
    time: 8000
})
$('.count-up-3').counterUp
({
    delay: 10,
    time: 6000
})
$('.count-up-4').counterUp
({
    delay: 10,
    time: 4000
})
