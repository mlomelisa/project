
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function onEatHealthy_function() {
document.getElementById("myCarousel").style.visibility ="collapse";
document.getElementById("eatRightDiv1").style.visibility ="visible";
 document.getElementById("eatRightDiv1").style.height ="80%";
 document.getElementById("eatRightDiv1").setAttribute("src","https://www.youtube.com/embed/28CIFOhkKrU")
 
 
}
function onActive_function(){
    document.getElementById("myCarousel").style.visibility ="collapse";
document.getElementById("eatRightDiv1").style.visibility ="visible";
 document.getElementById("eatRightDiv1").style.height ="80%";
 document.getElementById("eatRightDiv1").setAttribute("src","Images/active.jpg")
 
}

function onHomeClick(){
    document.getElementById("myCarousel").style.visibility ="visible";
    document.getElementById("eatRightDiv1").style.visibility ="collapse";
    document.getElementById("eatRightDiv1").style.height ="0%";
    document.getElementById("eatRightDiv1").setAttribute("src",null);
}

function filterFunction() {
 var input, filter, ul, li, a, i;
   input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }

  }
}
