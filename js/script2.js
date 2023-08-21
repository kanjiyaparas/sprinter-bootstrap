$(document).ready(function() {
    setTimeout(function() {
      $('#container').addClass('loaded');
      // Once the container has finished, the scroll appears
      if ($('#container').hasClass('loaded')) {
        // It is so that once the container is gone, the entire preloader section is deleted
        $('#preloader').delay(9000).queue(function() {
          $(this).remove();
        });}
    }, 3000);});


    let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

 function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
