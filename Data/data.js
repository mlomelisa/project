'use strict';
let data = 
{
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
        appId: "1:791706584965:web:bd04f2511e920ae8"
    },

    //COMMANDS
    //required to make firebase calls
    "InitFirebase": function()
    {
        let config = this.firebaseConfig
        this.database.initializeApp(config).then(this.connected = true)
    },

//API
    //APICONFIGS
    "spoonify":
    {
        "project":"",
        "key":"0b151b0d8dmsh59752643ccdd463p17ee4cjsncd65478a0ec8",
        "host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    },

    //API CALLS
    "getRecipe": function(){
       
    }
    "getIngredient": function(){
        
    }
    "getMealPlan": function(time){
        let host = data.spoonify.url
        let mealgenerator = "/recipes/mealplans/generate?";
        let queryString = `${host}${mealgenerator}timeFrame=${time}`
        await appendCalories();
        await appendDietString();
        await appendExcludeString();
        
        $.ajax({
            type: "GET",
            beforeSend: function(request) {
              request.setRequestHeader("X-RapidAPI-Host", data.spoonify.host);
              request.setRequestHeader("X-RapidAPI-Key", data.spoonify.key );
            },
            url: queryString,
            success: function(msg) {
              $("#results").append("The result =" + StringifyPretty(msg));
            }
          });

          //query builders
          async function appendCalories()
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

          async function appendDietString()
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

          async function appendExcludeString()
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
    }
    



    //FrontEndAccessFuntions
    "generateSchedule": function(days)
    {
        
    }

    //URLBuilders
    "buildImageUrl": function()
    {
        id = recipeid
        https://spoonacular.com/recipeImages/{ID}-{SIZE}.{FILETYPE},
        90x90 
        312x231
        636x393
    }

    "buildgroceryProductImageUrl": function()
    {
        id = productid
        https://spoonacular.com/recipeImages/{ID}-{SIZE}.{FILETYPE},
        90x90 
        312x231
        636x393
    }

    "buildIngredientImageUrl": function() 
    {
        id = ingredientname
        https://spoonacular.com/cdn/ingredients_{SIZE}
    }


//WriteObjectsDB

//PubicDBQueries
    

    "GetRecipeID":  function(recipeID)
    {
        this.InitFirebase();
        this.database.ref('/knownRecipes').once('recipe')
            .then(function(snapshot)
            {
                if(snapshot.child(recipeID))
                {
                    return snapshot.recipeID;
                }
                else 
                {
                    call api
                    store recipe
                    return object
                }
            })

    },

    "GetIngredientID": function()
    {

    },

    "GetIngredientProducts": function()
    {

    },



//ACCESSIBLE DATA OBJECTS  
    "userCalender" : 
    {
        "userID": "id",
        "created": "msdate",
        //first 
        "starts": "msdate",
        //the last localized date time schedules, key/values.
        "expires": "msdate",
        //this a returned from an API Call which is all the recipe id's returned in meal query.
        "availableRecipes" : ["recipid", "recipeid"],
        //this is an array of recipes which a user can specify in advanced dashboard settings
        "chosenRecipes" : ["recipeid", "recipeid"],
        
        "schedule" : 
        {
            //this localizedDateTime represents when the recipe occurs:
            "localizedDateTime": "mealObject",
            "localizedDateTime2": "mealObject",
        }
    },

    "mealObject":
    {
        "day":1
        "mealPlanId":0
        "slot":1
        "position":0
        "type":"RECIPE"
        "value":"{"id":655786,"imageType":"jpg","title":"Persimmons Pumpkin Orange Smoothie With Chia Seeds"}"
    },
    
    "userHealthProfile" : 
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

    //
    "Recipe":
    {
        "ingredients": [{}, {}],
        "id": "string",
        "title" : "string",
        "readyInMinutes": int,
        "images": {
            "thumbnail" : "string",
            "small" : "string",
            "med" : "string"
        },
    
    },

    "Ingredient":
    {

    },

    "Product":
    {

    },

    "currentMealObject"
    
    
    
    
    
//AUTHENTICATION CLUSTER
    //AccessCommands
    "auth": firebase.Auth(),

    //AGENTS
    "authAgent": function()
    {
        this.InitFirebase();
        this.refreshBrowserData();
        this.auth.onAuthStateChanged(function(user){
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
        this.InitFirebase();
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
        this.InitFirebase();
        userNode = this.database.ref('/UserCreds/' + userID)
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
        this.InitFirebase();
        let msDate = new Date(milliseconds);
        let currentUser = this.auth.currentUser;
        this.userCred.firebaseDisplayName = currentUser.displayName;
        this.userCred.email = currentUser.email;
        this.userCred.refreshToken = currentUser.refreshToken;
        this.userCred.lastSignIn = msDate

        this.database.getInstance().getReference()
            .then(function(snapshot){
                snapshot.child(userList).child(userID).setValue(msDate)
            })
            .then(function(snapshot){
                snapshot.child(UserCreds).child(userID).child(msDate).setValue(data.userCred)
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
            let date = new Date(milliseconds)
            let expireDate = date + 2.628e+9 | 0
            window.document.cookie = (userID + '=' + (JSON.stringify(data.userCred)) + '; expires=' + expireDate);
        }
    },

    //CONDITIONS

    "userIDExists": function(userID)
    {
        this.InitFirebase();
        this.database.ref('/userList').once('userlist')
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
                    let currentUser = data.auth.currentUser;
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
            data.auth.signInAnonymously()
                .then(function ()
                {
                    let currentUser = data.auth.currentUser;
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
        this.InitFirebase();
        userNode = this.database.ref('/UserCreds/' + userID)
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
        this.InitFirebase();
        var provider = new firebase.auth.googleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        provider.addScope("https://www.googleapis.com/auth/admin.directory.customer.readonly")
        provider.addScope("https://www.googleapis.com/auth/analytics.readonly")
        provider.addScope("https://www.googleapis.com/auth/adsense.readonly")
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
        this.auth.useDeviceLanguage();
        this.auth.signInWithPopup(provider)
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