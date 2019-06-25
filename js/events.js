//define functions here
function getIt(){
  $('p').on("click", function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on("load", function(){
    $('img').addClass("tasty")
  })
}

function pressIt(){
  $('input').on("keydown", function(key){
    if(key.key === 'G'){alert('You just pressed the G key.')}
  })
}

$(document).ready(function(){

// call functions here

});
