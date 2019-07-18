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
            "1562928437": {
 
                "day":1, 
                "mealPlanId":0,
                "slot":1, 
                "position":0,
                "type":"RECIPE",
                "value":    {
                    "id":655786,
                    "imageType":"jpg",
                    "title":"Persimmons Pumpkin Orange Smoothie With Chia Seeds"
                },
            },
            "1562962020": {
                "day":1, 
                "mealPlanId":0,
                "slot":1, 
                "position":0,
                "type":"RECIPE",
                "value":    {
                    "id":655786,
                    "imageType":"jpg",
                    "title":"Persimmons Pumpkin Orange Smoothie With Chia Seeds"
                },
            },
            "1562962030": {
                "day":1, 
                "mealPlanId":0,
                "slot":1, 
                "position":0,
                "type":"RECIPE",
                "value":    {
                    "id":655786,
                    "imageType":"jpg",
                    "title":"Persimmons Pumpkin Orange Smoothie With Chia Seeds"
                },
            },
            "1563014837": {
                "day":1, 
                "mealPlanId":0,
                "slot":1, 
                "position":0,
                "type":"RECIPE",
                "value":    {
                    "id":655786,
                    "imageType":"jpg",
                    "title":"Persimmons Pumpkin Orange Smoothie With Chia Seeds"
                },

            },


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


$("#showMeals").on("click", function()
{   
    //clear previous selection range before displaying new 
   $("#meals-section").empty();

   var dbDatesArray = (Object.entries(data.userCalender.schedule));

   var fromDate = moment.unix(dbDatesArray[0][0]).format('L');
   var toDate = moment.unix(dbDatesArray[dbDatesArray.length-1][0]).format('L');

   // var fromDate = "07/12/2019";
   // var toDate = "07/13/2019";

  
        let rangeDates = enumerateDaysBetweenDates(fromDate,toDate);
 
  


            for (let j =0; j<rangeDates.length; j++)
            {
                var arrayOfMealsPerDay=[];

                for (let i=0; i<dbDatesArray.length;i++){
                
                    var dbDate = moment.unix(dbDatesArray[i][0]).format("MM/DD/YYYY");
                    var mealType = getMealType(moment.unix(dbDatesArray[i][0]));
                    if(rangeDates[j]===dbDate)
                    {
                        arrayOfMealsPerDay.push(
                            {   "mealDate":dbDate,
                                "mealTime":mealType,
                                //we need to parse name, image, recipe here and add new keys
                                "mealTitle": dbDatesArray[i][1].value.title,
                                "mealRecipeId" :dbDatesArray[i][1].value.id
                            //  "image":valuesarray[i][1].image 
                            });
                    }       
                }
            createMealContainer(arrayOfMealsPerDay);
            }
        
    
});

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
        mealCard.attr("recipeID",dayMealsArray[i].meal.rID);
        var mealName = $('<h5 class="card-title">');
        mealName.attr("onmouseover","showDescriptionModal(this)");
        mealCard.attr("onmouseover","hideDescriptionModal()");
        var viewButton= $('<a href="#" class="btn btn-primary">View recipe</a>');
        viewButton.attr("onclick","getRecipe(this)");
        viewButton.attr("recipeID",dayMealsArray[i].meal.rID);
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



        
function getRecipe(el){
   var recipeID =  $(el).attr("recipeID");
   getRecipeData(recipeID);
   // add modal on click to show the recipe
}
 

//add meal brief descripion on hover depending on the recipe id
function showDescriptionModal(el){
    var recipe =  $(el).attr("recipeID");

    
    $('.modal').modal({
        show: true
    });
}

function buildMealDescription(recipeObject){


}


