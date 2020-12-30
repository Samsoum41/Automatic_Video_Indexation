var params = {
    // Request parameters
    "location": "trial",
    //accountId: "1a206862-1b40-440c-9057-4a6c2bc9b364",
    "allowEdit": "true",
    "videoId": "",
    "videoURL": "",
    "accessToken": "",
    // Les informations du compte de Samy
    "accountId": "82003bd5-d1bb-46c6-9485-7f16f83a1b7f",
    "primaryKey": "f401d459fa904829a1df97c75f5abbeb"
}; 

var paramsRequest1 = {
    allowEdit: true
}

function getAccountToken(){
    $.ajax({
        url: "https://api.videoindexer.ai/Auth/"+ params.location +"/Accounts/"+ params.accountId +"/AccessToken?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("x-ms-client-request-id","");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",params.primaryKey);
        },
        type: "GET",
        // Request body
        async: false
    })
    .done(function(data) {
        console.log("L'obtention du token est un succès")
        params.accessToken = data
    })
    .fail(function(error) {
        console.log("L'obtention du token a échoué")
        console.log(error)
    });
}


// 2e requete
var paramsRequest2 = {
    name: prompt("Veuillez entrer le nom de la vidÃ©o"),
    videoURL: "https://sec.ch9.ms/ch9/4849/d5dd9965-a716-4c9f-baa6-42b33d8f4849/Python1_mid.mp4",
    accessToken: params.accessToken
}

function uploadVideo(){
    $.ajax({
    url: "https://api.videoindexer.ai/"+ params.location +"/Accounts/"+ params.accountId +"/Videos?" + $.param(paramsRequest2),
    beforeSend: function(xhrObj){
        // Request headers
        xhrObj.setRequestHeader("x-ms-client-request-id","");
        xhrObj.setRequestHeader("Content-Type","multipart/form-data");
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",params.primaryKey);
        },
    type: "POST",
    // Request body
    })
    .done(function(data) {
        console.log("Obtention des indexs réussie")
        params.videoId = data.id 
        console.log(params.videoId)
        console.log(data['id'])
    })
    .fail(function(data, error) {
        console.log("Il y a erreur dans l'obtention des indexs")
        console.log("data")
        console.log(data)
        console.log("erreur :")
        console.log(error)
    });
}


// 3e requete
var paramsRequest3 = {
    "language": "{string}",
    "reTranslate": "False",
    "includeStreamingUrls": "True",
    "accessToken": params.accessToken
}

function getVideoIndex(){
    $.ajax({
    url: "https://api.videoindexer.ai/"+ params.location +"/Accounts/"+ params.accountId +"/Videos/" + params.videoId + "/Index?" + $.param(paramsRequest3),
    beforeSend: function(xhrObj){
        // Request headers
        xhrObj.setRequestHeader("x-ms-client-request-id","");
        xhrObj.setRequestHeader("Content-Type","multipart/form-data");
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",params.primaryKey);
        },
    type: "POST",
    // Request body
    })
.done(function(data) {
    console.log("Ca marche !")
    params.videoId = data.id 
    console.log(params.videoId)
    console.log(data['id'])
    })
.fail(function(data, error) {
    console.log("Il y a erreur")
    console.log("data")
    console.log(data)
    console.log("erreur :")
    console.log(error)
    });
}