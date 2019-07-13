
var exclusionArray = [];

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

$('#inputCalories').keyup(function (){
  this.value = this.value.replace(/[^0-9\.]/g,'');
})

$('#btnNext').on('click', function(event){
  console.log('im here')
  $('#btnNext').off();
  event.preventDefault();
  
   var calories = $('#inputCalories').val().trim();
   var dietOptions = $('#dietOption').val();
   var totalDays = $('#inputDays').val();
   
   if (calories) {
    
    data.userHealthProfile.update({
      'healthSettings.calTarget':calories,
      'dietarySelection':dietOptions,
      'days':totalDays,
      'exclusionList':exclusionArray
    });


   console.log(data.userHealthProfile)
    $('#myModalDiet').modal('hide');
    $('#inputCalories').val('');
    $('#dietOption option:selected').prop('selected', false);
    $('#dietOption :first').prop('selected', true);
    $('li').remove();
   
    return data.userHealthProfilee;
   } else{
     return false
   }
      
   
});

$('#btnAddExclusion').on('click',function(e){
  
   e.preventDefault();
   var exclusion = $('#inputExclusion').val().toLowerCase().trim();
  

  exclusionArray.push(exclusion);
   
       var exclusionList = $('<li>').text(exclusion);
   
      $('#listExclusion').prepend(exclusionList);
 

  $('#inputExclusion').val('');
  return  exclusionArray;
  });

  $('#btnCancel').on('click',function(e){
    e.preventDefault();
    $('#inputCalories').val('');
    $('#inputExclusion').val('');
    $('#dietOption option:selected').prop('selected', false);
    $('#dietOption :first').prop('selected', true);
    $('li').remove();
    $('#myModalDiet').modal('hide');
  

  });
