'use strict';
let GoogFirebase =
{
    "database": firebase.database(),
    "connected": false,
    
    "InitFirebase": function()
    {
        let config = this.firebaseConfig
        this.database.initializeApp(config).then(this.connected = true)
    },

    //How do I hide this?
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

    "AddUser" : function(creds)
    {
        this.ConnectIfDisconnected();
        
        let key = creds[2]
        let userData = 
        {
            "Name" : creds[0],
            "Email" : creds[1],
            "Service" : creds[3],
            "Status" : null,
            "Active" : true,
            "ChosenShips" : [],
            "GameHistory" : [],
            "HighestScore" : 0,
            "browserName" : null,
            "browserEngine" : null,
            "CookiesEnabled" : false,
            "screenHeightData" : []
        }
    },

    "ConnectIfDisconnected" : function()
    {
        if (this.connected === false)
        {
            this.InitFirebase()
        }
    },

    "GetUser" : function(user)
    {
        var name, email, uid, providerData
        
        if (user != null)
        {
            name = user.displayName;
            email = user.email;
            uid = user.uid
            providerData = user.providerData;
        }
        return (name, email, uid, providerData)
    },

    "ReadUserData" : function(key)
    {
        return data;
    },

    "SignInListener" : function()
    {
        this.database.auth().onAuthStateChanged(function(user) {
            if (user)
            {
                this.GetUser(user)
                //this.checkNewUser
            }
            else
            {
                googlecreds = this.PromptGoogSI()
                this.AddUser(creds)
            }
        });
    },

    "PromptGoogSI": function()
    {
        var provider = this.database.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
        firebase.auth().signInWithPopup(provider).then(function(result)
        {
            var token = result.credential.accessToken;
            var user = result.user;
            return (user, token)

        }).catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential

            console.log(errorCode, errorMessage, email, credential)
        })
    },
}