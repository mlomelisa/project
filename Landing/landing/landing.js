var objUserChoice = [];
var exclusionArray = [];



$('#inputCalories').keyup(function (){
  this.value = this.value.replace(/[^0-9\.]/g,'');
})

$('#btnNext').on('click', function(event){
  $('#btnNext').off();
  event.preventDefault();
  
   var calories = $('#inputCalories').val().trim();
   var dietOptions = $('#dietOption').val();
   var totalDays = $('#inputDays').val();
   
   if (calories) {
    objUserChoice.push({'calories':calories});
    objUserChoice.push({'diet':dietOptions});
    objUserChoice.push({'days':totalDays});
    objUserChoice.push({'exclusions':exclusionArray});
   console.log(objUserChoice)
    $('#myModalDiet').modal('hide');
    $('#inputCalories').val('');
    $('#dietOption option:selected').prop('selected', false);
    $('#dietOption :first').prop('selected', true);
    $('li').remove();
   
    return objUserChoice;
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
