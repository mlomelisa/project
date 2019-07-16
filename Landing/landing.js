
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
var exclusionArray = [];
var userPerfil = [];
var genderId;

// let newUserHealthProfile = data.userHealthProfile
// newUserHealthProfile.height = input


// data.userHealthProfile = newUserHealthProfile

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


$('#btnNext').on('click', function(event){
  
  // $('#btnNext').off();
  event.preventDefault();
  
   var calories = $('#inputCalories').val();
   var dietOptions = $('#dietOption').val();
  //  var totalDays = $('#inputDays').val();
   
   
    
    data.userHealthProfile = {
      'healthSettings.calTarget':calories,
      'dietarySelection':dietOptions,
      // 'days':totalDays,
      'exclusionList':exclusionArray
    };

    console.log(data.userHealthProfile);


    $('#myModalDiet').modal('hide');
    $('#inputCalories').val('');
    $('#dietOption option:selected').prop('selected', false);
    $('#dietOption :first').prop('selected', true);
    $('li').remove();
   
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

// Next Calories  
$('#btnNextCalories').click(function(e){
  
  e.preventDefault();
 

  var ageUser = $('#age').val();
  var heightUser = $('#meters').val();
  var weightUser = $('#kilograms').val();

  
  userPerfil = {
    'age':ageUser,
    'height':heightUser,
    'weight':weightUser,
    'gender': genderId
  };
  
  console.log(userPerfil)

  $('#myModalCalories').modal('hide');
    
});

  // Cancel Calories button
  $('#btnCancelCalories').on('click',function(event){
    event.preventDefault();
    $('#myModalCalories').modal('hide');
    return 
  });

  $('#genderSection input[type="radio"]').change(function(){
    
    genderId = $("input[name='inlineRadioOptions']:checked").val();
    
    return genderId
})