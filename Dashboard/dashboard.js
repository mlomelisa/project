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
            "07/12/2019": "recipeID1",
            "07/12/2019": "recipeID1",
            "07/13/2019": "recipeID2",
            "07/13/2019": "recipeID2",
            "07/13/2019": "recipeID2",

        }
    }
}
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
    console.log (days);
    var k=1;
 
    for (let i=0;i<days;i++)
    {
        
        keyarray = (Object.keys(data.userCalender.schedule));
        valuesarray = (Object.entries(data.userCalender.schedule));
        for (let i=0; i<valuesarray.length;i++)
        {
            for (j=0; j<3; j++)
            {
            console.log((moment().format('L')));
            console.log("day " + i+" meals " + valuesarray[j][0]);
            console.log("day " + i +" meals " + valuesarray[j][1]);
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
    let dates = enumerateDaysBetweenDates(fromDate,toDate);

    console.log( "dates" + dates);
  
} 

function  enumerateDaysBetweenDates (startDate, endDate) {
    var dates = [];

    var currDate = moment(startDate).startOf('day');
    var lastDate = moment(endDate).startOf('day');
    dates.push(moment(startDate));
    while(currDate.add(1, 'days').diff(lastDate) < 0) 
    {
        dates.push(currDate.clone().toDate());
    }
    dates.push(moment(endDate));

    return dates;
};




function createMealContainer(dayMealObject)
{
    console.log("hello");
    var divDay = $("<div>");
     divDay.text(dayMealObject);
     $("#meals-section").append(divDay);
    
}


