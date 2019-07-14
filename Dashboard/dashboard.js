
////////////////////////////////////
//dellete before commiting

var data =
{
    "userCalender" : 
    {
        "userID": "nata",
        "created": "msdate",
        "starts": "fromDateUnix",
        "expires": "toDateUnix",
        "availableRecipes" : ["recipid", "recipeid"],
        "chosenRecipes" : ["recipid", "recipeid"],
        "schedule" : 
        {
            "1562928437": "day1_RecipeID1",
            "1562962020": "day1_RecipeID2",
            "1563014837": "day2_RecipeID1",
            "1563052020": "day2_RecipeID2",
            "1563066420": "day2_RecipeID3",

        }
    }
}

//ms time 1562928437000 morning 07/12
//ms time 1562939237000 lunch 07/12
//ms time 1563014837000 morning 07/13
//ms time 1563025637000 lunch 07/13
//ms time 1563050837000 dinner 07/13
//convert to unix time
//////////////////////////////////



$('.input-daterange input').each(function()
{
    $(this).datepicker('clearDates');
});


$("#showMeals").on("click", function()
{
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    var days = getNumberOfDaysinRange(fromDate,toDate);

    let dates = enumerateDaysBetweenDates(fromDate,toDate);
 
    var valuesarray = (Object.entries(data.userCalender.schedule))
        if (dates.length===2 && dates[0]===dates[1]){

            var endOfDatesArray = dates.length-1;
            
        } else{
            endOfDatesArray= dates.length;
        }
        for (let j =0; j<endOfDatesArray; j++)
        {
            var arrayOfMealsPerDay=[];

            for (let i=0; i<valuesarray.length;i++){
                
                var dbDate = moment.unix(valuesarray[i][0]).format("MM/DD/YYYY");
                var mealTime = getMealTime(moment.unix(valuesarray[i][0]));
                if(dates[j]===dbDate)
                {
                    arrayOfMealsPerDay.push(
                        {   "mealDate":dbDate,
                            "mealTime":mealTime,
                            "meal": valuesarray[i][1]
                        });
                }       
            }
            createMealContainer(arrayOfMealsPerDay);
        }
});

function getNumberOfDaysinRange(date1, date2)
{
    let fromDateUnix = moment(date1, "MM/DD/YYYY").format("X");

    let toDateUnix = moment(date2, "MM/DD/YYYY").format("X");

    let fromDate = moment.unix(fromDateUnix).format("MM/DD/YYYY");
    let toDate = moment.unix(toDateUnix).format("MM/DD/YYYY");
    let daysNumber= moment(toDate).diff(moment(fromDate), "days");
    return daysNumber;

  
} 

function  enumerateDaysBetweenDates (startDate, endDate) {
    var dates = [];

    var currDate = moment(startDate).startOf('day');
    var lastDate = moment(endDate).startOf('day');

    dates.push(moment(startDate).format("MM/DD/YYYY"));
    while(currDate.add(1, 'days').diff(lastDate) < 0) 
    {
        dates.push(moment(currDate.clone().toDate()).format("MM/DD/YYYY"));
    }

    dates.push(moment(endDate).format("MM/DD/YYYY"));

    return dates;
};




function createMealContainer(dayMealsArray)
{

    var divDay = $("<div id='mealDay' class='row'>");

    for (let i=0; i<dayMealsArray.length; i++){
        var mealDate = dayMealsArray[0].mealDate;
        var divMeal = $("<div class='meal col-3'>");
        var mealTitle = $("<h5 class='mealType'>");
        mealTitle.text(dayMealsArray[i].mealTime);
        divMeal.text(dayMealsArray[i].meal);
        divMeal.prepend(mealTitle);
        divDay.append(divMeal);

    }
    divDay.prepend(mealDate);
    $("#meals-section").append(divDay);
}


function getMealTime (m) {
	var g = null; 
	
	var split_afternoon = 12 //24hr time to split the afternoon
	var split_evening = 17 //24hr time to split the evening
	var currentHour = parseFloat(moment(m).format("HH"));
	
	if(currentHour >= split_afternoon && currentHour <= split_evening) {
		g = "lunch";
	} else if(currentHour >= split_evening) {
		g = "dinner";
	} else {
		g = "breakfast";
	}
	
	return g;
}
