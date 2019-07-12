//-------------------sticky product bar--------------------

window.onscroll = function() {myFunction()};

var topbar = document.getElementById("topMenu");
var end=document.getElementById("news");
var navbar = document.getElementById("nav-bar");

var sticky = topbar.offsetTop;
var endsticky=end.offsetTop;
var navsticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky && window.pageYOffset <= endsticky) {
    topbar.classList.add("sticky");
      $('#topMenu').css('z-index', '10');
  } else {
    topbar.classList.remove("sticky");
  }
   if (window.pageYOffset >= navsticky) {
    navbar.classList.add("sticky");
      $('#nav-bar').css('z-index', '10');
       $('#nav-bar').css('border-bottom', '3px solid orange');
  } else {
    navbar.classList.remove("sticky");
  }
}


//----------------------products---------------------------

$(function() {
    $('#spectre').css('display', 'contents');
    $('#envy').css('display', 'none');  
    $('#eliteg3').css('display', 'none');
    $('#ebookg1').css('display', 'none');
    $('#zbook').css('display', 'none');
    $('#p1').on('click', function() {
        $('#spectre').css('display', 'contents');
        $('#envy').css('display', 'none');  
        $('#eliteg3').css('display', 'none');
        $('#ebookg1').css('display', 'none');
        $('#zbook').css('display', 'none');
        $('#spectre').classList.add("active");
        $('#envy').classList.remove("active");
        $('#eliteg3').classList.remove("active");
        $('#ebookg1').classList.remove("active");
        $('#zbook').classList.remove("active");
    });
    $('#p2').on('click', function() {
        $('#spectre').css('display', 'none');
        $('#envy').css('display', 'contents');  
        $('#eliteg3').css('display', 'none');
        $('#ebookg1').css('display', 'none');
        $('#zbook').css('display', 'none');
        $('#spectre').classList.remove("active");
        $('#envy').classList.add("active");
        $('#eliteg3').classList.remove("active");
        $('#ebookg1').classList.remove("active");
        $('#zbook').classList.remove("active");
    });
    $('#p4').on('click', function() {
        $('#spectre').css('display', 'none');
        $('#envy').css('display', 'none');  
        $('#eliteg3').css('display', 'contents');
        $('#ebookg1').css('display', 'none');
        $('#zbook').css('display', 'none');
        $('#spectre').classList.remove("active");
        $('#envy').classList.remove("active");
        $('#eliteg3').classList.add("active");
        $('#ebookg1').classList.remove("active");
        $('#zbook').classList.remove("active");
    });
    $('#p5').on('click', function() {
        $('#spectre').css('display', 'none');
        $('#envy').css('display', 'none');  
        $('#eliteg3').css('display', 'none');
        $('#ebookg1').css('display', 'contents');
        $('#zbook').css('display', 'none');
        $('#spectre').classList.remove("active");
        $('#envy').classList.remove("active");
        $('#eliteg3').classList.remove("active");
        $('#ebookg1').classList.add("active");
        $('#zbook').classList.remove("active");
    });
    $('#p6').on('click', function() {
        $('#spectre').css('display', 'none');
        $('#envy').css('display', 'none');  
        $('#eliteg3').css('display', 'none');
        $('#ebookg1').css('display', 'none');
        $('#zbook').css('display', 'contents');
        $('#spectre').classList.remove("active");
        $('#envy').classList.remove("active");
        $('#eliteg3').classList.remove("active");
        $('#ebookg1').classList.remove("active");
        $('#zbook').classList.add("active");
    });    
});

//--------------------login form------------------------
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//-----------------------news--------------------------

//$(function(){
//    var x=window.matchMedia("(max-width: 768px)");
//    if(x.matches){
//    }
//});