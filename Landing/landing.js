


// data.writeUserHealthProfile(newUserHealthProfile)

//mockdata do not include in pr
var data = {"userHealthProfile" :
{
    "userID": "id",
    "created": "msdate",
    "height" : "",
    "weight" : "",
    "age" : "",
    "dietarySelection" : ["null"],
    "exclusionList" : ["null"],
    "healthSettings" : {
        "calTarget": 0,
        "proteinTarget": 0,
        "carbTarget": 0,
        "fatTarget": 0,
    }
  },
};
//mockdata do not include in pr
 let newUserHealthProfile = data.userHealthProfile;

 var exclusionArray = [];


// data.writeUserHealthProfile(newUserHealthProfile)



$('#btnNext').on('click', function(event){
  
 
  event.preventDefault();
  
   var calories = $('#inputCalories').val();
   var dietOptions = $('#dietOption').val();

   
   newUserHealthProfile.dietarySelection = dietOptions;
   newUserHealthProfile.healthSettings.calTarget = calories;
   newUserHealthProfile.exclusionList = exclusionArray
    
    console.log(newUserHealthProfile);


    $('#myModalDiet').modal('hide');
    $('#inputCalories').val('');
    $('#dietOption option:selected').prop('selected', false);
    $('#dietOption :first').prop('selected', true);
    $('li').remove();
   
    $('#loginModal').modal('show');
    return data.userHealthProfilee;
    
});

// Add Exclusion to list
$('#btnAddExclusion').on('click',function(e){
  
   e.preventDefault();
   var exclusion = $('#inputExclusion').val().toLowerCase().trim();
  

  exclusionArray.push(exclusion);
   
       var exclusionList = $('<li>').addClass('list-group').text(exclusion);
   
      $('#listExclusion').prepend(exclusionList);
 

  $('#inputExclusion').val('');
  return  exclusionArray;
  });

  // Cancel button
  $('#btnCancel').on('click',function(e){
    e.preventDefault();
    $('#inputCalories').val('');
    $('#inputExclusion').val('');
    $('#dietOption option:selected').prop('selected', false);
    $('#dietOption :first').prop('selected', true);
    $('li').remove();
    $('#myModalDiet').modal('hide');

  });


// Login Section with Google account or Anonymus

$('#googleLogin').on('click', function(e){
  e.preventDefault();
  

  $('#loginModal').modal('hide');
  // $('#myModalDiet').modal('show');
 console.log('Im here')
});

$('#anonymousLogin').click(function(e){
  e.preventDefault();
  $('#loginModal').modal('hide');
  // $('#myModalDiet').modal('show');
  console.log('Im here')
 });

 /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// function onEatHealthy_function() {
// document.getElementById("myCarousel").style.visibility ="collapse";
// document.getElementById("eatRightDiv1").style.visibility ="visible";
//  document.getElementById("eatRightDiv1").style.height ="80%";
//  document.getElementById("eatRightDiv1").setAttribute("src","https://www.youtube.com/embed/28CIFOhkKrU")
 
 
// }
// function onActive_function(){
//     document.getElementById("myCarousel").style.visibility ="collapse";
// document.getElementById("eatRightDiv1").style.visibility ="visible";
//  document.getElementById("eatRightDiv1").style.height ="80%";
//  document.getElementById("eatRightDiv1").setAttribute("src","Images/active.jpg")
 
// }

// function onHomeClick(){
//     document.getElementById("myCarousel").style.visibility ="visible";
//     document.getElementById("eatRightDiv1").style.visibility ="collapse";
//     document.getElementById("eatRightDiv1").style.height ="0%";
//     document.getElementById("eatRightDiv1").setAttribute("src",null);
// }

// function filterFunction() {
//  var input, filter, ul, li, a, i;
//    input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("myDropdown");
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }

//   }
// }
 




