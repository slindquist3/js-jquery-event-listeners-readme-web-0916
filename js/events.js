$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  submitIt()

});

function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
   $('img').on('load', function(){
     $(this).addClass('tasty')
  })
}

function pressIt(){
   $('input').on('keydown', function(key){
     if (key.which == '71'){
       alert('You pressed the g key!!! How dare you!')
     }
   })
 }

 function submitIt(){
   $('form').on('submit', function(){
     alert('Your form is going to be submitted now.')
  })
}
