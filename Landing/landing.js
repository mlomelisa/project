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

///////
var exclusionArray = [];


let newUserHealthProfile = data.userHealthProfile

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
 




