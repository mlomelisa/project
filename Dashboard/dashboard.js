//$('.datepicker').datepicker();

////////////////////////////////////
//dellete before commiting
var fromDate = $("#fromDate").val();
var toDate = $("#toDate").val();
let fromDateUnix = moment(fromDate, "MM/DD/YYYY").format("X");
let toDateUnix = moment(toDate, "MM/DD/YYYY").format("X");

var currentDate = moment().format();
///unix date
console.log ( moment("07/11/2019", "MM/DD/YYYY").format("X"));
console.log(moment.unix(moment("07/11/2019", "MM/DD/YYYY").format("X")).format("MM/DD/YYYY"));

var data =
{
    "userCalender" : 
    {
        "userID": "nata",
        "created": "msdate",
        "starts": fromDateUnix,
        "expires": toDateUnix,
        "availableRecipes" : ["recipid", "recipeid"],
        "chosenRecipes" : ["recipid", "recipeid"],
        "schedule" : 
        {
            "1562928437": "day1_RecipeID1",
            "1562939237": "day1_RecipeID2",
            "1563014837": "day2_RecipeID1",
            "1563025637": "day2_RecipeID2",
            "1563050837": "day2_RecipeID3",

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

var days = getNumberOfDaysinRange(fromDate,toDate);


$("#showMeals").on("click", function()
{
    console.log ("do i get here");
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    var days = getNumberOfDaysinRange(fromDate,toDate);
    console.log ("days number - " + days);

    let dates = enumerateDaysBetweenDates(fromDate,toDate);

    console.log( "dates range" + dates);
    var k=1;
    keyarray = (Object.keys(data.userCalender.schedule));
    valuesarray = (Object.entries(data.userCalender.schedule))
        if (dates.length===2 && dates[0]===dates[1]){

            var endOfDatesArray = dates.length-1;
            
        } else{
            endOfDatesArray= dates.length;
        }

            for (let j =0; j<endOfDatesArray; j++){
                for (let i=0; i<valuesarray.length;i++)
                {
                    var dbDate = moment.unix(valuesarray[i][0]).format("MM/DD/YYYY");
    
                    //console.log("element from DB "+ dbDate + " meal "+ valuesarray[i][1]);
                   // console.log("range" + dates[j]);
                if(dates[j]===dbDate){
                //console.log((moment().format('L')));
                console.log("day " + j+" meals " + valuesarray[i][1]);
               // console.log("day " + i +" meals " + valuesarray[i][1]);
              //  console.log("range "+ valuesarray[i][0]);
              //  console.log("element from DB " + element);
                }
                
        }
    }
        

});

function getNumberOfDaysinRange(date1, date2)
{
    let fromDateUnix = moment(date1, "MM/DD/YYYY").format("X");
    console.log(" from unix date "+fromDateUnix);

    let toDateUnix = moment(date2, "MM/DD/YYYY").format("X");
    console.log(" to unix date "+toDateUnix);
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




function createMealContainer(dayMealObject)
{
    console.log("hello");
    var divDay = $("<div>");
     divDay.text(dayMealObject);
     $("#meals-section").append(divDay);
    
}


