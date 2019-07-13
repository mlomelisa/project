//$('.datepicker').datepicker();

$('.input-daterange input').each(function() {
    $(this).datepicker('clearDates');
});


$("#showMeals").on("click", function(){
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    var days = getNumberOfDaysinRange(fromDate,toDate);
    console.log (fromDate + " "+ toDate+ " "+ days);
});

function getNumberOfDaysinRange(date1, date2){
    let fromDateUnix = moment(date1, "MM/DD/YYYY").format("X");
    let toDateUnix = moment(date2, "MM/DD/YYYY").format("X");
    let fromDate = moment.unix(fromDateUnix).format("MM/DD/YYYY");
    let toDate = moment.unix(toDateUnix).format("MM/DD/YYYY");
    let daysNumber= moment(toDate).diff(moment(fromDate), "days");

    return daysNumber;
}


function createMealContainer(dayMealObject){
    var divDay = $("<div>");
    divDay.attr("id","dayMeal");
    
}
