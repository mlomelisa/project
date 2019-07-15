////////////////////////////////////
//delete before  merging

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
            "1562962030": "day1_RecipeID22",
            "1562962050": "day1_RecipeID23",
            "1562962120": "day1_RecipeID24",
            "1563014837": "day2_RecipeID1 lorem",
            "1563052020": "day2_RecipeID2 lorem ipsum lorem ipsum",
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


//date picker
$('.input-daterange input').each(function()
{
    $(this).datepicker('clearDates');
});


$("#showMeals").on("click", function()
{   
    //clear previous selection range before displaying new 
    $("#meals-section").empty();

    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();

    if ( moment(fromDate).unix()>moment(toDate).unix() || fromDate ==="" || toDate ==="" )
    {
    
        showErrorPopUp();
    } else 
    {

        if (fromDate !=="" && toDate!=="" )
        {
  
        let rangeDates = enumerateDaysBetweenDates(fromDate,toDate);
 
        var valuesarray = (Object.entries(data.userCalender.schedule))
       
            if (rangeDates.length===2 && rangeDates[0]===rangeDates[1])
            {

                var endOfDatesArray = rangeDates.length-1;
            
            } else
            {
                endOfDatesArray= rangeDates.length;
            }

            for (let j =0; j<endOfDatesArray; j++)
            {
                var arrayOfMealsPerDay=[];

                for (let i=0; i<valuesarray.length;i++){
                
                    var dbDate = moment.unix(valuesarray[i][0]).format("MM/DD/YYYY");
                    var mealType = getMealType(moment.unix(valuesarray[i][0]));
                    if(rangeDates[j]===dbDate)
                    {
                        arrayOfMealsPerDay.push(
                            {   "mealDate":dbDate,
                                "mealTime":mealType,
                                //we need to parse name, image, recipe here and add new keys
                                "meal": valuesarray[i][1],
                            //  "image":valuesarray[i][1].image 
                            });
                    }       
                }
            createMealContainer(arrayOfMealsPerDay);
            }
        } 
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
    var mealDate = $("<div class='mealDate col-12'>");

    if(dayMealsArray[0] === undefined)
    {

        divDay.text("no meals selected for this day");
    } else
    {
        mealDate.text(moment(dayMealsArray[0].mealDate).format('dddd, MMMM D, YYYY'));
        divDay.append(mealDate);
    }



    for (let i=0; i<dayMealsArray.length; i++)
    {

        var mealCard = $('<div class="card">');
        var mealCardBody = $('<div class="card-body">');
        var mealImage = $('<img class="card-img-top" src="mealIcon.png" alt="Card image cap">');
        var mealName = $('<h5 class="card-title">');
        var viewButton= $('<a href="#" class="btn btn-primary">View recipe</a>');
        var divMeal = $("<div class='meal col-xs-6 col-sm-6 col-md-3 col-lg-3'>");
        var mealType = $("<h5 class='mealType'>");

        mealType.text(dayMealsArray[i].mealTime);
        mealName.text(dayMealsArray[i].meal);
        mealCardBody.append(mealType);
        mealCardBody.append(mealImage);
        mealCardBody.append(mealName);
        mealCardBody.append(viewButton);
        mealCard.html(mealCardBody);
        divMeal.append(mealCard);
        divDay.append(divMeal);
    
    }

    $("#meals-section").append(divDay);
}


function getMealType (mealDate) {
	var type = null; 
	
	var split_afternoon = 12 //24hr time to split the afternoon
	var split_evening = 17 //24hr time to split the evening
	var currentHour = parseFloat(moment(mealDate).format("HH"));
	
	if(currentHour >= split_afternoon && currentHour <= split_evening) {
		type = "Lunch";
	} else if(currentHour >= split_evening) {
		type = "Dinner";
	} else {
		type = "Breakfast";
	}
	
	return type;
}

function showErrorPopUp(){
    $("#myModal").on("show", function() {    
        $("#myModal a.btn").on("click", function(e) {
            $("#myModal").modal('hide');    
        });
    });
        
    $("#myModal").on("hide", function() {    
        $("#myModal a.btn").off("click");
    });
            
    $("#myModal").on("hidden", function() {  
        $("#myModal").remove();
    });
            
    $("#myModal").modal({     
        "backdrop"  : "static",
        "keyboard"  : true,
        "show"      : true                    
    });
}

        

 
