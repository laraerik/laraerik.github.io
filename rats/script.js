function togglee(){
  var menu = document.getElementById("hidden-menu");
  if(menu.style.display === "none"){
    menu.style.display = "block";
  } else{
    menu.style.display = "none";
  }
}
function exampleRequired(){
  zip = document.getElementById("zipcode");
  date = document.getElementById("date");
  size1 = document.getElementById("rat12");
  size2 = document.getElementById("rat2");
  size3 = document.getElementById("rat3");

  if (zip.value === ""){
    alert("Please input a zipcode.");
    return false;
  }else if (date.value === "") {
    alert("Please input a date.");
    return false;
  }else if (!(size1.checked || size2.checked || size3.checked)) {
    alert("Please input a size.");
    return false;
  }
  else {
    // alert('Code has accepted : you can try another');
    document.getElementById("formm").style.display = "none";
    document.getElementById("reportTitle").innerHTML= "Report submitted succesfully!";
    document.getElementById("thank-you").innerHTML= "Thank you:)";
    return true;
  }
}




//'use strict';

 //const fs = require('fs');


//let student = {
//                    name: 'Mike',
//                    age: 25,
//                    gender: 'Male',
//                    department: 'English',
//                    car: 'Honda'
//                };
//
//                let data = JSON.stringify(student);
//
//fs.writeFileSync('file.json', data, finished);
//
//                function finished(err)
//                {
//                    console.log('success');
//                }






var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});





$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
