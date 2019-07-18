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
              request.setRequestHeader("X-RapidAPI-Key", data.spoonifyConfig.key );
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
        let host = data.spoonifyConfig.url
        let mealgenerator = "/recipes/mealplans/generate?";
        let queryString = `${host}${mealgenerator}timeFrame=${time}`
            .then(function(){data.getMealPlanAPI.appendCalories();})
            .then(function(){data.getMealPlanAPI.appendDietString();})
            .then(function(){data.getMealPlanAPI.appendExcludeString();})
            .then(function(){
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
            })})
            .catch(function(err)
            {
                console.log(`Error: ${err.message}`);
                console.log(`Error: ${err.stack}`);
                console.log(`Error: ${err.code}`);
                console.error('an issue occurred retrieving meal schedule');
            })
        
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
    "database": firebase.database(),
    
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
        databaseInit: firebase.database(),
        AuthInit: firebase.auth()
    },

    //Init
    "InitFirebase": function()
    {
        let config = this.firebaseConfig
        this.config.databaseInit.initializeApp(config)
    },

//FirebaseDataQueries
    //mockObject
    
    "getRecipeData":  function(recipeID)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.ref('/recipeData').once('value')
            .then(function(snapshot)
            {
                if(snapshot.child(recipeID))
                {
                    return JSON.parse(snapshot.recipeID);
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
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.ref('/productData').once('value')
            .then(function(snapshot)
            {
                if(snapshot.child(productID))
                {
                    return snapshot.productID;
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
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.ref('/nutritionData').once('value')
            .then(function(snapshot)
            {
                if(snapshot.child(productID))
                {
                    return snapshot.productID;
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
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.ref('/ingredientDisplayWidget').once('value')
            .then(function(snapshot)
            {
                if(snapshot.child(recipeID))
                {
                    return snapshot.recipeID;
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
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.ref('/nutritionDisplayWidget').once('value')
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
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.ref('/priceDisplayWidget').once('value')
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
        this.firebaseConfig.databaseInit.InitFirebase();
        userNode = this.firebaseConfig.databaseInit.ref('/userCalender/' + userID)
        userNode.on('child_changed', function(newCalender)
        {
            data.userCalender = newCalender;
        })
            .catch(function(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
            })
 
           
    },

    "UserCalenderGen":
    {
        "addMealArray": function(timekeystring, mealObject)
        {
            data.userCalender.schedule[timekeystring] = mealObject;
        },

        "parseAPIResponse": function(response)
        {
            if(response.items.length > 3)
            {
               
            
            }
            
        },

        "newCalender": function(userID)
        {
            if(!(userID)){userID = data.userCred.firebaseUserID;};
            data.userCalender.userID = userID;

        },
        "refreshCalender": function()
        {
            data.userCalender.starts = data.userCalenderFunctions.getFirstEntryDate();
            data.userCalender.expires = data.userCalenderFunctions.getLastEntryDate();
            data.userCalender.availableRecipes = data.userCalenderFunctions.getAllScheduleRecipes();
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
        this.firebaseConfig.databaseInit.InitFirebase();
        userNode = this.firebaseConfig.databaseInit.ref('/userHealthProfile/' + userID)
        userNode.on('child_changed', function(newSettings)
        {
            data.userHealthProfile = newSettings;
        })
            .catch(function(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
            })
    },

//FirebaseWrite
    "writeRecipeData": function(recipeID, jsonObj)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.getInstance().getReference()
            .then(function(snapshot){
                snapshot.child(recipeData).child(recipeID).setValue(jsonObj)
            })
            .catch(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                console.log(`Error: ${err.code}`)
                console.log("There was an issue with saving Recipe Data to our Database")
            }
    },

    "writeProductData": function(productID, jsonObj)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.getInstance().getReference()
            .then(function(snapshot){
                snapshot.child(productData).child(productID).setValue(jsonObj)
            })
            .catch(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                console.log(`Error: ${err.code}`)
                console.log("There was an issue with saving Recipe Data to our Database")
            }
    },

    "writeNutritionData": function(recipeID, jsonObj)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.getInstance().getReference()
            .then(function(snapshot){
                snapshot.child(nutritionData).child(recipeID).setValue(jsonObj)
            })
            .catch(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                console.log(`Error: ${err.code}`)
                console.log("There was an issue with saving Nutrition Data to our Database")
            }
    },

    "writeUserCalender": function(userID, jsonObj)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.getInstance().getReference()
            .then(function(snapshot){
                snapshot.child(userCalender).child(userID).setValue(jsonObj)
            })
            .catch(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                console.log(`Error: ${err.code}`)
                console.log("There was an issue with saving Recipe Data to our Database")
            }
    },

    "writeUserHealthProfile": function(userID, jsonObj)
    {
        let Date = new Date().getTime()
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.getInstance().getReference()
            .then(function(snapshot){
                snapshot.child(userHealthProfile).child(userID).child(msDate).setValue(jsonObj)
            })
            .catch(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                console.log(`Error: ${err.code}`)
                console.log("There was an issue with saving Recipe Data to our Database")
            }
    },

    "writeUserList": function(userID)
    {
        let Date = new Date().getTime()
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.getInstance().getReference()
            .then(function(snapshot){
                snapshot.child(userHealthProfile).child(userID).child(msDate).setValue(jsonObj)
            })
            .catch(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                console.log(`Error: ${err.code}`)
                console.log("There was an issue with saving Recipe Data to our Database")
            }
    },

    "writeIngredientDisplayWidget": function(recipeID, string)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.getInstance().getReference()
            .then(function(snapshot){
                snapshot.child(ingredientDisplayWidget).child(recipeID).setValue(string)
            })
            .catch(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                console.log(`Error: ${err.code}`)
                console.log("There was an issue with saving Recipe Data to our Database")
            }
    },

    "writeNutritionDisplayWidget": function(recipeID, string)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.getInstance().getReference()
            .then(function(snapshot){
                snapshot.child(nutrientDisplayWidget).child(recipeID).setValue(string)
            })
            .catch(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                console.log(`Error: ${err.code}`)
                console.log("There was an issue with saving Recipe Data to our Database")
            }
    },

    "writePriceDisplayWidget": function(recipeID, string)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.getInstance().getReference()
            .then(function(snapshot){
                snapshot.child(priceDisplayWidget).child(recipeID).setValue(string)
            })
            .catch(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                console.log(`Error: ${err.code}`)
                console.log("There was an issue with saving Recipe Data to our Database")
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
           return moment(datetime).format('L');
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
        "browserEngine": "null",
        "browserVersion1a": "null",
        "browserLanguage": "null",
        "browserName": "null",
        "browserEngine": "null",
        "browserPlatform": "null",
        "browserOnline": false,
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
        this.firebaseConfig.databaseInit.InitFirebase();
        this.refreshBrowserData();
        this.firebaseConfig.AuthInit.onAuthStateChanged(function(user){
            newID = user;
            previousID = data.userCred.firebaseUserID;
            userLogout(previousID)
            .then(function(newID)
            {
                window.user = newID;
                let userID = newID.uid;
                if(user)
                {
                    data.enableUserCredAgent(userID)
                    console.log("enabled UserCredAgent")
                    
                }
                else
                {    
                data.userLogin()
                    .then(function(){
                        let newuserID = data.userCred.firebaseUserID;
                        data.enableUserCredAgent(newuserID);
                        console.log("enabled UserCred Agent")
                    })
                }
            })
        })
    },

    "enableUserCredAgent": function(id)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        this.userCred.active = true;
        
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
        data.userCred.signupDate = msDate;
        data.userCredAgent(id)
            .then(console.log("user cred agent activated"))
            .catch(function(id)
            {
                //attempts to read from local if failing to write to db
                data.readUserCredLocal(id);
            })
        data.writeUserCredLocal(id)
            .then(console.log("user cred written locally"))
        data.writeUserCred(id)
            .then(console.log("user cred written to FB"))
            .catch(function(id)
            {
                //attempts to read from local if failing to write to db
                data.readUserCredLocal(id);
            })
        }
    },

    "userCredAgent": function(userID)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        userNode = this.firebaseConfig.databaseInit.ref('/userCred/' + userID)
        userNode.on('child_added', function(storedCredential)
        {
            data.userCred = storedCredential
        })
            .catch(function (err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
            })
    },

    //WRITEDATA
    "writeUserCred": function(userID)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        let Date = new Date().getTime()
        let currentUser = this.firebaseConfig.authInit.currentUser;
        this.userCred.firebaseDisplayName = currentUser.displayName;
        this.userCred.email = currentUser.email;
        this.userCred.refreshToken = currentUser.refreshToken;
        this.userCred.lastSignIn = msDate

        this.firebaseConfig.databaseInit.getInstance().getReference()
            .then(function(snapshot){
                snapshot.child(userList).child(userID).setValue(msDate)
            })
            .then(function(snapshot){
                snapshot.child(userCred).child(userID).child(msDate).setValue(data.userCred)
            })
            .then(function(snapshot)
            {
                snapshot.child(BrowserSettings).child(userID).child(msDate).setValue(data.browserData)
            })
            .catch(err)
            {
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
                console.log(`Error: ${err.code}`)
                console.log("There was an issue with saving userProfile Data to our Firebase")
            }
    },

    "writeUserCredLocal" : function(userID)
    {
        window.localStorage.setItem(userID, JSON.stringify(data.userCred))
        if (this.browserData.cookiesEnabled)
        {
            let Date = new Date().getTime()
            let expireDate = date + 2.628e+9 | 0
            window.document.cookie = (userID + '=' + (JSON.stringify(data.userCred)) + '; expires=' + expireDate);
        }
    },

    //CONDITIONS

    "userIDExists": function(userID)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        this.firebaseConfig.databaseInit.ref('/userList').once('userlist')
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
    },

    //JOBS

    //**TODO** PASS IN LOGIN METHOD - USE SWITCH TO FIREOFF PREFERRED CHOICE
    "userLogin" : function()
    {
        let response = window.confirm("Not Signed In: Sign in with Google?, hit yes to link your google account or cancel to remain anonymous. specifically I will be looking at: https://www.googleapis.com/auth/admin.directory.customer.readonly, https://www.googleapis.com/auth/analytics.readonly, https://www.googleapis.com/auth/adsense.readonly, https://www.googleapis.com/auth/contacts.readonly, even though I dont even know what kind of data this is structured as, also I am collecting all of your availble browser data, and I dont even know the legality of that... ")
        if(response)
        {
            data.googleLogin()
                .then(function ()
                {
                    let currentUser = data.firebaseConfig.authInit.currentUser;
                    data.userCred.firebaseUserID = currentUser.uid;
                    data.userCred.anonymous = false;
                })
                .catch(function (err)
                {
                    alert(`Error: ${err.message}`);
                    console.log(`Error: ${err.message}`)
                    console.log(`Error: ${err.stack}`)
                })
        }
        else
        {
            data.firebaseConfig.authInit.signInAnonymously()
                .then(function ()
                {
                    let currentUser = data.firebaseConfig.authInit.currentUser;
                    this.userCred.firebaseUserID = currentUser.uid;
                    this.userCred.anonymous = true;
                })
                .catch(function (err)
                {
                    alert(`Error: ${err.message}`);
                    console.log(`Error: ${err.message}`)
                    console.log(`Error: ${err.stack}`)
                }
            )
        }
    },

    "userLogout" : function(userID)
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        userNode = this.firebaseConfig.databaseInit.ref('/UserCreds/' + userID)
        userNode.off('child_added')
        this.userCred.active = false;
        this.writeUserCredLocal(userID);
        this.writeUserCred(userID);
    },

    "refreshBrowserData" : function ()
    {
        window.browserName()
        {
            data.browserData.browserName = navigator.browserName;
        };
        
        window.browserEngine()
        {
            data.browserData.browserEngine = navigator.browserEngine;
        };

        window.browserVersion1a()
        {
            data.browserData.browserEngine = navigator.appVersion;
        };

        window.browserLanguage()
        {
            data.browserData.browserLanguage = navigator.language;
        };

        window.browserOnline()
        {
            data.browserData.browserOnline = navigator.onLine;
        };

        window.dataCookiesEnabled()
        {
            data.browserData.cookiesEnabled = navigator.cookieEnabled;
        };

        window.sizeScreenH()
        {
            data.browserData.sizeScreenH = screen.height;
        };

        window.sizeScreenW()
        {
            data.browserData.sizeScreenW = screen.width;
        };

        window.latitude()
        {
            data.browserData.latCoord = position.coords.latitude;
        };

        window.longitude()
        {
            data.browserData.longCoord = position.coords.longitude;
        };
        
        window.altitude()
        {
            data.browserData.altitude = position.coords.altitude;
        };

        window.accuracy()
        {
            data.browserData.accuracy = position.coords.accuracy;
        }

        window.referrer()
        {
            data.browserData.referrer = document.referrer;
        }

        window.previousSites()
        {
            data.browserData.previousSites = history;
        }
    },

    "googleLogin": function()
    {
        this.firebaseConfig.databaseInit.InitFirebase();
        var provider = new firebase.auth.googleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        provider.addScope("https://www.googleapis.com/auth/admin.directory.customer.readonly")
        provider.addScope("https://www.googleapis.com/auth/analytics.readonly")
        provider.addScope("https://www.googleapis.com/auth/adsense.readonly")
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
        this.firebaseConfig.authInit.useDeviceLanguage();
        this.firebaseConfig.authInit.signInWithPopup(provider)
            .then(function(result)
            {
                data.userCred.googUserInfo = result.user;
                data.userCred.googAcsTkn = result.credential.accessToken;
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