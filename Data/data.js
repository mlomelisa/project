'use strict';
let API = 
{
    "auth": firebase.Auth(),
    "database": firebase.database(),
    "connected": false,
    "userCalender" : 
    {
        "userID": "id",
        "created": "msdate",
        "starts": "msdate",
        "expires": "msdate",
        "availableRecipes" : ["recipid", "recipeid"],
        "chosenRecipes" : ["recipid", "recipeid"],
        "schedule" : 
        {
            "localizedDateTime": "recipeID",
            "localizedDateTime2": "recipeID2",
        }
    },
    
    "userProfile" : 
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
        "newUser": false,
        "email": "unknown",
        //tracked
        "signupDate": "unknown",
        "lastSignIn": "unknown",
        "active": false,
        "anonymous": false,
    },

    //todo this function should take an argument which can replace the window.confirm. that way it can be called in context
    "authAgent": function()
    {
        firebase.auth().onAuthStateChanged(function(user){
            if (user)
            {
                this.refreshUserProfile()
                this.refreshBrowserData()
            }
            else
            {
                let response = window.confirm("Not Signed In: Sign in with Google?, hit yes to link your google account or cancel to remain anonymous. specifically I will be looking at: https://www.googleapis.com/auth/admin.directory.customer.readonly, https://www.googleapis.com/auth/analytics.readonly, https://www.googleapis.com/auth/adsense.readonly, https://www.googleapis.com/auth/contacts.readonly, even though I dont even know what kind of data this is structured as, also I am collecting all of your availble browser data, and I dont even know the legality of that... ")
                if(response)
                {
                    this.googleLogin()
                        .then(function ()
                        {
                            this.refreshUserProfile()
                            this.refreshBrowserData()
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
                    firebase.auth().signInAnonymously()
                        .then(function ()
                        {
                            this.userCred.anonymous = true;
                            this.refreshUserProfile()
                            this.refreshBrowserData()
                        })
                        .catch(function (err)
                        {
                            alert(`Error: ${err.message}`);
                            console.log(`Error: ${err.message}`)
                            console.log(`Error: ${err.stack}`)
                        }
                    )
                }
            }
            this.onUserChangeSetGlobalUser();
        })
    },

    "fbReadUserCreds": function(userid)
    {
        
        this.database.ref('/UserSettings/' + userid).once('usersettingsobject')
            .then(function(object)
            {
                let msDate = new Date(milliseconds);
                
                DataAPI.userCred.shipSelectionArray = object.shipSelectionArray;
                DataAPI.userCred.WinLossHistory = object.WinLossHistory;
                DataAPI.userCred.HighestScore = object.HighestScore;
                DataAPI.userCred.email = object.email;
                DataAPI.userCred.refreshToken = object.refreshToken;
                DataAPI.userCred.signupDate = object.signupDate;
                DataAPI.userCred.lastSignIn = msDate
                DataAPI.userCred.anonymous = object.anonymous
            })
            .catch(function (err)
            {
                alert(`Error: ${err.message}`);
                console.log(`Error: ${err.message}`)
                console.log(`Error: ${err.stack}`)
            })
    },
    //call this as part of our enviro on all entrypoints, attach to major listener
    "onUserChangeSetGlobalUser": function()
    {
        //user is undefined if no user is signed in
        firebase.auth().onAuthStateChanged(function(user)
        {
            window.user = user;
        })
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

    //builds browserdata object
    "refreshBrowserData" : function ()
    {
        window.browserName()
        {
            DataAPI.browserData.browserName = navigator.browserName;
        };
        
        window.browserEngine()
        {
            DataAPI.browserData.browserEngine = navigator.browserEngine;
        };

        window.browserVersion1a()
        {
            DataAPI.browserData.browserEngine = navigator.appVersion;
        };

        window.browserLanguage()
        {
            DataAPI.browserData.browserLanguage = navigator.language;
        };

        window.browserOnline()
        {
            DataAPI.browserData.browserOnline = navigator.onLine;
        };

        window.dataCookiesEnabled()
        {
            DataAPI.browserData.cookiesEnabled = navigator.cookieEnabled;
        };

        window.sizeScreenH()
        {
            DataAPI.browserData.sizeScreenH = screen.height;
        };

        window.sizeScreenW()
        {
            DataAPI.browserData.sizeScreenW = screen.width;
        };

        window.latitude()
        {
            DataAPI.browserData.latCoord = position.coords.latitude;
        };

        window.longitude()
        {
            DataAPI.browserData.longCoord = position.coords.longitude;
        };
        
        window.altitude()
        {
            DataAPI.browserData.altitude = position.coords.altitude;
        };

        window.accuracy()
        {
            DataAPI.browserData.accuracy = position.coords.accuracy;
        }

        window.referrer()
        {
            DataAPI.browserData.referrer = document.referrer;
        }

        window.previousSites()
        {
            DataAPI.browserData.previousSites = history;
        }
    },

    //obviously required to make firebase calls
    "InitFirebase": function()
    {
        let config = this.firebaseConfig
        this.database.initializeApp(config).then(this.connected = true)
    },

    //How do I hide this?
    "firebaseConfig":
    {
        apiKey: "AIzaSyC2FlvVF-Wi6l3IWPCCwaSaiNg3cZP6iNs",
        authDomain: "orion-7b3c4.firebaseapp.com",
        databaseURL: "https://orion-7b3c4.firebaseio.com",
        projectId: "orion-7b3c4",
        storageBucket: "orion-7b3c4.appspot.com",
        messagingSenderId: "620631967011",
        appId: "1:620631967011:web:16cff0f134a3e088"
    },

    //login via google
    "googleLogin": function()
    {
        var provider = new firebase.auth.googleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        provider.addScope("https://www.googleapis.com/auth/admin.directory.customer.readonly")
        provider.addScope("https://www.googleapis.com/auth/analytics.readonly")
        provider.addScope("https://www.googleapis.com/auth/adsense.readonly")
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
        firebase.auth().useDeviceLanguage();
        firebase.auth().signInWithPopup(provider)
            .then(function(result)
            {
                this.userCred.googUserInfo = result.user;
                this.userCred.googAcsTkn = result.credential.accessToken;
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

    "refreshUserProfile": function()
    {
        let currentUser = firebase.auth().currentUser;
        this.userCred.firebaseUserID = currentUser.uid;
        this.userCred.firebaseDisplayName = currentUser.displayName;
        this.userCred.active = true;
        
        if (this.userExists(currentUser.uid))
        {
            fbReadUserProfile(currentUser.uid)
        }
        else
        {
            this.userCred.newUser = true;
            this.addNewUser(currentUser.uid)
        }
    },

    "userExists": function(userID)
    {
        this.database.ref('/UserList').once('userlist')
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
    }
}