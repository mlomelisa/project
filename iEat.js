'use strict';
let data = 
{

//API
    
    //APICONFIGS
    "spoonifyConfig":
    {
        "project":"",
        "key":"0b151b0d8dmsh59752643ccdd463p17ee4cjsncd65478a0ec8",
        "host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    },
    
    //API CALLS

    //dataCalls
    "getRecipeDataAPI": function(recipeID)
    {
        let host = data.spoonifyConfig.url
        let queryString = `${host}/recipes/${recipeID}/information`
        
        $.ajax({
            type: "GET",
            beforeSend: function(request) {
              request.setRequestHeader("X-RapidAPI-Host", data.spoonifyConfig.host);
            },
            url: queryString,
            success: function(data) {
              return JSON.parse(data);
            }
          });
    },

    "getProductDataAPI": function(productID)
    {
        let host = data.spoonifyConfig.url
        let queryString = `${host}/food/products/${productID}`
        
        $.ajax({
            type: "GET",
            beforeSend: function(request) {
              request.setRequestHeader("X-RapidAPI-Host", data.spoonifyConfig.host);
              request.setRequestHeader("X-RapidAPI-Key", data.spoonifyConfig.key );
            },
            url: queryString,
            success: function(data) {
                return JSON.parse(data);
            }
          });
        
        // .get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/22347")
        // return json 
    },

    "getNutritionDataAPI": function(recipeID)
    {
        let host = data.spoonifyConfig.url
        let queryString = `${host}/recipes/${recipeID}/nutritionWidget.json`
        
        $.ajax({
            type: "GET",
            beforeSend: function(request) {
              request.setRequestHeader("X-RapidAPI-Host", data.spoonifyConfig.host);
              request.setRequestHeader("X-RapidAPI-Key", data.spoonifyConfig.key );
            },
            url: queryString,
            success: function(data) {
                return data;
            }
          });
        
        // .get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/{id}/nutritionWidget.json")
        // return json
    },

    //widgetCalls
    "getRecipeIngredientDisplayAPI": function(recipeID)
    {
        let host = data.spoonifyConfig.url
        let queryString = `${host}/recipes/${recipeID}/ingredientWidget`
        
        $.ajax({
            type: "GET",
            beforeSend: function(request) {
              request.setRequestHeader("X-RapidAPI-Host", data.spoonifyConfig.host);
              request.setRequestHeader("X-RapidAPI-Key", data.spoonifyConfig.key );
            },
            url: queryString,
            success: function(data) {
                return data;
            }
          });
        // get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1003464/ingredientWidget"
        // //returns an htmlstring/widget
    },

    "getRecipePriceBreakDownAPI": function(recipeID)
    {
        let host = data.spoonifyConfig.url
        let queryString = `${host}/recipes/${recipeID}/priceBreakdownWidget?defaultCss=false`
        
        $.ajax({
            type: "GET",
            beforeSend: function(request) {
              request.setRequestHeader("X-RapidAPI-Host", data.spoonifyConfig.host);
              request.setRequestHeader("X-RapidAPI-Key", data.spoonifyConfig.key );
            },
            url: queryString,
            success: function(data) {
                return data;
            }
          });
        // .get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/641408/priceBreakdownWidget?defaultCss=false")
        
    },

    "getRecipeNutritionAPI": function(recipeID)
    {
        let host = data.spoonifyConfig.url
        let queryString = `${host}/food/menuItems/${recipeID}/nutritionWidget`
        
        $.ajax({
            type: "GET",
            beforeSend: function(request) {
              request.setRequestHeader("X-RapidAPI-Host", data.spoonifyConfig.host);
              request.setRequestHeader("X-RapidAPI-Key", data.spoonifyConfig.key );
            },
            url: queryString,
            success: function(data) {
                return data;
            }
          });
        // .get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/1003464/nutritionWidget")
        // return htmlstring
        // "<div itemprop=\"nutrition\" itemscope itemtype=\"http://schema.org/NutritionInformation\"><div class=\"spoonacular-caption\">Quickview</div><div class=\"spoonacular-quickview\" itemprop=\"calories\">0.0 Calories</div><div class=\"spoonacular-quickview\" itemprop=\"proteinContent\">0.0g Protein</div><div class=\"spoonacular-quickview\" itemprop=\"fatContent\">0.0g Total Fat</div><div class=\"spoonacular-quickview\" itemprop=\"carbohydrateContent\">0.0g Carbs</div></div><div class=\"spoonacular-caption spoonacular-salmon\">Limit These</div><div class=\"spoonacular-nutrient-name\">Calories</div><div class=\"spoonacular-nutrient-value\">0.0</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'ENERGY')\" onmouseout=\"spoonacularHideNutritionComposition('ENERGY')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-nutrient-name\">Fat</div><div class=\"spoonacular-nutrient-value\">0.0g</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'FAT')\" onmouseout=\"spoonacularHideNutritionComposition('FAT')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-nutrient-name\">&nbsp;&nbsp;Saturated Fat</div><div class=\"spoonacular-nutrient-value\">0.0g</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'FAT_SATURATED')\" onmouseout=\"spoonacularHideNutritionComposition('FAT_SATURATED')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-nutrient-name\">Carbohydrates</div><div class=\"spoonacular-nutrient-value\">0.0g</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'CARBOHYDRATES')\" onmouseout=\"spoonacularHideNutritionComposition('CARBOHYDRATES')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-nutrient-name\">&nbsp;&nbsp;Sugar</div><div class=\"spoonacular-nutrient-value\">0.0g</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'SUGAR')\" onmouseout=\"spoonacularHideNutritionComposition('SUGAR')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-nutrient-name\">Cholesterol</div><div class=\"spoonacular-nutrient-value\">0.0mg</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'CHOLESTEROL')\" onmouseout=\"spoonacularHideNutritionComposition('CHOLESTEROL')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-nutrient-name\">Sodium</div><div class=\"spoonacular-nutrient-value\">0.0mg</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'SODIUM')\" onmouseout=\"spoonacularHideNutritionComposition('SODIUM')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-caption spoonacular-blue\">Get Enough Of These</div><div class=\"spoonacular-nutrient-name\">Protein</div><div class=\"spoonacular-nutrient-value\">0.0g</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-blue\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'PROTEIN')\" onmouseout=\"spoonacularHideNutritionComposition('PROTEIN')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-blue\">0%</div></div><br><div style=\"margin-top:12px;width:12px;height:12px\" class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\"></div><div style=\"margin-left:6px;margin-right:6px;width:12px;height:12px\" class=\"spoonacular-nutrition-visualization-bar spoonacular-blue\"></div>covered percent of daily need"
    },

    //ComputeCalls
    "getMealPlanAPI": function(time)
    {
        let queryURL = buildQuery();
        var queryData
  
        try
        {
            $.ajax({
                type: "GET",
                beforeSend: function(request) {
                request.setRequestHeader("X-RapidAPI-Host", data.spoonifyConfig.host);
                request.setRequestHeader("X-RapidAPI-Key", data.spoonifyConfig.key );
                },
                url: queryURL,
                success: function(data) {
                    queryData = data;
                },
                async:false
            })
        }
        catch(err)
        {
                console.log(`Error: ${err.message}`);
                console.log(`Error: ${err.stack}`);
                console.log(`Error: ${err.code}`);
                console.error('an issue occurred retrieving meal schedule');
        } 

        return queryData;

        
        function buildQuery()
        {
            
            let host = data.spoonifyConfig.url
            let mealgenerator = "/recipes/mealplans/generate?";
            let queryString = `${host}${mealgenerator}timeFrame=${time}`
            try
            {
                appendCalories();
                appendDietString();
                appendExcludeString();
            }
            catch
            {
                console.log(`Error: ${err.message}`);
                console.log(`Error: ${err.stack}`);
                console.log(`Error: ${err.code}`);
            }
            finally
            {
                return queryString;
            }
            
            
            
            //query builders
            function appendCalories()
            {
                let calorieTarget = data.userHealthProfile.healthSettings.calTarget
                if(calorieTarget === 0)
                {
                    return;
                }
                else
                {
                let calories = caloriesTarget.toString();
                queryString.concat(`&targetCalories=${calories}`)
                }
            }

            function appendDietString()
            {
                if(data.userHealthProfile.dietArray[0] === "null")
                {
                    return;
                }
                else
                {
                    let dietArray = data.userHealthProfile.dietarySelection;
                    let andOperator = '%2C+';
                    let dietString = `&diet=${dietArray[0]}`
                    
                    if(dietArray.length > 1)
                    {
                        for(let i=1; i<dietArray.length; i++)
                        {
                            dietString.concat(andOperator + dietArray[i])
                        }
                    }

                    queryString.concat(dietString)
                }
            
            }

            function appendExcludeString()
            {
                if(data.userHealthProfile.exclusionList[0] === "null")
                {
                    return;
                }
                else
                {
                    let excludeArray = data.userHealthProfile.exclusionList;
                    let andOperator = '%2C+';
                    let excludeString = `&exclude=${excludeArray[0]}`
                    
                    if(excludeArray.length > 1)
                    {
                        for(let i=1; i<excludeArray.length; i++)
                        {
                            excludeString.concat(andOperator + excludeArray[i])
                        }
                    }

                    queryString.concat(excludeString)
                }
            }
        }
        
        // "mealObject":
        // {
        //     "day":1
        //     "mealPlanId":0
        //     "slot":1
        //     "position":0
        //     "type":"RECIPE"
        //     "value":"{"id":655786,"imageType":"jpg","title":"Persimmons Pumpkin Orange Smoothie With Chia Seeds"}"
        // },
        //mealplan response
        
        // "name":"MealPlan 1563076260336"
        // "publishAsPublic":true
        // "items":[12 items
        // 0:{6 items
        // "day":1
        // "mealPlanId":0
        // "slot":1
        // "position":0
        // "type":"RECIPE"
        // "value":"{"id":655786,"imageType":"jpg","title":"Persimmons Pumpkin Orange Smoothie With Chia Seeds"}"
        // }
    },
    
//DatabaseMain
    //CONFIGS
    "firebaseConfig":
    {
        apiKey: "AIzaSyBWuqUPwxrgPbVQ3H4fA77ySoz7XURsKPA",
        authDomain: "ieat-3a848.firebaseapp.com",
        databaseURL: "https://ieat-3a848.firebaseio.com",
        projectId: "ieat-3a848",
        storageBucket: "",
        messagingSenderId: "791706584965",
        appId: "1:791706584965:web:bd04f2511e920ae8", 
    },

    //Init
    "InitFirebase": function()
    {
        let config = this.firebaseConfig
        firebase.initializeApp(config)
    },

//FirebaseDataQueries
    //mockObject
    
    "getMealPlan": function(time)
    {
        console.log("in get Meal Plan")
        try
        {
            console.log("in first try block")
            let mealPlanObj = data.getMealPlanAPI(time)
            try
            {
                console.log('in second try block')
                console.log(mealPlanObj)
                data.userCalenderGen.parseAPIResponse(mealPlanObj)
                data.userCalenderGen.refreshCalender();
            }
            catch
            {
                console.log(`Error: ${err.message}`);
                console.log(`Error: ${err.stack}`);
                console.log(`Error: ${err.code}`);
                console.error('an issue occurred retrieving recipe object'); 
            }

        }
        catch
        {
            console.log(`Error: ${err.message}`);
            console.log(`Error: ${err.stack}`);
            console.log(`Error: ${err.code}`);
            console.error('an issue occurred retrieving recipe object');
        }
    },
    
    "getRecipeData":  function(recipeID)
    {
        firebase.database().ref('recipeData').once('value')
            .then(function(snapshot)
            {
                if(snapshot.child(recipeID))
                {
                    return snapshot.recipeID.val();
                }
                else
                {
                    console.log(`Recipe not found in our database: ${recipeID}`)
                    let apiData = data.getRecipeDataAPI(recipeID)
                        .then(function()
                        {
                            console.log(`Recipe Data from Spoonify API: ${apiData}`)
                            data.writeRecipeData(recipeID, apiData)
                        })
                        .then(function()
                        {
                            return apiData;
                        })
                        .catch(function(err)
                        {
                            console.log(`Error: ${err.message}`);
                            console.log(`Error: ${err.stack}`);
                            console.log(`Error: ${err.code}`);
                            console.error('an issue occurred retrieving recipe object');
                        }) 
                }
            })
    },
            // return object
        // {
        //     "vegetarian":true
        //     "vegan":false
        //     "glutenFree":true
        //     "dairyFree":true
        //     "veryHealthy":false
        //     "cheap":false
        //     "veryPopular":false
        //     "sustainable":false
        //     "weightWatcherSmartPoints":28
        //     "gaps":"no"
        //     "lowFodmap":false
        //     "ketogenic":false
        //     "whole30":false
        //     "sourceUrl":"https://www.foodista.com/recipe/CZF2KGGJ/persimmons-pumpkin-orange-smoothie"
        //     "spoonacularSourceUrl":"https://spoonacular.com/persimmons-pumpkin-orange-smoothie-with-chia-seeds-655786"
        //     "aggregateLikes":1
        //     "spoonacularScore":56
        //     "healthScore":16
        //     "creditsText":"Foodista.com – The Cooking Encyclopedia Everyone Can Edit"
        //     "license":"CC BY 3.0"
        //     "sourceName":"Foodista"
        //     "pricePerServing":171.29
        //     "extendedIngredients":[7 items
        //     0:{13 items
        //     "id":9265
        //     "aisle":"Produce"
        //     "image":"hachiya-persimmon.png"
        //     "consitency":"solid"
        //     "name":"persimmons"
        //     "original":"2 Persimmons (whole)"
        //     "originalString":"2 Persimmons (whole)"
        //     "originalName":"Persimmons (whole)"
        //     "amount":2
        //     "unit":""
        //     "meta":[2 items
        //     0:"whole"
        //     1:"()"
        //     ]
        //     "metaInformation":[2 items
        //     0:"whole"
        //     1:"()"
        //     ]
        //     "measures":{2 items
        //     "us":{3 items
        //     "amount":2
        //     "unitShort":""
        //     "unitLong":""
        //     }
        //     "metric":{...}3 items
        //     }
        //     }
        //     1:{...}13 items
        //     2:{...}13 items
        //     3:{...}13 items
        //     4:{...}13 items
        //     5:{...}13 items
        //     6:{...}13 items
        //     ]
        //     "id":655786
        //     "title":"Persimmons Pumpkin Orange Smoothie With Chia Seeds"
        //     "readyInMinutes":45
        //     "servings":3
        //     "image":"https://spoonacular.com/recipeImages/655786-556x370.jpg"
        //     "imageType":"jpg"
        //     "cuisines":[]0 items
        //     "dishTypes":[5 items
        //     0:"morning meal"
        //     1:"brunch"
        //     2:"beverage"
        //     3:"breakfast"
        //     4:"drink"
        //     ]
        //     "diets":[5 items
        //     0:"gluten free"
        //     1:"dairy free"
        //     2:"paleolithic"
        //     3:"lacto ovo vegetarian"
        //     4:"primal"
        //     ]
        //     "occasions":[]0 items
        //     "winePairing":{3 items
        //     "pairedWines":[]0 items
        //     "pairingText":""
        //     "productMatches":[]0 items
        //     }
        //     "instructions":"1. Remove the seed from the Persimmons. (Do not remove the skin). 2. Peel the skin of the Orange. 3. Combine all the ingredients in a blender. 4. Blend it for 2 minutes or until smooth 5. Pour the smoothie in the glass and garnish with some more almonds. 6. Serve Immediately."
        //     "analyzedInstructions":[1 item
        //     0:{2 items
        //     "name":""
        //     "steps":[6 items
        //     0:{4 items
        //     "number":1
        //     "step":"Remove the seed from the Persimmons. (Do not remove the skin)."
        //     "ingredients":[1 item
        //     0:{3 items
        //     "id":9265
        //     "name":"persimmon"
        //     "image":"hachiya-persimmon.png"
        //     }
        //     ]
        //     "equipment":[]0 items
        //     }
        //     1:{...}4 items
        //     2:{...}4 items
        //     3:{...}5 items
        //     4:{...}4 items
        //     5:{...}4 items
        //     ]
        //     }
        //     ]
        //     }
    "getProductData": function(productID)
    {
        firebase.database().ref('productData').once('value')
            .then(function(snapshot)
            {
                if(snapshot.child(productID))
                {
                    return snapshot.productID.val();
                }
                else 
                {
                    console.log(`Product not found in our database: ${productID}`)
                    let apiData = data.getProductDataAPI(productID)
                        .then(function()
                        {
                            console.log(`Product Data from Spoonify API: ${apiData}`)
                            data.writeProductData(productID, apiData)
                        })
                        .then(function()
                        {
                            return apiData;
                        })
                        .catch(function(err)
                        {
                            console.log(`Error: ${err.message}`);
                            console.log(`Error: ${err.stack}`);
                            console.log(`Error: ${err.code}`);
                            console.error('an issue occurred retrieving product object');
                        }) 
                }
            })
    },
            // {
        //     "id":22347
        //     "title":"SNICKERS Minis Size Chocolate Candy Bars Variety Mix 10.5-oz. Bag"
        //     "price":324
        //     "likes":NULL
        //     "badges":[7 items
        //     0:"msg_free"
        //     1:"wheat_free"
        //     2:"no_artificial_colors"
        //     3:"no_artificial_flavors"
        //     4:"no_artificial_ingredients"
        //     5:"pescetarian"
        //     6:"gluten_free"
        //     ]
        //     "important_badges":[6 items
        //     0:"no_artificial_flavors"
        //     1:"no_artificial_colors"
        //     2:"no_artificial_ingredients"
        //     3:"gluten_free"
        //     4:"wheat_free"
        //     5:"msg_free"
        //     ]
        //     "nutrition_widget":"<div class="spoonacular-caption">Quickview</div><div class="spoonacular-quickview">180 Calories</div><div class="spoonacular-quickview">2g Protein</div><div class="spoonacular-quickview">8g Total Fat</div><div class="spoonacular-quickview">25g Carbs</div><div class="spoonacular-caption spoonacular-salmon">Limit These</div><div class="spoonacular-nutrient-name">Calories</div><div class="spoonacular-nutrient-value">180</div><div style="display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);"><div class="spoonacular-nutrition-visualization-bar spoonacular-salmon" style="width:9.0%" onmouseover="spoonacularShowNutritionComposition(event,'ENERGY')" onmouseout="spoonacularHideNutritionComposition('ENERGY')"></div><div class="spoonacular-nutrition-visualization-bar-number spoonacular-salmon">9%</div></div><br><div class="spoonacular-nutrient-name">Fat</div><div class="spoonacular-nutrient-value">8g</div><div style="display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);"><div class="spoonacular-nutrition-visualization-bar spoonacular-salmon" style="width:12.31%" onmouseover="spoonacularShowNutritionComposition(event,'FAT')" onmouseout="spoonacularHideNutritionComposition('FAT')"></div><div class="spoonacular-nutrition-visualization-bar-number spoonacular-salmon">12%</div></div><br><div class="spoonacular-nutrient-name">&nbsp;&nbsp;Saturated Fat</div><div class="spoonacular-nutrient-value">3g</div><div style="display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);"><div class="spoonacular-nutrition-visualization-bar spoonacular-salmon" style="width:21.88%" onmouseover="spoonacularShowNutritionComposition(event,'FAT_SATURATED')" onmouseout="spoonacularHideNutritionComposition('FAT_SATURATED')"></div><div class="spoonacular-nutrition-visualization-bar-number spoonacular-salmon">22%</div></div><br><div class="spoonacular-nutrient-name">&nbsp;&nbsp;Trans Fat</div><div class="spoonacular-nutrient-value">0.5g</div><div style="display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);"><div class="spoonacular-nutrition-visualization-bar spoonacular-salmon" style="width:100.0%" onmouseover="spoonacularShowNutritionComposition(event,'FAT_TRANS')" onmouseout="spoonacularHideNutritionComposition('FAT_TRANS')"></div><div class="spoonacular-nutrition-visualization-bar-number spoonacular-salmon">100%</div></div><br><div class="spoonacular-nutrient-name">Carbohydrates</div><div class="spoonacular-nutrient-value">25g</div><div style="display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);"><div class="spoonacular-nutrition-visualization-bar spoonacular-salmon" style="width:8.33%" onmouseover="spoonacularShowNutritionComposition(event,'CARBOHYDRATES')" onmouseout="spoonacularHideNutritionComposition('CARBOHYDRATES')"></div><div class="spoonacular-nutrition-visualization-bar-number spoonacular-salmon">8%</div></div><br><div class="spoonacular-nutrient-name">&nbsp;&nbsp;Sugar</div><div class="spoonacular-nutrient-value">20g</div><div style="display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);"><div class="spoonacular-nutrition-visualization-bar spoonacular-salmon" style="width:22.22%" onmouseover="spoonacularShowNutritionComposition(event,'SUGAR')" onmouseout="spoonacularHideNutritionComposition('SUGAR')"></div><div class="spoonacular-nutrition-visualization-bar-number spoonacular-salmon">22%</div></div><br><div class="spoonacular-nutrient-name">Cholesterol</div><div class="spoonacular-nutrient-value">5mg</div><div style="display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);"><div class="spoonacular-nutrition-visualization-bar spoonacular-salmon" style="width:1.67%" onmouseover="spoonacularShowNutritionComposition(event,'CHOLESTEROL')" onmouseout="spoonacularHideNutritionComposition('CHOLESTEROL')"></div><div class="spoonacular-nutrition-visualization-bar-number spoonacular-salmon">2%</div></div><br><div class="spoonacular-nutrient-name">Sodium</div><div class="spoonacular-nutrient-value">85mg</div><div style="display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);"><div class="spoonacular-nutrition-visualization-bar spoonacular-salmon" style="width:3.7%" onmouseover="spoonacularShowNutritionComposition(event,'SODIUM')" onmouseout="spoonacularHideNutritionComposition('SODIUM')"></div><div class="spoonacular-nutrition-visualization-bar-number spoonacular-salmon">4%</div></div><br><div class="spoonacular-caption spoonacular-blue">Get Enough Of These</div><div class="spoonacular-nutrient-name">Protein</div><div class="spoonacular-nutrient-value">2g</div><div style="display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);"><div class="spoonacular-nutrition-visualization-bar spoonacular-blue" style="width:4.0%" onmouseover="spoonacularShowNutritionComposition(event,'PROTEIN')" onmouseout="spoonacularHideNutritionComposition('PROTEIN')"></div><div class="spoonacular-nutrition-visualization-bar-number spoonacular-blue">4%</div></div><br><div class="spoonacular-nutrient-name">Calcium</div><div class="spoonacular-nutrient-value">40mg</div><div style="display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);"><div class="spoonacular-nutrition-visualization-bar spoonacular-blue" style="width:4.0%" onmouseover="spoonacularShowNutritionComposition(event,'CALCIUM')" onmouseout="spoonacularHideNutritionComposition('CALCIUM')"></div><div class="spoonacular-nutrition-visualization-bar-number spoonacular-blue">4%</div></div><br><div class="spoonacular-nutrient-name">Fiber</div><div class="spoonacular-nutrient-value">1g</div><div style="display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);"><div class="spoonacular-nutrition-visualization-bar spoonacular-blue" style="width:4.0%" onmouseover="spoonacularShowNutritionComposition(event,'FIBER')" onmouseout="spoonacularHideNutritionComposition('FIBER')"></div><div class="spoonacular-nutrition-visualization-bar-number spoonacular-blue">4%</div></div><br><div class="spoonacular-nutrient-name">Iron</div><div class="spoonacular-nutrient-value">0.36mg</div><div style="display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);"><div class="spoonacular-nutrition-visualization-bar spoonacular-blue" style="width:2.0%" onmouseover="spoonacularShowNutritionComposition(event,'IRON')" onmouseout="spoonacularHideNutritionComposition('IRON')"></div><div class="spoonacular-nutrition-visualization-bar-number spoonacular-blue">2%</div></div><br><div style="margin-top:12px;width:12px;height:12px" class="spoonacular-nutrition-visualization-bar spoonacular-salmon"></div><div style="margin-left:6px;margin-right:6px;width:12px;height:12px" class="spoonacular-nutrition-visualization-bar spoonacular-blue"></div>covered percent of daily need"
        //     "serving_size":"4.0 pieces (38 g)"
        //     "number_of_servings":NULL
        //     "spoonacular_score":0
        //     "breadcrumbs":[1 item
        //     0:"square"
        //     ]
        //     "generated_text":"SNICKERS Minis Size Chocolate Candy Bars Variety Mix 10.5-oz. Bag: This product is an excellent fit if you like to buy products that are gluten-free. This product contains 180 calories, 8 grams of fat, 2 grams of protein, and 25 grams of carbs per serving. According to our research, this product contains 4 ingredients that you should avoid. We recommend choosing products with short ingredient lists, as these tend to be less processed. This product has 32 ingredients."
        //     "ingredientCount":32
        //     "images":[3 items
        //     0:"https://spoonacular.com/productImages/22347-312x231.jpg"
        //     1:"https://spoonacular.com/productImages/22347-636x393.jpg"
        //     2:"https://spoonacular.com/productImages/22347-90x90.jpg"
        //     ]
        //     }
    
    "getNutritionData": function(recipeID)
    {
        firebase.database().ref('nutritionData').once('value')
            .then(function(snapshot)
            {
                if(snapshot.child(productID))
                {
                    return snapshot.productID.val();
                }
                else 
                {
                    console.log(`Product not found in our database: ${recipeID}`)
                    let apiData = data.getNutritionDataAPI(recipeID)
                        .then(function()
                        {
                            console.log(`Product Data from Spoonify API: ${recipeID}`)
                            data.writeNutritionData(productID, apiData)
                        })
                        .then(function()
                        {
                            return apiData;
                        })
                        .catch(function(err)
                        {
                            console.log(`Error: ${err.message}`);
                            console.log(`Error: ${err.stack}`);
                            console.log(`Error: ${err.code}`);
                            console.error('an issue occurred retrieving product object');
                        }) 
                }
            })
    },
    // {8 items
    //     "calories":"316"
    //     "carbs":"49g"
    //     "fat":"12g"
    //     "protein":"3g"
    //     "bad":[7 items
    //     0:{4 items
    //     "title":"Calories"
    //     "amount":"316"
    //     "indented":false
    //     "percentOfDailyNeeds":15.84
    //     }
    //     1:{4 items
    //     "title":"Fat"
    //     "amount":"12g"
    //     "indented":false
    //     "percentOfDailyNeeds":18.51
    //     }
    //     2:{4 items
    //     "title":"Saturated Fat"
    //     "amount":"3g"
    //     "indented":true
    //     "percentOfDailyNeeds":24.88
    //     }
    //     3:{...
    //     }4 items
    //     4:{...
    //     }4 items
    //     5:{...
    //     }4 items
    //     6:{...
    //     }4 items
    //     ]
    //     "good":[21 items
    //     0:{4 items
    //     "title":"Protein"
    //     "amount":"3g"
    //     "indented":false
    //     "percentOfDailyNeeds":7.57
    //     }
    //     1:{4 items
    //     "title":"Vitamin K"
    //     "amount":"19µg"
    //     "indented":false
    //     "percentOfDailyNeeds":18.76
    //     }
    //     2:{4 items
    //     "title":"Manganese"
    //     "amount":"0.37mg"
    //     "indented":false
    //     "percentOfDailyNeeds":18.69
    //     }
    //     3:{...
    //     }4 items
    //     4:{...
    //     }4 items
    //     5:{...
    //     }4 items
    //     6:{...
    //     }4 items
    //     7:{...
    //     }4 items
    //     8:{...
    //     }4 items
    //     9:{...
    //     }4 items
    //     10:{...
    //     }4 items
    //     11:{...
    //     }4 items
    //     12:{...
    //     }4 items
    //     13:{...
    //     }4 items
    //     14:{...
    //     }4 items
    //     15:{...
    //     }4 items
    //     16:{...
    //     }4 items
    //     17:{...
    //     }4 items
    //     18:{...
    //     }4 items
    //     19:{...
    //     }4 items
    //     20:{...
    //     }4 items
    //     ]
    //     "expires":1554645762291
    //     "isStale":true
    //     }
    
    "getIngredientWidget": function(recipeID)
    {
        firebase.database().ref('ingredientDisplayWidget').once('value')
            .then(function(snapshot)
            {
                if(snapshot.child(recipeID))
                {
                    return snapshot.recipeID.val();
                }
                else 
                {
                    console.log(`Recipe Widget not found in DB: ${recipeID}`)
                    let apiData = data.getRecipeIngredientDisplayAPI(recipeID)
                        .then(function()
                        {
                            console.log(`Recipe Widget from Spoonify API: ${apiData}`)
                            data.writeIngredientDisplayWidget(recipeID, apiData)
                        })
                        .then(function()
                        {
                            return apiData;
                        })
                        .catch(function(err)
                        {
                            console.log(`Error: ${err.message}`);
                            console.log(`Error: ${err.stack}`);
                            console.log(`Error: ${err.code}`);
                            console.error('an issue occurred retrieving widget');
                        }) 
                }
            }) 
    },
    // "<div class=\"spoonacular-ingredients-menu\"></br></br><div id=\"spoonacularView\" class=\"spoonacular-switch spoonacular-metro\" style=\"float:left;width:130px\"></br>    <input id=\"spoonacular-grid\" name=\"view\" type=\"radio\" checked onchange=\"spoonacularToggleView();\"></br>    <label for=\"spoonacular-grid\" onclick=\"\">grid</label></br></br>    <input id=\"spoonacular-list\" name=\"view\" type=\"radio\" onchange=\"spoonacularToggleView();\"></br>    <label for=\"spoonacular-list\" onclick=\"\">list</label></br>    </br>    <span class=\"slide-button\"></span></br></div></br></br><div style=\"float:left;width:140px;margin-left:20px;line-height:24px\"></br>    <span style=\"float:left\">Servings:</span> <input style=\"float:left\" type=\"text\" size=\"2\" id=\"spoonacular-serving-stepper\" value=\"3\" /></br>    <span itemprop=\"recipeYield\" id=\"spoonacular-serving-stepper-initial\" style=\"display:none\">3</span></br></div></br></br><div id=\"spoonacularMeasure\" class=\"spoonacular-switch spoonacular-metro\" style=\"float:right;width:130px;margin-right:10px\"></br>    <input id=\"spoonacular-metric\" name=\"measure\" type=\"radio\"  onchange=\"spoonacularToggleMeasure();\"></br>    <label for=\"spoonacular-metric\" onclick=\"\">metric</label></br></br>    <input id=\"spoonacular-us\" name=\"measure\" type=\"radio\" checked onchange=\"spoonacularToggleMeasure();\"></br>    <label for=\"spoonacular-us\" onclick=\"\">US</label></br>    </br>    <span class=\"slide-button\"></span></br></div></br> </br></div></br><div style=\"clear:both\"></div></br><div id=\"spoonacular-ingredient-vis-grid\"><div style=\"float:left\"><div class=\"spoonacular-ingredient\"><div class=\"spoonacular-amount t12 spoonacular-metric\" style=\"display:none;\">2 tablespoons</div><div class=\"spoonacular-amount t12 spoonacular-us\" style=\"display:block;\">2 tablespoons</div><div class=\"spoonacular-image-wrapper\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/almonds.jpg\" title=\"2 tablespoons raw almonds\" alt=\"2 tablespoons raw almonds\"/></div><div class=\"spoonacular-name t11\">raw almonds</div></div></div><div style=\"float:left\"><div class=\"spoonacular-ingredient\"><div class=\"spoonacular-amount t12 spoonacular-metric\" style=\"display:none;\">2 </div><div class=\"spoonacular-amount t12 spoonacular-us\" style=\"display:block;\">2 </div><div class=\"spoonacular-image-wrapper\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/persimmon.jpg\" title=\"2  whole asian persimmons\" alt=\"2  whole asian persimmons\"/></div><div class=\"spoonacular-name t9\">whole asian persimmons</div></div></div><div style=\"float:left\"><div class=\"spoonacular-ingredient\"><div class=\"spoonacular-amount t12 spoonacular-metric\" style=\"display:none;\">1 tablespoon</div><div class=\"spoonacular-amount t12 spoonacular-us\" style=\"display:block;\">1 tablespoon</div><div class=\"spoonacular-image-wrapper\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/chia-seeds.jpg\" title=\"1 tablespoon chia seeds\" alt=\"1 tablespoon chia seeds\"/></div><div class=\"spoonacular-name t12\">chia seeds</div></div></div><div style=\"float:left\"><div class=\"spoonacular-ingredient\"><div class=\"spoonacular-amount t12 spoonacular-metric\" style=\"display:none;\">1 tablespoon</div><div class=\"spoonacular-amount t12 spoonacular-us\" style=\"display:block;\">1 tablespoon</div><div class=\"spoonacular-image-wrapper\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/honey.jpg\" title=\"1 tablespoon honey\" alt=\"1 tablespoon honey\"/></div><div class=\"spoonacular-name t12\">honey</div></div></div><div style=\"float:left\"><div class=\"spoonacular-ingredient\"><div class=\"spoonacular-amount t12 spoonacular-metric\" style=\"display:none;\">1 </div><div class=\"spoonacular-amount t12 spoonacular-us\" style=\"display:block;\">1 </div><div class=\"spoonacular-image-wrapper\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/orange.jpg\" title=\"1  whole orange\" alt=\"1  whole orange\"/></div><div class=\"spoonacular-name t11\">whole orange</div></div></div><div style=\"float:left\"><div class=\"spoonacular-ingredient\"><div class=\"spoonacular-amount t12 spoonacular-metric\" style=\"display:none;\">245 grams</div><div class=\"spoonacular-amount t12 spoonacular-us\" style=\"display:block;\">1 cup</div><div class=\"spoonacular-image-wrapper\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/pumpkin-puree.jpg\" title=\"1 cup pumpkin puree\" alt=\"1 cup pumpkin puree\"/></div><div class=\"spoonacular-name t10\">pumpkin puree</div></div></div><div style=\"float:left\"><div class=\"spoonacular-ingredient\"><div class=\"spoonacular-amount t12 spoonacular-metric\" style=\"display:none;\">600 grams</div><div class=\"spoonacular-amount t12 spoonacular-us\" style=\"display:block;\">2.5 cups</div><div class=\"spoonacular-image-wrapper\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/coconut-milk.jpg\" title=\"2.5 cups unsweetened coconut milk\" alt=\"2.5 cups unsweetened coconut milk\"/></div><div class=\"spoonacular-name t9\">unsweetened coconut milk</div></div></div><div style=\"clear:both\"></div></div><div id=\"spoonacular-ingredient-vis-list\"><div itemprop=\"ingredients\" class=\"spoonacular-ingredient-list\"><div style=\"float:left\"><div class=\"spoonacular-image-wrapper\" style=\"height:80px\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/almonds.jpg\" title=\"2 tablespoons raw almonds\" alt=\"2 tablespoons raw almonds\"/></div></div><div class=\"spoonacular-amount spoonacular-metric\" style=\"display:none;width:182px\">2 tablespoons</div><div class=\"spoonacular-amount spoonacular-us\" style=\"display:block;width:182px\">2 tablespoons</div><div class=\"spoonacular-name\">raw almonds</div><div style=\"clear:both\"></div></div><div itemprop=\"ingredients\" class=\"spoonacular-ingredient-list\"><div style=\"float:left\"><div class=\"spoonacular-image-wrapper\" style=\"height:80px\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/persimmon.jpg\" title=\"2  whole asian persimmons\" alt=\"2  whole asian persimmons\"/></div></div><div class=\"spoonacular-amount spoonacular-metric\" style=\"display:none;width:182px\">2 </div><div class=\"spoonacular-amount spoonacular-us\" style=\"display:block;width:182px\">2 </div><div class=\"spoonacular-name\">whole asian persimmons</div><div style=\"clear:both\"></div></div><div itemprop=\"ingredients\" class=\"spoonacular-ingredient-list\"><div style=\"float:left\"><div class=\"spoonacular-image-wrapper\" style=\"height:80px\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/chia-seeds.jpg\" title=\"1 tablespoon chia seeds\" alt=\"1 tablespoon chia seeds\"/></div></div><div class=\"spoonacular-amount spoonacular-metric\" style=\"display:none;width:182px\">1 tablespoon</div><div class=\"spoonacular-amount spoonacular-us\" style=\"display:block;width:182px\">1 tablespoon</div><div class=\"spoonacular-name\">chia seeds</div><div style=\"clear:both\"></div></div><div itemprop=\"ingredients\" class=\"spoonacular-ingredient-list\"><div style=\"float:left\"><div class=\"spoonacular-image-wrapper\" style=\"height:80px\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/honey.jpg\" title=\"1 tablespoon honey\" alt=\"1 tablespoon honey\"/></div></div><div class=\"spoonacular-amount spoonacular-metric\" style=\"display:none;width:182px\">1 tablespoon</div><div class=\"spoonacular-amount spoonacular-us\" style=\"display:block;width:182px\">1 tablespoon</div><div class=\"spoonacular-name\">honey</div><div style=\"clear:both\"></div></div><div itemprop=\"ingredients\" class=\"spoonacular-ingredient-list\"><div style=\"float:left\"><div class=\"spoonacular-image-wrapper\" style=\"height:80px\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/orange.jpg\" title=\"1  whole orange\" alt=\"1  whole orange\"/></div></div><div class=\"spoonacular-amount spoonacular-metric\" style=\"display:none;width:182px\">1 </div><div class=\"spoonacular-amount spoonacular-us\" style=\"display:block;width:182px\">1 </div><div class=\"spoonacular-name\">whole orange</div><div style=\"clear:both\"></div></div><div itemprop=\"ingredients\" class=\"spoonacular-ingredient-list\"><div style=\"float:left\"><div class=\"spoonacular-image-wrapper\" style=\"height:80px\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/pumpkin-puree.jpg\" title=\"1 cup pumpkin puree\" alt=\"1 cup pumpkin puree\"/></div></div><div class=\"spoonacular-amount spoonacular-metric\" style=\"display:none;width:182px\">245 grams</div><div class=\"spoonacular-amount spoonacular-us\" style=\"display:block;width:182px\">1 cup</div><div class=\"spoonacular-name\">pumpkin puree</div><div style=\"clear:both\"></div></div><div itemprop=\"ingredients\" class=\"spoonacular-ingredient-list\"><div style=\"float:left\"><div class=\"spoonacular-image-wrapper\" style=\"height:80px\"><img src=\"https://spoonacular.com/cdn/ingredients_100x100/coconut-milk.jpg\" title=\"2.5 cups unsweetened coconut milk\" alt=\"2.5 cups unsweetened coconu...

    "getNutritionWidget": function(recipeID)
    {
        firebase.database().ref('nutritionDisplayWidget').once('value')
            .then(function(snapshot)
            {
                if(snapshot.child(recipeID))
                {
                    return snapshot.recipeID;
                }
                else 
                {
                    console.log(`Nutrition Widget Not Found: ${recipeID}`)
                    let apiData = data.getRecipeNutritionAPI(recipeID)
                        .then(function()
                        {
                            console.log(`Widget Data from Spoonify: ${apiData}`)
                            data.writeNutritionDisplayWidget(recipeID, apiData)
                        })
                        .then(function()
                        {
                            return apiData;
                        })
                        .catch(function(err)
                        {
                            console.log(`Error: ${err.message}`);
                            console.log(`Error: ${err.stack}`);
                            console.log(`Error: ${err.code}`);
                            console.error('an issue occurred retrieving nutrition widget');
                        }) 
                }
            }) 
    },
    // "<div itemprop=\"nutrition\" itemscope itemtype=\"http://schema.org/NutritionInformation\"><div class=\"spoonacular-caption\">Quickview</div><div class=\"spoonacular-quickview\" itemprop=\"calories\">0.0 Calories</div><div class=\"spoonacular-quickview\" itemprop=\"proteinContent\">0.0g Protein</div><div class=\"spoonacular-quickview\" itemprop=\"fatContent\">0.0g Total Fat</div><div class=\"spoonacular-quickview\" itemprop=\"carbohydrateContent\">0.0g Carbs</div></div><div class=\"spoonacular-caption spoonacular-salmon\">Limit These</div><div class=\"spoonacular-nutrient-name\">Calories</div><div class=\"spoonacular-nutrient-value\">0.0</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'ENERGY')\" onmouseout=\"spoonacularHideNutritionComposition('ENERGY')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-nutrient-name\">Fat</div><div class=\"spoonacular-nutrient-value\">0.0g</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'FAT')\" onmouseout=\"spoonacularHideNutritionComposition('FAT')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-nutrient-name\">&nbsp;&nbsp;Saturated Fat</div><div class=\"spoonacular-nutrient-value\">0.0g</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'FAT_SATURATED')\" onmouseout=\"spoonacularHideNutritionComposition('FAT_SATURATED')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-nutrient-name\">Carbohydrates</div><div class=\"spoonacular-nutrient-value\">0.0g</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'CARBOHYDRATES')\" onmouseout=\"spoonacularHideNutritionComposition('CARBOHYDRATES')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-nutrient-name\">&nbsp;&nbsp;Sugar</div><div class=\"spoonacular-nutrient-value\">0.0g</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'SUGAR')\" onmouseout=\"spoonacularHideNutritionComposition('SUGAR')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-nutrient-name\">Cholesterol</div><div class=\"spoonacular-nutrient-value\">0.0mg</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'CHOLESTEROL')\" onmouseout=\"spoonacularHideNutritionComposition('CHOLESTEROL')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-nutrient-name\">Sodium</div><div class=\"spoonacular-nutrient-value\">0.0mg</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'SODIUM')\" onmouseout=\"spoonacularHideNutritionComposition('SODIUM')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-salmon\">0%</div></div><br><div class=\"spoonacular-caption spoonacular-blue\">Get Enough Of These</div><div class=\"spoonacular-nutrient-name\">Protein</div><div class=\"spoonacular-nutrient-value\">0.0g</div><div style=\"display:inline-block;width: -moz-calc(100% - 189px);width: -webkit-calc(100% - 189px);width: -o-calc(100% - 189px);width: calc(100% - 189px);\"><div class=\"spoonacular-nutrition-visualization-bar spoonacular-blue\" style=\"width:0.0%\" onmouseover=\"spoonacularShowNutritionComposition(event,'PROTEIN')\" onmouseout=\"spoonacularHideNutritionComposition('PROTEIN')\"></div><div class=\"spoonacular-nutrition-visualization-bar-number spoonacular-blue\">0%</div></div><br><div style=\"margin-top:12px;width:12px;height:12px\" class=\"spoonacular-nutrition-visualization-bar spoonacular-salmon\"></div><div style=\"margin-left:6px;margin-right:6px;width:12px;height:12px\" class=\"spoonacular-nutrition-visualization-bar spoonacular-blue\"></div>covered percent of daily need"
    
    "getPriceWidget": function(recipeID)
    {
        firebase.database().ref('priceDisplayWidget').once('value')
            .then(function(snapshot)
            {
                if(snapshot.child(recipeID))
                {
                    return snapshot.recipeID;
                }
                else 
                {
                    console.log(`Price Widget Not Found: ${recipeID}`)
                    let apiData = data.getRecipePriceBreakDownAPI(recipeID)
                        .then(function()
                        {
                            console.log(`Widget Data from Spoonify: ${apiData}`)
                            data.writePriceDisplayWidget(recipeID, apiData)
                        })
                        .then(function()
                        {
                            return apiData;
                        })
                        .catch(function(err)
                        {
                            console.log(`Error: ${err.message}`);
                            console.log(`Error: ${err.stack}`);
                            console.log(`Error: ${err.code}`);
                            console.error('an issue occurred retrieving price widget');
                        }) 
                }
            }) 
    },
    // return "<script type=\"text/javascript\" id=\"spoonacular-price-estimator-script\">jQuery(function() {var chart = new CanvasJS.Chart('spoonacularPriceBreakdownChart',{backgroundColor: 'rgba(0,0,0,0)',creditHref: '',creditText: '',toolTip:{content: \"{price} for {amount} <br> {indexLabel} <br> <img src='https://spoonacular.com/cdn/ingredients_100x100/'{image}> \",},data: [{type: 'doughnut',dataPoints: [{ image: \"yellow-bell-pepper.jpg\", amount:\"3 \", price:\"$1.79\", y:\"179\", indexLabel:\"bell peppers\"},{ image: \"garlic.jpg\", amount:\"7 cloves\", price:\"47 cents\", y:\"47\", indexLabel:\"garlic\"},{ image: \"pepper.jpg\", amount:\"1 Dashe\", price:\"3 cents\", y:\"3\", indexLabel:\"black fresh ground pepper\"},{ image: \"italian-sausage.jpg\", amount:\"4 \", price:\"$4.0\", y:\"400\", indexLabel:\"italian sausages\"},{ image: \"jalapeno-pepper.png\", amount:\"1 \", price:\"6 cents\", y:\"6\", indexLabel:\"jalapeno\"},{ image: \"olive-oil.jpg\", amount:\"8 servings\", price:\"$1.33\", y:\"133\", indexLabel:\"olive oil\"},{ image: \"parsley.jpg\", amount:\"1 handful\", price:\"16 cents\", y:\"16\", indexLabel:\"italian fresh parsley\"},{ image: \"salsa.jpg\", amount:\"3 tablespoons\", price:\"19 cents\", y:\"19\", indexLabel:\"salsa\"},{ image: \"chicken-or-turkey-sausage.jpg\", amount:\"4 \", price:\"3 cents\", y:\"3\", indexLabel:\"italian sweet italian turkey sausages\"},{ image: \"sweet-onion.jpg\", amount:\"1 \", price:\"95 cents\", y:\"95\", indexLabel:\"sweet onion\"},]}]});chart.render();});</script><div style=\"width:100%;height: 420px;overflow:hidden;position:relative;\"><div id=\"spoonacularPriceBreakdownChart\" style=\"position:absolute;top:0px;left:0px; height: 380px; width: 100%\"></div><div id=\"spoonacularPriceBreakdownTable\" style=\"position:absolute;top:0px;left:100%;margin-top:24px;margin-left:20px;font-size: 14px;line-height: 22px;\"><div class=\"spoonacular-quickview\" style=\"margin-bottom:6px;\">Cost per Serving: $1.13</div><div style=\"clear:both\"></div><div style=\"display:inline-block;float:left;max-width:80%\"><b>Ingredient</b><br>3  bell peppers<br>7 cloves garlic<br>1 Dashe black fresh ground pepper<br>4  italian sausages<br>1  jalapeno<br>8 servings olive oil<br>1 handful italian fresh parsley<br>3 tablespoons salsa<br>4  italian sweet italian turkey sausages<br>1  sweet onion<br></div><div style=\"text-align:right;display:inline-block;float:left;padding-left:1em\"><b>Price</b><br>$1.79<br>$0.47<br>$0.03<br>$4.00<br>$0.06<br>$1.33<br>$0.16<br>$0.19<br>$0.03<br>$0.95<br><div style=\"border-top: 3px double black\">$9.01</div></div></div><div id=\"spoonacularPriceView\" class=\"spoonacular-switch spoonacular-metro\" style=\"float:right;width:130px;margin-right:10px\"><input id=\"spoonacular-price-chart\" name=\"priceView\" type=\"radio\" checked onchange=\"spoonacularTogglePriceBreakdownView();\"><label for=\"spoonacular-price-chart\" onclick=\"\">chart</label><input id=\"spoonacular-price-table\" name=\"priceView\" type=\"radio\" onchange=\"spoonacularTogglePriceBreakdownView();\"><label for=\"spoonacular-price-table\" onclick=\"\">table</label><span class=\"slide-button\"></span></div></div><div style=\"margin-top:3px;margin-right:10px;text-align:right;\">Widget by <a href=\"https://spoonacular.com\">spoonacular.com</a></div></br>"

//FirebaseDataAgents

    "userCalenderAgent": function(userID)
    {
        try
        {
            let userNode = firebase.database().ref('userCalender/' + userID);
            userNode.on('child_changed', function(newCalender)
            {
                data.userCalender = newCalender.val();
            });
        }
        catch(err)
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
        }
    },

    "userCalenderGen":
    {
        "addMealArray": function(msCurrentTime, mealObject)
        {
            let key = this.userCalenderFunctions.convertToMomentL(msCurrentTime)
            data.userCalender.schedule[key] = mealObject;
        },

        "parseAPIResponse": function(response)
        {
            //append meal items
            if(response.items.length > 0 && response !== 'undefined' && response.items !== 'undefined')
            {
                console.log("parsing Api Response")
                let currentDate = new Date();
                let currentTime = currentDate.getTime();
                let currentLocDate = data.userCalenderFunctions.convertToMomentL(currentTime);
                let currentLocTime = currentLocDate.getTime();
                let mealArray = response.items;
                let mealCount = mealArray.length;
                let mealTimestamp = this.getNextMealTimeKey(currentLocTime)
                let mealsUntilDayExpires = 3

                for(let i = 0; i < mealCount; i++)
                {
                    
                    if(mealsUntilDayExpires === 0)
                    {
                        mealsUntilDayExpires = 3;
                        mealTimestamp = increaseMealTimeStamp(mealTimestamp);
                        this.addMealArray(mealTimestamp, mealArray[i]);
                    }
                    else
                    {
                        mealUntilDayExpires--
                        this.addMealArray(mealTimestamp, mealArray[i]);
                    }
                }
            }
            else
            {
                console.log("Issue with API response")
                console.log(response)
            }
            
            function increaseMealTimeStamp(time)
            {
                console.log("increasing Meal Time Stamp")
                let timeMS = time.getTime();
                let timeMsInt = parseInt(timeMS);
                let newTimeInt = Math.floor(timeMsInt + 8.64e+7);
                let timeKey = data.userCalenderFunctions.convertToMomentL(newTimeInt);
                return timeKey;
            }
        },

        "newCalender": function(userID)
        {
            if(!(userID))
            {
                console.log("currentuserid = " + userID)
                userID = data.userCred.firebaseUserID;
                console.log("currentuserid = " + userID)
            };
            
            data.userCalender.userID = userID;
            console.log("currentuserid = " + userID)
            let date = new Date();
            let msDate = date.getTime();
            data.userCalender.created = msDate;
        },

        "refreshCalender": function()
        {
            data.userCalender.starts = data.userCalenderFunctions.getFirstEntryDate();
            data.userCalender.expires = data.userCalenderFunctions.getLastEntryDate();
            data.userCalender.availableRecipes = data.userCalenderFunctions.getAllScheduleRecipes();
        },

        "getNextMealTimeKey": function(timeMSloc)
        {
            let lastEntryDate = data.userCalenderFunctions.getLastEntryDate();
            let lastEntryMSloc = lastEntryDate.getTime();
            
            if(lastEntryMSloc > timeMSloc)
            {
                let lastEntryNum = parseInt(lastEntryMSloc);
                let nextMealTime = Math.floor(lastEntryNum + 8.64e+7);
                let timeKey = data.userCalenderFunctions.convertToMomentL(nextMealTime);
                return timeKey;
            }
            else
            {
                let timeKey = data.userCalenderFunctions.convertToMomentL(timeMSloc);
                return timeKey;
            }

        },


          // "mealObject":
        // {
        //     "day":1
        //     "mealPlanId":0
        //     "slot":1
        //     "position":0
        //     "type":"RECIPE"
        //     "value":"{"id":655786,"imageType":"jpg","title":"Persimmons Pumpkin Orange Smoothie With Chia Seeds"}"
        // },
        //mealplan response
        
        // "name":"MealPlan 1563076260336"
        // "publishAsPublic":true
        // "items":[12 items
        // 0:{6 items
        // "day":1
        // "mealPlanId":0
        // "slot":1
        // "position":0
        // "type":"RECIPE"
        // "value":"{"id":655786,"imageType":"jpg","title":"Persimmons Pumpkin Orange Smoothie With Chia Seeds"}"
        // }


    },

    "userHealthProfileAgent": function(userID)
    {
        try
        {
            let userNode = firebase.database().ref('userHealthProfile/' + userID)
            userNode.on('child_changed', function(newSettings)
            {
                data.userHealthProfile = newSettings.val();
            })
        }
        catch(err)
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
        }
            
    },

//FirebaseWrite 
    //RecipeID:Object
    "writeRecipeData": function(recipeID, jsonObj)
    {
        let ref = firebase.database().ref('recipeData');

        try
        {
            ref.child(recipeID).set(jsonObj)
        }
        catch(err) 
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
            console.log(`Error: ${err.code}`)
            console.log("There was an issue with writing recipe data to firebasedb.")
        }  
    },

    //ProductID:Object
    "writeProductData": function(productID, jsonObj)
    {
        let ref = firebase.database().ref('productData');

        try
        {
            ref.child(productID).set(jsonObj)
        }
        catch(err) 
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
            console.log(`Error: ${err.code}`)
            console.log("There was an issue with writing product data to our firebasedb")
        } 
    },

    "writeNutritionData": function(recipeID, jsonObj)
    {
        let ref = firebase.database().ref('nutritionData');

        try
        {
            ref.child(recipeID).set(jsonObj)
        }
        catch(err)
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
            console.log(`Error: ${err.code}`)
            console.log("There was an issue with writing nutrition data to our firebasedb")
        } 
    },

    "writeUserCalender": function(userID, jsonObj)
    {
        let ref = firebase.database().ref('userCalender');

        try
        {
            ref.child(userID).set(jsonObj)
        }
        catch(err) 
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
            console.log(`Error: ${err.code}`)
            console.log("There was an issue with writing usercalender to our fbdb")
        } 
    },

    "writeUserHealthProfile": function(userID, jsonObj)
    {
        console.log(userID, jsonObj)
        let date = new Date();
        let msDate = date.getTime();
        let ref = firebase.database().ref('userHealthProfile');
        try
        {
            console.log(ref)
            ref.child(userID).child(msDate).set(jsonObj)
        }
        catch(err)
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
            console.log(`Error: ${err.code}`)
            console.log("There was an issue with writing user health profile to our fbdb")
        } 
    },

    "writeUserList": function(userID)
    {
        let date = new Date();
        let msDate = date.getTime();
        let ref = firebase.database().ref('userList');
        try
        {
            ref.child(userID).set(msDate)
        }
        catch 
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
            console.log(`Error: ${err.code}`)
            console.log("There was an issue with adding user to userlist in fbdb")
        }
    },

    "writeIngredientDisplayWidget": function(recipeID, string)
    {
        let ref = firebase.database().ref('ingredientDisplayWidget');
        try
        {
            ref.child(recipeID).set(string)
        }
        catch 
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
            console.log(`Error: ${err.code}`)
            console.log("There was an issue with writing ingredientwidget to our fbdb")
        }
    },

    "writeNutritionDisplayWidget": function(recipeID, string)
    {
        let ref = firebase.database().ref('nutritionDisplayWidget');
        try
        {
            ref.child(recipeID).set(string)
        }
        catch 
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
            console.log(`Error: ${err.code}`)
            console.log("There was an issue with writing nutrition widget to our fbdb")
        }
    },

    "writePriceDisplayWidget": function(recipeID, string)
    {
        let ref = firebase.database().ref('priceDisplayWidget');
        try
        {
            ref.child(recipeID).set(string)
        }
        catch 
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
            console.log(`Error: ${err.code}`)
            console.log("There was an issue with writing price widget to our fbdb")
        }
    },


//ACCESSIBLE DATA OBJECTS  
    "userCalender" : 
    {
        "userID": "",
        //first 
        "starts": "",
        //the last localized date time schedules, key/values.
        "expires": "",
        //this a returned from an API Call which is all the recipe id's returned in meal query.
        "availableRecipes" : [],
        //key = datelocal value = mealObject
        "schedule" : {},
    },

    "userHealthProfile" : 
    {
        "userID": "",
        "created": "",
        "height" : "",
        "weight" : "",
        "age" : "",
        "gender" : "",
        "dietarySelection" : [],
        "exclusionList" : [],
        "healthSettings" : {
            "calTarget": 0,
            "proteinTarget": 0,
            "carbTarget": 0,
            "fatTarget": 0,
        }
    },
    //
    "userCalenderFunctions":
   {
       //schedule queries
       "getFirstEntryDate" : function(){
           let key = Object.keys(data.userCalender.schedule)[0];
           let date = new Date(key);
           return date;
       },

       "getLastEntryDate" : function(){
           let keyID = Math.floor(Object.keys(data.userCalender.schedule).length - 1);
           let key = Object.keys(data.userCalender.schedule)[keyID];
           let date = new Date(key);
           return date;
       },

       "getLastRefreshDate": function(){
           let expireDate = this.getLastEntryDate();
           let expireDateMS = this.convertToEpoch(expireDate);
           let msweek = Math.floor(8.64e+7 * 7);
           let expireDateInt = this.convertDatetoNum(expireDateMS);
           let lastRefreshDatemsInt = Math.floor(expireDateInt - msweek);
           let lastRefreshDatems = this.convertNumtoDate(lastRefreshDatemsInt);
           let lastRefreshDate = this.convertToMomentL(lastRefreshDatems);
           return lastRefreshDate;
       },

       "getCurrentMealObject": function(){
           let date = new Date();
           let locDate = this.convertToMomentL(date);
           let key = locDate.toString();

           if(data.userCalender.schedule[key])
           {
               return data.userCalender.schedule[key];
           }
           else
           {
               console.log("an entry does not exist in the schedule for " + key);
               console.log(data.userCalender.schedule);
               return;
           }
       },

       "getNextMealObject": function(){
           let date = new Date();
           let nextDay = this.addMillisecondDay(date)
           let nextDayloc = this.convertToMomentL(nextDay)
           let key = nextDayloc.toString()
           return this.userCalender.schedule[key]


       },

       "convertToMomentL": function(datetime){
           return moment.unix(datetime).format('L');
       },

       "convertToEpoch": function(datetime){
            let time = moment(datetime).toDate();
            return time.getTime();
       },

       "convertDatetoNum": function(date){
           return Date.parse(date);
       },

       "convertNumtoDate": function(num){
           return new Date(num);
       },

       "addMillisecondDay" : function(datetime){
           let dateTimeNum = this.convertDatetoNum(datetime);
           let newDateTimeNum = Math.floor(dateTimeNum + 8.64e+7);
           let newDateTime = this.convertNumtoDate(newDateTimeNum)
           return newDateTime;
       },

       "getAllScheduleRecipes" : function()
       {
           if (Object.keys(data.userCalender.schedule).length === 0)
           {
               Console.log("userCalender does not have any schedule data");
               return;
           }

           else
           {
               let recipeIDArray = [];
               for(let i = 0;i < Object.keys(data.userCalender.schedule).length; i++)
               {

                   let key = Object.key(data.userCalender.schedule)[i];
                   let recipeID = data.userCalender.schedule[key].value.id;
                   recipeIDArray.push(recipeID);
               }
               return recipeIDArray;
           }
       },

       "getRecipe" : function(key)
       {
           if(!(typeof key === 'stringValue' || key instanceof String))
           {
               key = key.toString();
           }

           if (!(data.userCalender.schedule[key]))
           {
               Console.log("userCalender does not contain an entry of " + key);
               return;
           }

           else
           {
               let recipeID = data.userCalender.schedule[key].value.id;
               return recipeID;
           }
       }
    },
    //object saved as child to msdate:obj 
    "userCred":
    {
        //firebaseUserID is a main index for data storage records.
        "firebaseUserID": "",
        "firebaseDisplayName": "name",
        //GoogleCredInfo
        "googAcsTkn": "",
        "googUserInfo": "",
        "refreshToken": "unknown",
        //firebaseinfo
        "email": "unknown",
        //tracked
        "signupDate": "unknown",
        "lastSignIn": "unknown",
        "active": false,
        "anonymous": false,
    },

    //collected and stored as an object for each user instance.
    "browserData": 
    {
        "browserName": "null",
        "browserVersion": "null",
        "browserLanguage": "null",
        "cookiesEnabled": false,
        "sizeScreenW" : "unknown",
        "sizeScreenH" : "unknown",
        "latCoord" : "unknown",
        "longCoord" : "unknown",
        "altitude" : "unknown",
        "accuracy": "unknown",
        "referrer": "unknown",
        "previousSites": {}
    },

//AUTHENTICATION CLUSTER
    //AGENTS
    "authAgent": function()
    {
        this.InitFirebase();
        firebase.auth().onAuthStateChanged(function(user){ 
            console.log("authagent state change detected: " + user)
            if(user === null)
            {
                data.refreshBrowserData();
                return;
            }
            
            if (data.userCred.firebaseUserID !== null && typeof data.userCred.firebaseUserID !== 'undefined' && data.userCred.firebaseUserID !== 'null' && data.userCred.firebaseUserID !== '')
            {            
                console.log("currentuserid = " + data.userCred.firebaseUserID)
                console.log("null check on previous user is true")
                let previousID = data.userCred.firebaseUserID;
                data.userLogout(previousID)
            }
            let newID = user
            
            window.user = newID;
            let userID = newID.uid;
            console.log(newID.uid)
            data.userCred.firebaseUserID = userID;
            data.enableUserCredAgent(userID)
            data.refreshBrowserData();
            console.log("enabled UserCredAgent")
        })
    },

    "enableUserCredAgent": function(id)
    {
        this.userCred.active = true;
        console.log(id)
        
        //if data exists turn on agent
        if (this.userIDExists(id))
        {
            data.userCredAgent(id)
                .then(console.log("user data agent activated"))
                .catch(function(id)
                {
                    //attempts to read from local if failing to connect to db
                    data.readUserCredLocal(id);
                })
            data.writeUserCredLocal(id)
                .then(console.log("user cred written locally"))
            data.writeUserCred(id)
                .then(console.log("user cred written to FireBase"))
                .catch(function(id)
                {
                    //attempts to read from local if failing to connect to db
                    data.readUserCredLocal(id);
                })
        }
        //else turn on data and write settings data.
        else
        {
            
            console.log(id);
            let msDate = new Date().getTime();
            data.userCred.signupDate = msDate;
            
            try
            {
                data.userCredAgent(id)
            }

            catch
            {
                data.readUserCredLocal(id);
            }
            
                
            //attempts to read from local if failing to write to db
            
            data.writeUserCredLocal(id)
            data.writeUserCred(id)
        }
    },

    "userCredAgent": function(userID)
    {
        
         
        try
        {
            let userNode = firebase.database().ref('userCred/' + userID);
            userNode.on('child_added', function(storedCredential)
            {
                data.userCred = storedCredential.val();
            });
        }
        catch(err)
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
        }
},

    //WRITEDATA
    "writeUserCred": function(userID)
    {
         
        let date = new Date();
        let msDate = date.getTime();
        let currentUser = firebase.auth().currentUser;
        this.userCred.firebaseDisplayName = currentUser.displayName;
        this.userCred.email = currentUser.email;
        this.userCred.refreshToken = currentUser.refreshToken;
        this.userCred.lastSignIn = msDate
        console.log(data.userCred.firebaseUserID)

        try
        {
            let ref = firebase.database().ref();
             
            console.log(typeof userID)
            console.log(typeof msDate)
             
            let newcred = JSON.parse(data.userCred)
            ref.child('userList').child(userID).set(msDate);
            ref.child('userCred').child(userID).child(msDate).set(newcred);
             
            ref.child('BrowserSettings').child(userID).child(msDate).set(data.browserData);
           
        }
        catch(err)
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
            console.log(`Error: ${err.code}`)
            console.log("There was an issue with saving userProfile Data to our Firebase")
        }
        finally
        {
             
        }
    },

    "writeUserCredLocal" : function(userID)
    {
        let stringcred = JSON.stringify(data.userCred);
        console.log(stringcred)
        window.localStorage.setItem(userID, stringcred)
        
        if (this.browserData.cookiesEnabled)
        {
            let date = new Date()
            let expireDate = date.getTime() + 2.628e+9 | 0
            window.document.cookie = (userID + '=' + (JSON.stringify(data.userCred)) + '; expires=' + expireDate);
        }
    },

    //CONDITIONS

    "userIDExists": function(userID)
    {
        firebase.database().ref('userList').once('value')
            .then(function(snapshot)
            {
                if(snapshot.child(userID))
                {
                    return true;
                }
                else 
                {
                    return false;
                }
            })
            .catch(function(err)
            {
                console.log(err.message)
            })
    },

    //JOBS

    //**TODO** PASS IN LOGIN METHOD - USE SWITCH TO FIREOFF PREFERRED CHOICE
    "userLogin" : function(method)
    {
        console.log('userLogin called with ' + method)
        if(method === 'googlePopIn')
        {
            var result = false;
            try
            {
                data.googleLoginPopUp()
                result = true;
            }   
            catch
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                result = false;
            }
            finally
            {
                return result;
            }
        }
        else if(method === 'googleRedirect')
        {
            var result = false;
            try
            {
                data.googleLoginRedirect()
                result = true;
            }   
            catch
            {
                alert(`Error: ${err.message}`);
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                result = false;
            }
            finally
            {
                return result;
            }
        }
        else
        {  
            var result = false;
            try
            {
                console.log('logging anon')
                firebase.auth().signInAnonymously()
                let currentUser = firebase.auth().currentUser;
                console.log(currentUser.uid)
                data.userCred.firebaseUserID = currentUser.uid;
                console.log(currentUser)
                data.userCred.anonymous = true;
                result = true;
                console.log('in try block')
                console.log(result)
            }
            catch
            {
                alert(`Error: ${err.message}`);
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                result = false;
            }
            finally
            {
                console.log(result)    
                return result;
            }
        }
    },

    "userLogout" : function(userID)
    {
        let userNode = firebase.database().ref('UserCreds/' + userID)
        userNode.off('child_added')
        this.userCred.active = false;
        this.writeUserCredLocal(userID);
        this.writeUserCred(userID);
    },

    "refreshBrowserData" : function ()
    {
        data.browserData.browserName = navigator.appCodeName;
        data.browserData.browserVersion = navigator.appVersion;
        data.browserData.browserLanguage = navigator.language;
        data.browserData.cookiesEnabled = navigator.cookieEnabled;
        data.browserData.sizeScreenH = screen.height;
        data.browserData.sizeScreenW = screen.width;
        navigator.geolocation.getCurrentPosition(GeoLocSuccess, GeoLocFail)
   
        data.browserData.referrer = document.referrer;
        data.browserData.previousSites = window.history;

        function GeoLocSuccess(pos)
        {
            let crd = pos.coords;
            data.browserData.latCoord = crd.latitude;
            data.browserData.longCoord = crd.longitude;
        }

        function GeoLocFail(pos)
        {
            data.browserData.latCoord = "unknown";
            data.browserData.longCoord = "unknown";
        }
    },

    "googleAccessPrep": function()
    {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        provider.addScope('openid');
        firebase.auth().useDeviceLanguage();
    },
    
    "googleLoginPopUp": function()
    {
        this.googleAccessPrep()
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result)
        {
            console.log(result)
            if(result.credential)
            {
                let currentUser = firebase.auth().currentUser;
                console.log(currentUser.uid)
                data.userCred.firebaseUserID = currentUser.uid;
                data.userCred.anonymous = false;
                data.userCred.googUserInfo = result.user;
                data.userCred.googAcsTkn = result.credential.accessToken;
            }
            else{
                console.log(result);
                console.log(result.credential);
                return;
            }
        })
        .catch(function(err)
        {
            alert(`Error: ${err.message}`);
            console.log(`Error: ${err.email}`)
            console.log(`Error: ${err.credential}`)
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
            console.log(`Error: ${err.code}`)
        }
        )
    },
    
    "googleLoginRedirect" : function()
    {
        
        this.googleAccessPrep()
        .then(function()
        {
            firebase.auth().signInWithRedirect(provider)
        })
        .then(function()
        {
            firebase.auth().getRedirectResult()
            .then(function(result){
                if(result.credential)
                {
                    console.log(currentUser.uid)
                    let currentUser = firebase.auth().currentUser;
                    data.userCred.firebaseUserID = currentUser.uid;
                    data.userCred.anonymous = false;
                    data.userCred.googUserInfo = result.user;
                    data.userCred.googAcsTkn = result.credential.accessToken;
                }
                else{
                    return;
                }
            }
            )
        })
        .catch(function(err)
        {
            alert(`Error: ${err.message}`);
            console.log(`Error: ${err.email}`)
            console.log(`Error: ${err.credential}`)
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
            console.log(`Error: ${err.code}`)
        }
        )
    },
}

////////////////////////LANDING//////////////
let landingPageFunctions = {
    "buttonFunctions": {
        "activate": function()
        {
            console.log("activating landing page functions")
            this.dietModalSubmit(true)
            this.dietModalCancel(true)
            this.googleLogin(true)
            this.anonLogin(true)
        },

        "deactivate": function()
        {
            this.dietModalSubmit(false)
            this.dietModalCancel(false)
            this.googleLogin(false)
            this.anonLogin(false)
        },
        
        "dietModalSubmit": function(bool)
        {
            if(bool)
            {
                //todo allow multiple options
                $('#btnNext').on('click', function(event){
                    console.log("dietModal SubmitButton EventRegistered:")
                     
                    event.preventDefault();
                        var user = firebase.auth().currentUser;

                        if (user) 
                        {
                            landingPageFunctions.initUser();
                        } 
                        else 
                        {
                            // No user is signed in.
                            try
                            {
                                console.log("attempting to login via auth")
                                data.userLogin('auth')
                            }
                            catch
                            {
                                console.log("user failed to login, trying to init session anyways")
                            }
                            finally
                            {
                                landingPageFunctions.initUser();
                            }
                           
                        }
                })
            }
        },

        "dietModalCancel" : function(bool)
        {
            if(bool)
            {
                $('#btnCancel').on('click',function(e){
                    e.preventDefault();
                    console.log("dietModal CancelButton EventRegistered:")
                    $('#inputCalories').val('');
                    $('#inputExclusion').val('');
                    $('#dietOption option:selected').prop('selected', false);
                    $('#dietOption :first').prop('selected', true);
                    $('li').remove();
                    $('#myModalDiet').modal('hide');
                });
            }
            else
            {
                $('#btnCancel').off('click')
            }
        },

        "googleLogin" : function(bool)
        {
           if(bool)
           {
                console.log("google signin listener is activated")
                $('#googleLogin').on('click', function(e){
                    e.preventDefault();
                    console.log("LandingPage Google Sign-in Button EventRegistered:")
                    data.userLogin('googlePopIn');
                    $('#loginModal').modal('hide');
                    // $('#myModalDiet').modal('show');
                
                });
           }
           else
           {
            $('#googleLogin').off('click')
           }
        },
        
        "anonLogin" : function(bool)
        {
            if(bool)
            {
                $('#anonymousLogin').on('click', function(e){
                e.preventDefault();
                console.log("LandingPage Anon Sign-in Button EventRegistered:")
                data.userLogin('anon');
                $('#loginModal').modal('hide');
                // $('#myModalDiet').modal('show');
               
                });
            }
            else
            {
                $('#anonymousLogin').off('click')
            }
        } 
    },

    "initUser": function()
    {
        console.log('trying to init user')
        try
        {
            //buildUserProfile
             ;
            console.log(data.userCred.firebaseUserID);
            let userID = data.userCred.firebaseUserID;
             ;
            let newUserHealthProfile = data.userHealthProfile;
            let calories = $('#inputCalories').val();
            var dietOptions = $('#dietOption').val();
            let excVal = $('#inputExclusion').val().toLowerCase()
            let excArr = convertExclusionValuetoArray(excVal)
            newUserHealthProfile.dietarySelection = dietOptions;
            newUserHealthProfile.healthSettings.calTarget = calories;
            newUserHealthProfile.exclusionList = excArr

            //StoreUserProfile
            try
            {
                 
                data.writeUserHealthProfile(userID, newUserHealthProfile)
            }
            catch(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
            }

            //GenerateCalenderAddSchedule
            try
            {
                data.userCalenderGen.newCalender(userID);
                data.getMealPlan("week");
            }
            catch(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
            }
        }
        catch(err)
        {
            console.log(`Error: ${err.message}`)
            console.log(`Error: ${err.stack}`)
        }
        
        //DOM Manipulation and Redirect
        finally
        {
            $('#myModalDiet').modal('hide');
            $('#inputCalories').val('');
            $('#dietOption option:selected').prop('selected', false);
            $('#dietOption :first').prop('selected', true);
            $('li').remove();
            $('#loginModal').modal('show');
            window.location.replace(dashboard)
        }

        function convertExclusionValuetoArray(input)
            {
                if (input.includes(','))
                {
                    return input.split(',')
                }
                else
                {
                    return input.trim();
                }
            }
    },

    "beingHealthyFunctions": {
        "searchBox": function() {
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
        },

        "onHomeClick" : function(){
            document.getElementById("myCarousel").style.visibility ="visible";
            document.getElementById("eatRightDiv1").style.visibility ="collapse";
            document.getElementById("eatRightDiv1").style.height ="0%";
            document.getElementById("eatRightDiv1").setAttribute("src",null);
        },

        "onEatHealhyClick" : function()
        {
            document.getElementById("myCarousel").style.visibility ="collapse";
            document.getElementById("eatRightDiv1").style.visibility ="visible";
            document.getElementById("eatRightDiv1").style.height ="80%";
            document.getElementById("eatRightDiv1").setAttribute("src","https://www.youtube.com/embed/28CIFOhkKrU")
        },

        "onActiveClick": function()
        {
            {
                document.getElementById("myCarousel").style.visibility ="collapse";
                document.getElementById("eatRightDiv1").style.visibility ="visible";
                document.getElementById("eatRightDiv1").style.height ="80%";
                document.getElementById("eatRightDiv1").setAttribute("src","Images/active.jpg")
            }
        },

        "onDropdown": function()
        {
            document.getElementById("myDropdown").classList.toggle("show");
        }
    },

}
////////////////////////LANDINGEND///////////////////////
let dashboardPageFunctions = {
    "buttonFunctions":
    {
        "activate":function(){},
        "deactivate":function(){
            console.log('deactivated db pages')
        },

        "showMeals": function(bool)
        {
            if(bool)
            {
            $("#showMeals").on("click", function(){   
            //clear previous selection range before displaying new 
            //$("#meals-section").empty();
        
            var dbDatesArray = (Object.entries(data.userCalender.schedule));
        
            var fromDate = moment.unix(dbDatesArray[0][0]).format('L');
            var toDate = moment.unix(dbDatesArray[dbDatesArray.length-1][0]).format('L');
        
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
                                "mealTitle": dbDatesArray[i][1].value.title,
                                "mealRecipeId" :dbDatesArray[i][1].value.id,
                                "mealImage" : data.getRecipeData(dbDatesArray[i][1].value.id).image
                            }); 
                        }       
                    }
                createMealContainer(arrayOfMealsPerDay);
            }   
        });
        }else{
            console.log("something went wrong with retrieving the recipes");

        }
    }
    },

    "enumerateDaysBetweenDates": function(startDate, endDate) {

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
    },


    "createMealContainer": function (dayMealsArray)
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
            mealCard.attr("recipeID",dayMealsArray[i].mealRecipeId);
            var mealName = $('<h5 class="card-title">');
            mealName.attr("onmouseover","showDescriptionModal(this)");
            mealCard.attr("onmouseover","hideDescriptionModal()");
            var viewButton= $('<a href="#" class="btn btn-primary">View recipe</a>');
            viewButton.attr("onclick","getRecipe(this)");
            viewButton.attr("data-toggle","modal");
            viewButton.attr("data-target","#myModal");
            viewButton.attr("recipeID",dayMealsArray[i].mealRecipeId);
            var divMeal = $("<div class='meal col-xs-6 col-sm-6 col-md-3 col-lg-3'>");
            var mealType = $("<h5 class='mealType'>");

            mealType.text(dayMealsArray[i].mealTime);
            mealName.text(dayMealsArray[i].mealTitle);
            mealCardBody.append(mealType);
            mealCardBody.append(mealImage);
            mealCardBody.append(mealName);
            mealCardBody.append(viewButton);
            mealCard.html(mealCardBody);
            divMeal.append(mealCard);
            divDay.append(divMeal);

        }

    $("#meals-section").append(divDay);
    },



}
///////////////////////////Dashboard End
let sessionManager = {
    "detectPage": function()
    {
        let loc = getLoc()
        if (loc === 'landing.html')
        {
            console.log("landing page detected")
            data.authAgent();
            console.log(landingPageFunctions)
            dashboardPageFunctions.buttonFunctions.deactivate();
            landingPageFunctions.buttonFunctions.activate();
        }
        else if(loc === 'dashboard.html')
        {
            data.authAgent();
            landingPageFunctions.buttonFunctions.deactivate();
            dashboardPageFunctions.buttonFunctions.activate();
        }
        //additional adds for additional html files.
        //else if(loc === '')

        else
        {
            console.error("session Manager detected invalid document: " + loc)
        }
        function getLoc()
        {
            var path = window.location.pathname;
            var page = path.split("/").pop();
            console.log(window.location)
            console.log(path)
            console.log(page)
            return page;
        } 
    },

    "getMealType": function (mealDate) {
        var type = null; 
        
        var split_afternoon = 12 
        var split_evening = 17 
        var currentHour = parseFloat(moment(mealDate).format("HH"));
        
        if(currentHour >= split_afternoon && currentHour <= split_evening) {
            type = "Lunch";
        } else if(currentHour >= split_evening) {
            type = "Dinner";
        } else {
            type = "Breakfast";
        }
        
        return type;
    },

    "getRecipe": function(el){
    
        var recipeID =  $(el).attr("recipeID");
         
        var objectRecipe = data.getRecipeData(recipeID);
        var recipeInstructions = objectRecipe.instructions;
        var recipeId = objectRecipe.id;
        var recipeImageURL = object.image;
        var recipeImage = $("<img>");
        recipeImage.attr("src",recipeImageURL);
        $("h5#recipeTitle").text(objectRecipe.title);
     
        //creating ingredientsWidgetButton
        var ingredientsWidgetButton = $("<button>");
        ingredientsWidgetButton.attr("id",recipeId);
        ingredientsWidgetButton.attr("onclick","getIngredientsWidget(this)");
        ingredientsWidgetButton.attr("data-toggle","modal");
        ingredientsWidgetButton.attr("data-target","#ingridientsWigdetModal");
             
        //creating nutritionsWidgetButton
        var nutritionsWidgetButton = $("<button>");
        nutritionsWidgetButton.attr("id",recipeId);
        nutritionsWidgetButton.attr("onclick","getNutritionsWidget(this)");
        nutritionWidgetButton.attr("data-toggle","modal");
        nutritionWidgetButton.attr("data-target","#nutritionsWigdetModal");
     
        //appending button to recipe modal
        $(".recipe-modal").append(recipeImage);
        $(".recipe-modal").append(recipeInstructions);
        $(".recipe-modal").append(ingredientsWidgetButton);
     
    },

    "getIngredientsWidget": function(el){
        var id = $(el).attr("id");
        var ingredientsDiv = $("<div>");
        var ingredientsData = data.getRecipeIngredientDisplayAPI(id);
        ingredientsDiv.html(ingredientsData);
        $(".ingredients-modal").append(ingredientsDiv);
    
    
    },

    "getNutritionsWidget": function(el){
        var id = $(el).attr("id");
        var nutritionsDiv = $("<div>");
        var nutritionsData = data.getRecipeNutritionAPI(id);
        nutritionsDiv.html(nutritionsData);
        $(".nutritions-modal").append(nutritionsDiv);
    
    
    }
    
    
}

///////////////MAIN ENTRY
$( document ).ready(function() {
    sessionManager.detectPage();
});
////////////////////MAIN END



