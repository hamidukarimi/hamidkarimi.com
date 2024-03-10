document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      var inputs = form.querySelectorAll("input[type='text'], input[type='email'], textarea");
  
      inputs.forEach(function(input) {
        if (!input.value.trim()) {
          input.style.borderColor = "red";
        }
      });
  
      var emptyInputs = form.querySelectorAll("input[type='text']:not(:valid), input[type='email']:not(:valid), textarea:not(:valid)");
  
      if (emptyInputs.length > 0) {
        event.preventDefault();
      }
    });
  });
  
  
  document.querySelector('input[type="submit"]').addEventListener('click', function() {
      // Empty the form
      document.querySelector('form').reset();
  
      // Show the alert
      alert('Your message has been sent');
  });
  
  
  
let scrollTimeout;

window.onscroll = function(){
  scrollFunction();
};

function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){

    document.getElementById("scrollToTopBtn").classList.add("show");
  } else{

    document.getElementById("scrollToTopBtn").classList.remove("show");
  }

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function(){

    document.getElementById("scrollToTopBtn").classList.remove("show");
  },1000); //adjust the miliseconds anytime you want

}

document.getElementById("scrollToTopBtn").addEventListener("click", function(){
  document.body.scrollTop = 0; // For safari For Chrome, firefox, IE and Opera
});

window.addEventListener('load', function(){
  document.querySelector('iframe').style.display = 'none';
});